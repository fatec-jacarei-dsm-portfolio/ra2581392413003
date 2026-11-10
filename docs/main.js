// ===== TRADUÇÕES =====
const translations = {
  pt: {
    // Page Title
    "page-title": "Pollyana Roberta | Portfólio — Desenvolvedora Full Stack",

    // Navbar
    "logo": "Portfólio Polly",
    "nav-about": "Sobre Mim",
    "nav-education": "Formação",
    "nav-skills": "Habilidades",
    "nav-projects": "Projetos",
    "nav-contact": "Contato",

    // Hero
    "hero-greeting": "Olá, meu nome é",
    "hero-role-prefix": "e eu sou ",
    "hero-quote": "\"A tecnologia move o mundo.\" — Steve Jobs",

    // Sobre
    "about-title": "Sobre Mim",
    "about-p1": "Sou desenvolvedora de Software Multiplataforma em início de carreira, com foco em <strong>desenvolvimento Full Stack</strong> e experiência prática em projetos web, APIs, automações e aplicações interativas. Trabalho com <strong>JavaScript, TypeScript, React, Node.js, Python, SQL</strong> e criação de <strong>APIs REST</strong>, sempre buscando transformar ideias em soluções funcionais, organizadas e bem estruturadas.",
    "about-p2": "Ao longo da minha formação, desenvolvi projetos completos, desde sistemas web até jogos e experiências interativas em Unity, explorando lógica, dados e interface. Fora do código, gosto de jogos, leitura e exercício físico — interesses que influenciam meu modo de pensar, trazendo criatividade, disciplina e resolução de problemas para o desenvolvimento de software.",
    "about-btn": "Baixar Currículo",

    // Formação Acadêmica
    "edu-title": "Formação Acadêmica",
    "edu-1-period": "2024 – 2026",
    "edu-1-course": "Tecnologia em Desenvolvimento de Software Multiplataforma (CST)",
    "edu-1-inst": "FATEC Jacareí — Faculdade de Tecnologia do Estado de São Paulo (Jacareí/SP)",
    "edu-1-desc": "Formação superior tecnológica com foco em desenvolvimento Full Stack, engenharia de software, banco de dados, computação em nuvem, dispositivos móveis, inteligência artificial e metodologias ágeis (Scrum) aplicadas em projetos reais por semestre (ABP).",
    "edu-2-period": "2015 – 2020",
    "edu-2-course": "Licenciatura em Educação Física",
    "edu-2-inst": "Universidade Federal do Ceará (UFC) — Fortaleza/CE",
    "edu-2-desc": "Graduação cursada na UFC (não concluída devido à pandemia), período em que desenvolvi fortes competências em comunicação, didática, trabalho em equipe e liderança antes da transição de carreira para a área de tecnologia.",
    "edu-3-period": "Certificações & Cursos",
    "edu-3-course": "Certificações Acadêmicas e Formação Complementar",
    "edu-3-inst": "FATEC / Coursera (IBM) / DevMedia / Unity Learn",
    "edu-cert-1": "<strong>Certificado Profissional Desenvolvedor Front-End</strong> — Faculdade de Tecnologia (Fatec)",
    "edu-cert-2": "<strong>Certificado Profissional Desenvolvedor Back-End</strong> — Faculdade de Tecnologia (Fatec)",
    "edu-cert-3": "<strong>IBM Full Stack Software Developer</strong> — Coursera (módulos de Cloud Computing e Software Engineering)",
    "edu-cert-4": "<strong>Programador Full Stack</strong> — DevMedia (JavaScript, SQL, Front-end Web, React, Git/GitHub)",
    "edu-cert-5": "<strong>Ensino Médio Completo</strong> — EEFM Nunes Moraes (Pacajus/CE)",

    // Habilidades
    "skills-title": "Habilidades",

    // Projetos
    "projects-title": "Projetos",
    "projects-academic": "Projetos Acadêmicos (ABP – Fatec Jacareí)",
    "projects-personal": "Projetos Pessoais",
    "btn-view": "🔗 Ver Projeto",

    // Projetos Acadêmicos (Rótulo oficial ABP NDSM)
    "proj-acad-1-label": "ABP 1DSM – 1º Sem. 2024",
    "proj-acad-1-title": "Site de Metodologia Scrum — ABP 1DSM – 1º Sem. 2024",
    "proj-acad-1-desc": "Curso online sobre Scrum desenvolvido no 1º semestre de DSM/Fatec Jacareí, com foco em metodologias ágeis e colaboração em equipe. Atuei como Scrum Master e no desenvolvimento das páginas usando HTML e CSS.",
    "proj-acad-2-label": "ABP 2DSM – 2º Sem. 2024",
    "proj-acad-2-title": "Contador de Calorias — ABP 2DSM – 2º Sem. 2024",
    "proj-acad-2-desc": "Aplicação web para monitoramento calórico e recomendação de dietas, seguindo Scrum. UI em React/TypeScript e dados em PostgreSQL. Atuei como Scrum Master e no desenvolvimento das lógicas para realização do calculo do monitoramento calórico e features de tips para o usuário.",
    "proj-acad-3-label": "ABP 3DSM – 1º Sem. 2025",
    "proj-acad-3-title": "Estação Meteorológica — ABP 3DSM – 1º Sem. 2025",
    "proj-acad-3-desc": "Plataforma web para dados de estações no Lago de Furnas: gráficos, tabelas, comparação, download em CSV e alertas aos navegantes. Atuei como Scrum Master e no desenvolvimento das telas de cadastro e login dos usuários, responsividade do sistema e recurso de download dos dados.",
    "proj-acad-4-label": "ABP 4DSM – 2º Sem. 2025",
    "proj-acad-4-title": "Sistema de Captura Remota para Microscópios — ABP 4DSM – 2º Sem. 2025",
    "proj-acad-4-desc": "Sistema que coleta imagens e vídeos de microscópios ópticos via câmera digital acoplada, transmite vídeo em tempo real via Wi-Fi para nuvem, com app mobile e interface web. Atuei como Scrum Master e no desenvolvimento do front end web do sistema, além de documentação.",
    "proj-acad-5-label": "ABP 5DSM – 1º Sem. 2026",
    "proj-acad-5-title": "WizardVision — ABP 5DSM – 1º Sem. 2026",
    "proj-acad-5-desc": "Sistema de informações para análise de desempenho físico de atletas de futebol com Inteligência Artificial e algoritmos de Machine Learning. Atuei como Scrum Master e no desenvolvimento do backend do sistema, desde a autenticação, importação de dados, desenvolvimento da API e aplicação de algoritmos de machine learning.",

    // Projetos Pessoais
    "proj-pes-1-title": "Sorveteria",
    "proj-pes-1-desc": "SPA com React e Next.js representando o site de uma sorveteria fictícia.",
    "proj-pes-2-title": "Agência de Design Digital",
    "proj-pes-2-desc": "SPA em React/Next.js para uma agência fictícia, com alternância de tema escuro.",
    "proj-pes-3-title": "Ótica Vida",
    "proj-pes-3-desc": "SPA em React/Next.js para uma ótica fictícia.",
    "proj-pes-4-title": "Landing Page Barbearia",
    "proj-pes-4-desc": "Landing page em React com controle de tema via useState (modo escuro).",
    "proj-pes-5-title": "Clínica Médica",
    "proj-pes-5-desc": "Site institucional para clínica médica fictícia.",
    "proj-pes-6-title": "Pousada Secreta",
    "proj-pes-6-desc": "Website institucional de uma pousada fictícia.",
    "proj-pes-7-title": "Provedor de Hospedagem",
    "proj-pes-7-desc": "Landing page para empresa de hospedagem.",
    "proj-pes-8-title": "Cafeteria",
    "proj-pes-8-desc": "Landing page para cafeteria urbana fictícia.",
    "proj-pes-9-title": "Módulo Unity Essentials",
    "proj-pes-9-desc": "Projeto do módulo Unity Essentials (Unity Learn) para fundamentos da engine.",

    // Contato (Redes Profissionais)
    "contact-title": "Redes Profissionais",
    "contact-subtitle": "Conecte-se comigo pelas minhas redes profissionais para acompanhar meus projetos, repositórios e trajetória acadêmica e profissional:",
    "contact-linkedin-desc": "Perfil profissional, conexões e experiências na área de tecnologia.",
    "contact-github-desc": "Repositórios de código, projetos acadêmicos (ABP) e projetos pessoais.",

    // Footer
    "footer": "Copyright © 2026 by Pollyana Roberta | Todos os direitos reservados."
  },

  en: {
    // Page Title
    "page-title": "Pollyana Roberta | Portfolio — Full Stack Developer",

    // Navbar
    "logo": "Polly's Portfolio",
    "nav-about": "About Me",
    "nav-education": "Education",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    // Hero
    "hero-greeting": "Hi, my name is",
    "hero-role-prefix": "and I'm a ",
    "hero-quote": "\"Technology moves the world.\" — Steve Jobs",

    // About
    "about-title": "About Me",
    "about-p1": "I'm an early-career Multiplatform Software Developer focused on <strong>Full Stack development</strong> with hands-on experience in web projects, APIs, automation, and interactive applications. I work with <strong>JavaScript, TypeScript, React, Node.js, Python, SQL</strong> and building <strong>REST APIs</strong>, always striving to turn ideas into functional, organized, and well-structured solutions.",
    "about-p2": "Throughout my studies, I've built complete projects — from web systems to games and interactive experiences in Unity — exploring logic, data, and interface design. Outside of code, I enjoy gaming, reading, and working out — interests that shape my thinking, bringing creativity, discipline, and problem-solving to software development.",
    "about-btn": "Download Resume",

    // Academic Background
    "edu-title": "Academic Background",
    "edu-1-period": "2024 – 2026",
    "edu-1-course": "Multiplatform Software Development (Associate Degree / CST)",
    "edu-1-inst": "FATEC Jacareí — São Paulo State Technological College (Jacareí/SP)",
    "edu-1-desc": "Higher education technology program focused on Full Stack development, software engineering, databases, cloud computing, mobile applications, artificial intelligence, and agile methodologies (Scrum) applied to real-world semester projects (ABP).",
    "edu-2-period": "2015 – 2020",
    "edu-2-course": "Bachelor of Physical Education (Teaching Degree)",
    "edu-2-inst": "Federal University of Ceará (UFC) — Fortaleza/CE",
    "edu-2-desc": "Undergraduate studies at UFC (uncompleted due to the pandemic), where I built strong skills in communication, teaching, teamwork, and leadership before transitioning into technology.",
    "edu-3-period": "Certifications & Courses",
    "edu-3-course": "Academic Certifications & Continuing Education",
    "edu-3-inst": "FATEC / Coursera (IBM) / DevMedia / Unity Learn",
    "edu-cert-1": "<strong>Front-End Developer Professional Certificate</strong> — Fatec",
    "edu-cert-2": "<strong>Back-End Developer Professional Certificate</strong> — Fatec",
    "edu-cert-3": "<strong>IBM Full Stack Software Developer</strong> — Coursera (Cloud Computing and Software Engineering modules)",
    "edu-cert-4": "<strong>Full Stack Programmer</strong> — DevMedia (JavaScript, SQL, Front-end Web, React, Git/GitHub)",
    "edu-cert-5": "<strong>High School Diploma</strong> — EEFM Nunes Moraes (Pacajus/CE)",

    // Skills
    "skills-title": "Skills",

    // Projects
    "projects-title": "Projects",
    "projects-academic": "Academic Projects (ABP – Fatec Jacareí)",
    "projects-personal": "Personal Projects",
    "btn-view": "🔗 View Project",

    // Academic Projects (Official ABP NDSM label preserved)
    "proj-acad-1-label": "ABP 1DSM – 1º Sem. 2024",
    "proj-acad-1-title": "Scrum Methodology Website — ABP 1DSM – 1º Sem. 2024",
    "proj-acad-1-desc": "Online course on Scrum developed in the 1st semester of DSM/Fatec Jacareí, focusing on agile methodologies and team collaboration. I served as Scrum Master and worked on page development using HTML and CSS.",
    "proj-acad-2-label": "ABP 2DSM – 2º Sem. 2024",
    "proj-acad-2-title": "Calorie Counter — ABP 2DSM – 2º Sem. 2024",
    "proj-acad-2-desc": "Web application for calorie tracking and diet recommendations, following Scrum. UI built with React/TypeScript and PostgreSQL database. I served as Scrum Master and developed the logic for calorie calculations as well as user tips features.",
    "proj-acad-3-label": "ABP 3DSM – 1º Sem. 2025",
    "proj-acad-3-title": "Weather Station — ABP 3DSM – 1º Sem. 2025",
    "proj-acad-3-desc": "Web platform for weather station data at Furnas Lake: charts, tables, comparisons, CSV download, and navigation alerts. I served as Scrum Master and developed user registration and login screens, system responsiveness, and the data export feature.",
    "proj-acad-4-label": "ABP 4DSM – 2º Sem. 2025",
    "proj-acad-4-title": "Remote Capture System for Microscopes — ABP 4DSM – 2º Sem. 2025",
    "proj-acad-4-desc": "System that captures images and videos from optical microscopes via an attached digital camera, streaming real-time video over Wi-Fi to the cloud, with a mobile app and web interface. I served as Scrum Master, developed the system's web front end, and handled documentation.",
    "proj-acad-5-label": "ABP 5DSM – 1º Sem. 2026",
    "proj-acad-5-title": "WizardVision — ABP 5DSM – 1º Sem. 2026",
    "proj-acad-5-desc": "Information system for analyzing the physical performance of soccer players using Artificial Intelligence and Machine Learning algorithms. I served as Scrum Master and worked on backend development, covering authentication, data import, API development, and machine learning algorithm implementation.",

    // Personal Projects
    "proj-pes-1-title": "Ice Cream Shop",
    "proj-pes-1-desc": "SPA built with React and Next.js representing a fictional ice cream shop website.",
    "proj-pes-2-title": "Digital Design Agency",
    "proj-pes-2-desc": "React/Next.js SPA for a fictional agency with dark theme toggle.",
    "proj-pes-3-title": "Ótica Vida (Eyewear Shop)",
    "proj-pes-3-desc": "React/Next.js SPA for a fictional eyewear store.",
    "proj-pes-4-title": "Barbershop Landing Page",
    "proj-pes-4-desc": "React landing page with theme control via useState (dark mode).",
    "proj-pes-5-title": "Medical Clinic",
    "proj-pes-5-desc": "Institutional website for a fictional medical clinic.",
    "proj-pes-6-title": "Secret Inn",
    "proj-pes-6-desc": "Institutional website for a fictional inn.",
    "proj-pes-7-title": "Hosting Provider",
    "proj-pes-7-desc": "Landing page for a hosting company.",
    "proj-pes-8-title": "Coffee Shop",
    "proj-pes-8-desc": "Landing page for a fictional urban coffee shop.",
    "proj-pes-9-title": "Unity Essentials Module",
    "proj-pes-9-desc": "Unity Essentials module project (Unity Learn) for engine fundamentals.",

    // Contact (Professional Networks)
    "contact-title": "Professional Networks",
    "contact-subtitle": "Connect with me through my professional networks to follow my projects, repositories, and academic and professional journey:",
    "contact-linkedin-desc": "Professional profile, network connections, and experience in technology.",
    "contact-github-desc": "Code repositories, academic projects (ABP), and personal projects.",

    // Footer
    "footer": "Copyright © 2026 by Pollyana Roberta | All rights reserved."
  }
};

