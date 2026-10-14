import type { APIRoute } from 'astro'
import { normalizeMessages } from '../../lib/server/ai'
import { askLeeOrchestrator } from '../../ia'
import type { Lang } from '../../ia'

const sseHeaders = {
  'Content-Type': 'text/event-stream; charset=utf-8',
  'Cache-Control': 'no-cache, no-transform',
  Connection: 'keep-alive',
  'X-Accel-Buffering': 'no'
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => ({}))
  const messages = normalizeMessages(
    (body as { messages?: unknown }).messages
  ) as { role: 'user' | 'assistant'; content: string }[]
  const lang = ((body as { lang?: string }).lang ?? 'es') as Lang

  const encoder = new TextEncoder()
  const sse = (o: unknown) => encoder.encode(`data: ${JSON.stringify(o)}\n\n`)

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const { result, meta } = await askLeeOrchestrator({
          messages,
          lang,
          onRoute: (decision) =>
            controller.enqueue(
              sse({
                type: 'route',
                mode: decision.mode,
                agents: decision.toolKeys
              })
            )
        })
        for await (const delta of result.textStream) {
          controller.enqueue(sse({ type: 'chunk', content: delta }))
        }
        controller.enqueue(
          sse({
            type: 'done',
            sources: meta.sources,
            agents: meta.toolsUsed,
            confidence: meta.confidence
          })
        )
      } catch {
        controller.enqueue(sse({ type: 'error', message: 'stream_failed' }))
      } finally {
        controller.close()
      }
    }
  })

  return new Response(stream, { headers: sseHeaders })
}
