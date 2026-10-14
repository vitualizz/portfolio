import type { LanguageLocale } from 'src/types/I18n.types'

const locale: LanguageLocale = {
  nav: {
    presentation: 'Presentación',
    about_me: 'Sobre mí',
    projects: 'Proyectos',
    contact_me: 'Contáctame',
    blog: 'Blog',
    resume_label: 'Currículum',
    switch_language: 'Cambiar idioma',
    language_option: 'Cambiar a {language}',
    toggle_theme: 'Cambiar tema',
    open_menu: 'Abrir menú',
    close_menu: 'Cerrar menú',
    main_navigation: 'Navegación principal',
    mobile_navigation: 'Navegación móvil'
  },
  home: {
    about_title: 'Acerca de mí',
    about_subtitle:
      'El humano detrás del código — qué me mueve, qué hago, y qué tengo en la caja de herramientas.',
    ai_title: 'Pregúntale a Lee',
    ai_subtitle:
      'Una IA entrenada con mi CV, mi stack y mis proyectos. Hazle preguntas técnicas, sobre mi experiencia o lo que quieras.',
    projects_title: 'Trabajo seleccionado',
    projects_subtitle:
      'Producto en producción. Cada tarjeta abre la demo o el código.',
    xp_title: 'Mi recorrido',
    xp_subtitle:
      'Cuatro paradas profesionales, una constante: producto que se envía.',
    blog_title: 'Lo que escribo',
    blog_subtitle: 'Notas técnicas sobre lo que voy aprendiendo.',
    contact_title: 'Hablemos.<br/>Cuéntame sobre tu proyecto.',
    contact_subtitle:
      'Si estás armando equipo y buscas a alguien que tome ownership de punta a punta, ordene la arquitectura y sostenga entregas reales, hablemos. Me muevo cómodo entre producto, backend y negocio, y respondo en menos de 24 horas hábiles.',
    paused_label: 'pausado',
    footer_location_line: 'Lima, UTC−5. Español e inglés.',
    quote_text:
      "El código es la parte fácil. <span class='hl'>Enviar producto que aguante</span> — y que el equipo entienda al volver el lunes — es el trabajo.",
    stack_legend_core: 'Core',
    stack_legend_strong: 'Sólido',
    stack_legend_learn: 'Aprendiendo'
  },
  presentation: {
    hi: 'Hola,',
    i_am: "Soy <span class='hl text-nowrap'>Lee Palacios</span>",
    profession: 'Senior Fullstack Engineer y AI Builder',
    description:
      "<span class='hl'>+7 años</span> entregando producto <strong class='text-ink'>end‑to‑end</strong> en startups LATAM. <strong class='text-ink'>API, base de datos, UI e infra</strong> — la cadena completa, sin pasar la pelota. TypeScript, React, Rails, Python, AWS. Cuando la feature lo pide, también agentes de IA en producción.",
    description_ps:
      'PD: mis tres gatos revisan cada PR antes que cualquier humano. Aún no me han aprobado un rebase --force.',
    online_tag: 'vitualizz en línea',
    ask_label: 'Pregúntale algo a mi IA',
    ask_placeholder: 'Pregúntale algo a mi IA: ¿qué stack usas?',
    ask_submit: 'Preguntar'
  },
  about_me: {
    biography: [
      "Empecé a programar a los <span class='hl-soft'>12 años</span> queriendo vender origamis por internet — el primer HTML que escribí fue una página de producto. A los <span class='hl-soft'>15 ya cobraba</span> por escribir software — antes de saber cómo se llamaba el oficio.",
      "Desde entonces, mi carrera ha sido un recorrido por startups LATAM: de <strong class='text-ink'>developer</strong> a <strong class='text-ink'>Tech Lead</strong> a <strong class='text-ink'>Senior IC</strong>. Construí un sistema de campañas para influencers desde cero, optimicé una plataforma SaaS usada por miles de edificios, y refactoricé stacks que un equipo entero heredó sin documentación. Cada parada me dejó lo mismo: <span class='hl-soft'>producto que se envía</span>.",
      "Hoy me defino como <strong class='text-ink'>Senior Fullstack Engineer</strong> con <strong class='text-ink'>7+ años</strong> de experiencia: entrego features <strong class='text-ink'>end-to-end</strong> — schema, API, UI, infra — sin pasar la pelota a otro equipo. En el último año sumé <b class='text-mint'>AI Builder</b> a la mochila: agentes y LLMs cuando la feature lo justifica, no por hype.",
      "Caja de herramientas rápida: <strong class='text-ink'>TypeScript, React/React Native, Rails, Python, Postgres, AWS</strong>. El detalle vive en mi CV — ahí también está el resto del recorrido."
    ],
    mini_note:
      'Lima. Español nativo, inglés fluido. Tres gatos que aprueban mi código.',
    stack_footer:
      '→ alguien que prefiere <b>aprender una herramienta a fondo</b> que coleccionar 20 logos en el CV.'
  },
  terminal: {
    placeholder: 'escribe un comando, por ejemplo: help',
    help: 'comandos: help, ls, cat <archivo>, cd <carpeta>, whoami, ask <pregunta>, meow, clear',
    not_found: 'comando no encontrado: {cmd}. Escribe help.',
    no_file: 'no existe: {file}. Prueba ls.',
    whoami:
      'lee · Senior Fullstack Engineer · 7+ años, 20+ proyectos en producción, 3 gatos · Lima',
    cd_done: 'ahora en ~/stack/{dir}',
    cd_missing: 'carpeta no encontrada: {dir}. Prueba ls stack.',
    ask_sent: 'pregunta enviada a Lee IA. Bajando a la respuesta.',
    ask_empty: 'uso: ask <tu pregunta>',
    meow: 'miau. se escaparon unos gatos.',
    contact_lines: [
      'github:   https://github.com/vitualizz',
      'linkedin: https://linkedin.com/in/vitualizz',
      'formulario: escribe "contact" o baja al final de la página'
    ],
    open_done: 'abriendo {name} en una pestaña nueva',
    open_missing: 'proyecto no encontrado: {name}. Prueba cat projects.txt',
    theme_done: 'tema: {theme}',
    accent_done: 'acento: {accent}',
    accent_missing: 'acentos disponibles: yellow, coral, mint, violet',
    welcome: 'escribe help o pulsa Tab para autocompletar'
  },
  palette: {
    hint: 'Pulsa ⌘K',
    title: 'Paleta de comandos',
    placeholder: 'Escribe un comando o una pregunta para la IA…',
    group_go: 'Ir a',
    group_do: 'Acciones',
    group_ask: 'Preguntar a Lee IA',
    ask_prefix: 'Preguntar:',
    empty: 'Sin comandos. Pulsa Enter para preguntárselo a la IA.',
    go_about: 'Sobre mí',
    go_ai: 'Pregúntale a Lee',
    go_projects: 'Proyectos',
    go_xp: 'Experiencia',
    go_blog: 'Blog',
    go_contact: 'Contacto',
    toggle_theme: 'Cambiar tema claro / oscuro',
    accent_yellow: 'Acento amarillo',
    accent_coral: 'Acento coral',
    accent_mint: 'Acento menta',
    accent_violet: 'Acento violeta',
    switch_lang: 'Switch to English',
    download_cv: 'Descargar currículum',
    open_github: 'Abrir GitHub',
    open_linkedin: 'Abrir LinkedIn',
    meow: 'Soltar gatos'
  },
  projects: {
    live_preview: 'Ver proyecto',
    ask_about: 'Preguntar a la IA',
    ask_about_question:
      'Cuéntame sobre {title}: qué problema resolvía, qué hizo Lee y con qué stack.'
  },
  footer: {
    thanks: 'Con amor @vitualizz'
  },
  blog: {
    title: 'Últimos Posts',
    read_article: 'Leer artículo',
    back_to_blog: '← Volver al blog',
    min_read: 'min de lectura',
    see_all: 'Ver todos los posts',
    index_title: 'Notas del campo de batalla',
    index_subtitle:
      'Lo que voy aprendiendo construyendo backends, agentes y SaaS en producción. Sin hype, sin "10 razones por las que…" — solo código, decisiones y a veces los tres gatos opinando al lado.',
    filter_label: 'Filtrar',
    filter_all: 'Todo',
    filter_search_placeholder: 'Buscar entre los posts...',
    featured_label: 'Último post',
    closer_title: '¿Quieres recibir los nuevos posts antes que nadie?',
    closer_text:
      'Por ahora no tengo newsletter — pero puedes seguirme en GitHub o LinkedIn, y si te gustó algo, escríbeme. Respondo a todo lo que llega.',
    closer_github: 'Seguirme en GitHub',
    closer_contact: 'Escríbeme',
    mascot_text: 'fin de la lista — vuelve pronto, los gatos también escriben',
    empty_title: 'Ningún post coincide',
    empty_text:
      'Prueba con otro tag o limpia la búsqueda. Los gatos también se confunden a veces.',
    follow_label: 'Mantente en contacto',
    follow_title: '¿Quieres seguir en contacto?',
    follow_body:
      'Si te sirvió este post, la mejor forma de seguir mi trabajo es GitHub y LinkedIn — publico ahí primero.',
    follow_github: 'Seguirme en GitHub',
    follow_linkedin: 'Conectar en LinkedIn',
    post_nav_prev: '← Anterior',
    post_nav_next: 'Siguiente →',
    more_posts_title: 'Otras cosas que escribí',
    share_prompt: '¿Te sirvió?',
    share_cta: 'Compartir',
    contact_cta: 'Escríbeme',
    toc_title: 'En este post',
    ai_title: 'Pregúntale a Lee IA sobre este post',
    ai_intro:
      'Un asistente que leyó este post y responde como si fuera yo. Haz preguntas técnicas o pide un resumen.',
    ai_placeholder: 'Pregunta sobre el post…',
    ai_send: 'Enviar',
    ai_user: 'TÚ',
    ai_error: 'Algo se cayó. Intenta de nuevo.',
    ai_empty: 'No pude generar una respuesta.',
    ai_open: 'Preguntar a la IA',
    ai_close: 'Cerrar',
    ai_ask_selection: 'Preguntar sobre esto',
    ai_selection_prompt: 'Explícame esta parte del post: «{text}»',
    ai_suggestions: [
      'Resúmeme el post en 3 líneas',
      '¿Cuál es el punto más importante?',
      '¿Cómo aplicar esto en producción?'
    ],
    author_line: 'Senior Fullstack Engineer y AI Builder. Lima.'
  },
  ai: {
    greeting:
      'Pregúntame sobre <b class="hl">backend</b>, <b class="hl">arquitectura</b>, <b class="hl">agentes de IA</b>, <b class="hl">Postgres</b> o proyectos reales en producción.',
    hint: 'Elige una pregunta sugerida o escribe la tuya.',
    input_placeholder: 'Escribe tu pregunta para Lee...',
    send_aria: 'Enviar',
    thinking: 'pensando...',
    error_fallback: 'No pude procesar tu pregunta. Intenta de nuevo.',
    crash_fallback:
      'Ups, algo se cayó. Escríbeme directo por el formulario de contacto.',
    user_avatar: 'TÚ',
    consulting: 'consultando',
    sources_label: 'Fuentes',
    agent_experience: 'experiencia',
    agent_projects: 'proyectos',
    agent_skills: 'stack',
    agent_blog: 'blog',
    disclaimer:
      'La IA puede cometer errores o inventar cosas. Para lo que realmente importa,',
    disclaimer_link: 'escríbeme directo.',
    tabs: {
      backend:
        '¿Cuál ha sido tu proyecto backend más complejo y qué aprendiste de él?',
      ai_builder:
        'Cuéntame sobre tu experiencia construyendo con LLMs y agentes de IA. ¿Qué stack usas?',
      postgres:
        'Si te pidiera optimizar una query lenta de Postgres en producción, ¿por dónde empezarías?',
      culture:
        '¿Qué buscas en tu próximo equipo? ¿Qué tipo de cultura te hace feliz?'
    },
    tab_labels: {
      backend: 'Backend',
      ai_builder: 'AI builder',
      postgres: 'Postgres',
      culture: 'Cultura'
    }
  },
  contact_modal: {
    close_aria: 'Cerrar',
    title: 'Cuéntame sobre tu proyecto',
    subtitle:
      'Respondo en menos de 24 horas hábiles. Para algo urgente, ping también por LinkedIn.',
    name_label: 'Tu nombre',
    name_placeholder: 'ej. Ana Pérez',
    email_label: 'Email',
    email_placeholder: 'tu@email.com',
    message_label: 'Mensaje',
    message_placeholder: 'Cuéntame qué necesitas, qué stack tienes, plazos...',
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    submit_error: 'Error — intenta de nuevo',
    success_title: '¡Mensaje enviado!',
    success_text: 'Te contesto en menos de 24h hábiles.'
  },
  resume_actions: {
    preview: 'Vista previa',
    download: 'Descargar',
    menu_aria: 'Abrir acciones del currículum',
    preview_modal_title: 'Vista previa del currículum',
    preview_modal_close_aria: 'Cerrar vista previa del currículum',
    preview_modal_fallback: 'Abrir currículum en una nueva pestaña'
  },
  seo: {
    title: 'Lee Palacios | Tech Lead Fullstack · JS, Ruby & IA',
    description:
      'Ingeniero fullstack con +7 años en startups de Latam. Backend sólido, arquitectura y agentes de IA para equipos que priorizan velocidad y calidad.',
    image: '/img/seo/og-image.png',
    url: 'https://vitualizz.vercel.app/es'
  }
}

export default locale