// Frases do Typed.js por idioma
const typedStrings = {
  pt: [
    "Desenvolvedora Full Stack.",
    "Quem não desiste no primeiro boss.",
    "Alguém que acredita em aprendizado contínuo.",
    "Entusiasta de IA.",
    "Alguém que transforma café em código.",
    "Programadora.",
    "Apaixonada por aprender coisas novas.",
    "Curiosa por natureza."
  ],
  en: [
    "Full Stack Developer.",
    "Someone who doesn't give up on the first boss.",
    "A believer in continuous learning.",
    "AI Enthusiast.",
    "Someone who turns coffee into code.",
    "Programmer.",
    "Passionate about learning new things.",
    "Curious by nature."
  ]
};

// ===== ESTADO GLOBAL =====
let currentLang = localStorage.getItem("lang") || "pt";
let typedInstance = null;

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", function () {
  applyLang(currentLang);
});

// ===== TROCAR IDIOMA =====
function toggleLang() {
  currentLang = currentLang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", currentLang);
  applyLang(currentLang);
}

// ===== APLICAR IDIOMA =====
function applyLang(lang) {
  const dict = translations[lang];

  // Atualizar botão
  const btn = document.getElementById("btn-lang");
  if (lang === "pt") {
    btn.textContent = "🇺🇸 EN";
  } else {
    btn.textContent = "🇧🇷 PT";
  }

  // Atualizar atributo lang e título do HTML
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  if (dict["page-title"]) {
    document.title = dict["page-title"];
  }

  // Atualizar textos via data-i18n (innerHTML para suportar <strong>)
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Atualizar o prefixo do hero (e eu sou / and I'm a)
  document.querySelectorAll("[data-i18n-prefix]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-prefix");
    if (dict[key]) {
      // Preservar o <span class="text"> dentro
      var span = el.querySelector(".text");
      el.innerHTML = dict[key];
      if (span) {
        el.appendChild(span);
      } else {
        var newSpan = document.createElement("span");
        newSpan.className = "text";
        el.appendChild(newSpan);
      }
    }
  });

  // Atualizar placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Reiniciar Typed.js com as frases do idioma correto
  initTyped(lang);
}

// ===== TYPED.JS =====
function initTyped(lang) {
  // Destruir instância anterior se existir
  if (typedInstance) {
    typedInstance.destroy();
  }

  typedInstance = new Typed(".text", {
    strings: typedStrings[lang],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 1200,
    smartBackspace: true,
    loop: true
  });
}
