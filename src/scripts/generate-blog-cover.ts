import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import sharp from 'sharp'
import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog')
const USAGE = 'Usage: pnpm blog:cover <slug> [--force]'

const ART_DIRECTOR = `You are the art director of Lee Palacios' software engineering blog.
Write ONE image prompt for a 1536x1024 editorial cover.

Brand: near-black night sky (#0b0c10) with sparse stars as the backdrop, warm yellow (#f3d463) as the single accent color, off-white for type. Flat, bold, graphic. A sleek cat may appear as a small hidden detail, never as the subject.

Composition:
- The image will be cropped to 1200x630: keep the headline and every key element inside the middle 75% of the height and at least 8% away from the left and right edges.
- A headline set in a heavy grotesque sans-serif (like Bricolage Grotesque), large, left-aligned, occupying about a third of the frame. Choose 1 to 4 words that capture the post's central idea; prefer words that read the same in Spanish and English (technical terms, names), otherwise use English. Quote the words in your prompt so they are spelled exactly, and allow nothing else written anywhere. Nothing may overlap or touch the headline: the metaphor sits beside it, never on top of it.
- One concrete visual metaphor taken from the post's central idea, not its general topic. Show the mechanism or the tension the post is about with real objects (e.g. two hands pulling one lever, a switchboard, a stamp, a ticket, a chat bubble cut in half).
- Pick the style that suits the idea best and name it: editorial vector illustration, risograph print, paper collage, isometric diagram, or Swiss typographic poster.

Avoid: landscapes, nebulae, glowing orbs, circuit boards, floating code, laptops, robots, glowing brains, photorealism, gradients as the main subject.

Return only the prompt.`

type Post = {
  title: string
  summary: string
  tags: string[]
  headings: string[]
}

function readPost(slugDir: string): Post {
  const file = ['es.mdx', 'en.mdx']
    .map((name) => path.join(slugDir, name))
    .find((p) => fs.existsSync(p))
  if (!file) throw new Error(`No es.mdx or en.mdx in ${slugDir}`)

  const { data, content } = matter(fs.readFileSync(file, 'utf-8'))
  return {
    title: String(data.title ?? ''),
    summary: String(data.shortDescription ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    headings: [...content.matchAll(/^##\s+(.+)$/gm)]
      .map((m) => m[1].trim())
      .slice(0, 8)
  }
}

async function writePrompt(post: Post, apiKey: string) {
  const openai = createOpenAI({ apiKey })
  const { text: prompt } = await generateText({
    model: openai('gpt-4o'),
    system: ART_DIRECTOR,
    prompt: [
      `Post title: ${post.title}`,
      `Summary: ${post.summary}`,
      `Tags: ${post.tags.join(', ')}`,
      `Sections: ${post.headings.join(' | ')}`
    ].join('\n'),
    temperature: 0.9
  })
  return prompt.trim()
}

async function generateImage(prompt: string, apiKey: string): Promise<Buffer> {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt,
      size: '1536x1024',
      quality: 'high'
    })
  })
  if (!res.ok)
    throw new Error(
      `Image generation failed (${res.status}): ${await res.text()}`
    )

  const json = (await res.json()) as { data?: Array<{ b64_json?: string }> }
  const b64 = json.data?.[0]?.b64_json
  if (!b64) throw new Error('Image API returned no data')
  return Buffer.from(b64, 'base64')
}

async function main() {
  const args = process.argv.slice(2)
  const slug = args.find((a) => !a.startsWith('--'))
  const force = args.includes('--force')
  const apiKey = process.env.OPENAI_API_KEY

  if (!slug) throw new Error(USAGE)
  if (!apiKey) throw new Error('Missing OPENAI_API_KEY in .env')

  const slugDir = path.join(BLOG_DIR, slug)
  if (!fs.existsSync(slugDir)) throw new Error(`Unknown slug: ${slug}`)

  const output = path.join(slugDir, 'cover.webp')
  if (fs.existsSync(output) && !force)
    throw new Error(`${output} exists. Use --force to overwrite.`)

  const prompt = await writePrompt(readPost(slugDir), apiKey)
  console.log(`[blog:cover] Prompt:\n${prompt}\n`)

  const image = await generateImage(prompt, apiKey)
  await sharp(image)
    .resize(1200, 630, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(output)
  console.log(`[blog:cover] Wrote ${output}`)
}

main().catch((err: unknown) => {
  console.error(
    `[blog:cover] ${err instanceof Error ? err.message : String(err)}`
  )
  process.exit(1)
})
