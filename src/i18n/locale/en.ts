import type { LanguageLocale } from 'src/types/I18n.types'

const locale: LanguageLocale = {
  nav: {
    presentation: 'Presentation',
    about_me: 'About me',
    projects: 'Projects',
    contact_me: 'Contact me',
    blog: 'Blog',
    resume_label: 'Resume',
    switch_language: 'Switch language',
    language_option: 'Switch to {language}',
    toggle_theme: 'Toggle theme',
    open_menu: 'Open menu',
    close_menu: 'Close menu',
    main_navigation: 'Main navigation',
    mobile_navigation: 'Mobile navigation'
  },
  home: {
    about_title: 'About me',
    about_subtitle:
      'The human behind the code — what drives me, what I do, and what is in my toolbox.',
    ai_title: 'Ask Lee',
    ai_subtitle:
      'An AI trained on my CV, my stack and my projects. Ask technical questions, about my experience, or whatever you want.',
    projects_title: 'Selected work',
    projects_subtitle:
      'Product in production. Each card opens the demo or the code.',
    xp_title: 'My journey',
    xp_subtitle: 'Four professional stops, one constant: shipped product.',
    blog_title: 'What I write',
    blog_subtitle: 'Technical notes about what I am learning.',
    contact_title: "Let's talk.<br/>Tell me about your project.",
    contact_subtitle:
      "If your team needs someone who can take ownership end to end, shape architecture, and keep delivery moving, let's talk. I work close to product, backend, and business outcomes, and I reply within 24 business hours.",
    paused_label: 'paused',
    footer_location_line: 'Lima, UTC−5. Spanish and English.',
    quote_text:
      "Code is the easy part. <span class='hl'>Shipping product that holds</span> — and that the team understands coming back on Monday — is the work.",
    stack_legend_core: 'Core',
    stack_legend_strong: 'Solid',
    stack_legend_learn: 'Learning'
  },
  presentation: {
    hi: 'Hi,',
    i_am: "I'm <span class='hl text-nowrap'>Lee Palacios</span>",
    profession: 'Senior Fullstack Engineer and AI Builder',
    description:
      "<span class='hl'>+7 years</span> delivering <strong class='text-ink'>end‑to‑end</strong> product in LatAm startups. <strong class='text-ink'>API, database, UI and infra</strong> — the full chain, no ball-dropping. TypeScript, React, Rails, Python, AWS. When the feature calls for it, AI agents in production too.",
    description_ps:
      "PS: my three cats review every PR before any human does. They haven't approved a rebase --force yet.",
    online_tag: 'vitualizz online',
    ask_label: 'Ask my AI something',
    ask_placeholder: 'Ask my AI something: which stack do you use?',
    ask_submit: 'Ask'
  },
  about_me: {
    biography: [
      "I started coding at <span class='hl-soft'>12 years old</span> by opening game files to understand how they worked. By <span class='hl-soft'>15 I was already getting paid</span> to write software — before I even knew the job had a name.",
      "Since then, my career has been a journey through LatAm startups: from <strong class='text-ink'>developer</strong> to <strong class='text-ink'>Tech Lead</strong> to <strong class='text-ink'>Senior IC</strong>. I built an influencer campaign platform from scratch, optimized a SaaS used by thousands of buildings, and refactored stacks inherited by a whole team without documentation. Every stop taught me the same thing: <span class='hl-soft'>shipped product</span>.",
      "Today I define myself as a <strong class='text-ink'>Senior Fullstack Engineer</strong> with <strong class='text-ink'>7+ years</strong> of experience: I deliver features <strong class='text-ink'>end-to-end</strong> — schema, API, UI, infra — without passing the ball to another team. In the last year I added <span class='hl'>AI Builder</span> to my toolkit: agents and LLMs when the feature justifies it, not just for the hype.",
      "Quick toolbox: <strong class='text-ink'>TypeScript, React/React Native, Rails, Python, Postgres, AWS</strong>. The full detail lives in my CV — along with the rest of the journey."
    ],
    mini_note:
      'Lima. Native Spanish, fluent English. Three cats that approve my code.',
    stack_footer:
      '→ someone who prefers <b>learning one tool deeply</b> over collecting 20 logos on a resume.'
  },
  terminal: {
    placeholder: 'type a command, for example: help',
    help: 'commands: help, ls, cat <file>, cd <dir>, whoami, ask <question>, meow, clear',
    not_found: 'command not found: {cmd}. Type help.',
    no_file: 'no such file: {file}. Try ls.',
    whoami:
      'lee · Senior Fullstack Engineer · 7+ years, 20+ projects in production, 3 cats · Lima',
    cd_done: 'now in ~/stack/{dir}',
    cd_missing: 'no such directory: {dir}. Try ls stack.',
    ask_sent: 'question sent to Lee AI. Scrolling to the answer.',
    ask_empty: 'usage: ask <your question>',
    meow: 'meow. some cats got loose.',
    contact_lines: [
      'github:   https://github.com/vitualizz',
      'linkedin: https://linkedin.com/in/vitualizz',
      'form: type "contact" or scroll to the end of the page'
    ],
    open_done: 'opening {name} in a new tab',
    open_missing: 'project not found: {name}. Try cat projects.txt',
    theme_done: 'theme: {theme}',
    accent_done: 'accent: {accent}',
    accent_missing: 'available accents: yellow, coral, mint, violet',
    welcome: 'type help or press Tab to autocomplete'
  },
  palette: {
    hint: 'Press ⌘K',
    title: 'Command palette',
    placeholder: 'Type a command or a question for the AI…',
    group_go: 'Go to',
    group_do: 'Actions',
    group_ask: 'Ask Lee AI',
    ask_prefix: 'Ask:',
    empty: 'No commands. Press Enter to ask the AI.',
    go_about: 'About me',
    go_ai: 'Ask Lee',
    go_projects: 'Projects',
    go_xp: 'Experience',
    go_blog: 'Blog',
    go_contact: 'Contact',
    toggle_theme: 'Toggle light / dark theme',
    accent_yellow: 'Yellow accent',
    accent_coral: 'Coral accent',
    accent_mint: 'Mint accent',
    accent_violet: 'Violet accent',
    switch_lang: 'Cambiar a español',
    download_cv: 'Download resume',
    open_github: 'Open GitHub',
    open_linkedin: 'Open LinkedIn',
    meow: 'Release the cats'
  },
  projects: {
    live_preview: 'View project',
    ask_about: 'Ask the AI',
    ask_about_question:
      'Tell me about {title}: what problem it solved, what Lee did and with which stack.'
  },
  footer: {
    thanks: 'With love @vitualizz'
  },
  blog: {
    title: 'Latest Posts',
    read_article: 'Read article',
    back_to_blog: '← Back to blog',
    min_read: 'min read',
    see_all: 'See all posts',
    index_title: 'Notes from the trenches',
    index_subtitle:
      "What I'm learning building backends, agents, and SaaS in production. No hype, no '10 reasons why...' — just code, decisions, and sometimes three cats giving their take.",
    filter_label: 'Filter',
    filter_all: 'All',
    filter_search_placeholder: 'Search posts...',
    featured_label: 'Latest',
    closer_title: 'Want to get new posts before anyone else?',
    closer_text:
      'No newsletter yet — but you can follow me on GitHub or LinkedIn. If something resonated, write to me. I reply to everything.',
    closer_github: 'Follow on GitHub',
    closer_contact: 'Write to me',
    mascot_text: 'end of list — check back soon, the cats write too',
    empty_title: 'No posts match',
    empty_text:
      'Try another tag or clear the search. Even cats get confused sometimes.',
    follow_label: 'Stay connected',
    follow_title: 'Want to keep in touch?',
    follow_body:
      'If you enjoyed this post, the best way to follow my work is GitHub and LinkedIn — I publish there first.',
    follow_github: 'Follow on GitHub',
    follow_linkedin: 'Connect on LinkedIn',
    post_nav_prev: '← Previous',
    post_nav_next: 'Next →',
    more_posts_title: 'Other things I wrote',
    share_prompt: 'Was this helpful?',
    share_cta: 'Share',
    contact_cta: 'Contact',
    toc_title: 'In this post',
    ai_title: 'Ask Lee AI about this post',
    ai_intro:
      'An assistant that read this post and answers as if it were me. Ask technical questions or request a summary.',
    ai_placeholder: 'Ask about the post…',
    ai_send: 'Send',
    ai_user: 'YOU',
    ai_error: 'Something broke. Try again.',
    ai_empty: 'I could not generate an answer.',
    ai_open: 'Ask the AI',
    ai_close: 'Close',
    ai_ask_selection: 'Ask about this',
    ai_selection_prompt: 'Explain this part of the post: "{text}"',
    ai_suggestions: [
      'Summarize the post in 3 lines',
      'What is the most important point?',
      'How do I apply this in production?'
    ],
    author_line: 'Senior Fullstack Engineer and AI Builder. Lima.'
  },
  ai: {
    greeting:
      'Ask me about <b class="hl">backend</b>, <b class="hl">architecture</b>, <b class="hl">AI agents</b>, <b class="hl">Postgres</b>, or real projects in production.',
    hint: 'Pick a suggested question or write your own.',
    input_placeholder: 'Write your question for Lee...',
    send_aria: 'Send',
    thinking: 'thinking...',
    error_fallback: 'I could not process your question. Please try again.',
    crash_fallback:
      'Oops, something failed. Message me directly through the contact form.',
    user_avatar: 'YOU',
    consulting: 'consulting',
    sources_label: 'Sources',
    agent_experience: 'experience',
    agent_projects: 'projects',
    agent_skills: 'stack',
    agent_blog: 'blog',
    disclaimer:
      'AI can make mistakes or hallucinate. For anything that actually matters,',
    disclaimer_link: 'reach out directly.',
    tabs: {
      backend:
        'What has been your most complex backend project and what did you learn from it?',
      ai_builder:
        'Tell me about your experience building with LLMs and AI agents. Which stack do you use?',
      postgres:
        'If I ask you to optimize a slow Postgres query in production, where would you start?',
      culture:
        'What are you looking for in your next team? What kind of culture makes you happy?'
    },
    tab_labels: {
      backend: 'Backend',
      ai_builder: 'AI builder',
      postgres: 'Postgres',
      culture: 'Culture'
    }
  },
  contact_modal: {
    close_aria: 'Close',
    title: 'Tell me about your project',
    subtitle:
      'I reply within 24 business hours. For urgent topics, ping me on LinkedIn too.',
    name_label: 'Your name',
    name_placeholder: 'e.g. Ana Perez',
    email_label: 'Email',
    email_placeholder: 'you@email.com',
    message_label: 'Message',
    message_placeholder: 'Tell me what you need, current stack, timeline...',
    submit: 'Send message',
    submitting: 'Sending...',
    submit_error: 'Error — try again',
    success_title: 'Message sent!',
    success_text: 'I will reply within 24 business hours.'
  },
  resume_actions: {
    preview: 'Preview',
    download: 'Download',
    menu_aria: 'Open resume actions',
    preview_modal_title: 'Resume preview',
    preview_modal_close_aria: 'Close resume preview',
    preview_modal_fallback: 'Open resume in a new tab'
  },
  seo: {
    title: 'Lee Palacios | Senior Fullstack Engineer · JS, Ruby & AI',
    description:
      '7+ years shipping product at LatAm startups. Specialized in backend, architecture, and AI agents for teams that need speed without quality tradeoffs.',
    image: '/img/seo/og-image.png',
    url: 'https://vitualizz.vercel.app/en'
  }
}

export default locale
