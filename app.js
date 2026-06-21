const { useState, useEffect, useRef } = React;

/* ---------------- DATA (from CV + GitHub) ---------------- */
const LINKS = {
  email: "mohamedmagdy2208@gmail.com",
  phone: "+20 1080 859 485",
  github: "https://github.com/MohamedMagdy2208",
  linkedin: "https://www.linkedin.com/in/mohamed-magdy-a70779216",
  kaggle: "https://www.kaggle.com/mohamedmagdy2208",
  cv: "https://gumloop.com/files/TAdtkDqAbaivnYaY7QdDmb?version_id=gx3SPa4uRjbuevZX5dzMro",
  location: "Cairo, Egypt",
};

const SKILLS = [
  { group: "Generative AI & Search", items: ["OpenAI", "LLMs (GPT, LLaMA)", "AI Agents", "Prompt Engineering", "Standard & Graph RAG", "Vector Databases", "Hybrid Search (HNSW, BM25)", "Advanced Chunking", "LangChain", "LangSmith"] },
  { group: "Cloud & Infrastructure", items: ["Microsoft Azure", "Azure OpenAI", "Azure AI Services", "Docker", "Git", "CI/CD"] },
  { group: "Backend & Automation", items: ["FastAPI", "Redis Caching", "n8n"] },
  { group: "Machine Learning & CV", items: ["CNNs", "Transformers", "YOLO", "SAM", "Scikit-Learn", "TensorFlow", "PyTorch"] },
  { group: "Data & BI", items: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Tableau", "Excel"] },
  { group: "Engineering", items: ["Digital Twins", "Predictive Maintenance"] },
];

const PROJECTS = [
  {
    title: "Chat With CVs — RAG System",
    tag: "Generative AI · RAG",
    desc: "An LLM-powered RAG system that lets you chat with and query CVs/documents in natural language — retrieval pipelines over unstructured text for intelligent document Q&A.",
    stack: ["Python", "LLMs", "RAG", "Vector DB", "LangChain"],
    accent: "cyan", lang: "Python", stars: 1,
    url: "https://github.com/MohamedMagdy2208/Chat-With-CVs-Rag-System",
  },
  {
    title: "Chat With Database",
    tag: "AI Agents · LLM",
    desc: "A natural-language-to-SQL agent that translates plain-English questions into database queries, letting non-technical users explore data conversationally through an LLM.",
    stack: ["Python", "LLMs", "SQL", "AI Agents"],
    accent: "violet", lang: "Python", stars: 1,
    url: "https://github.com/MohamedMagdy2208/Chat-With-Database",
  },
  {
    title: "Azure AI Document Intelligence",
    tag: "Azure · Document AI",
    desc: "A Streamlit app built on Azure AI Document Intelligence Studio for enterprise-grade document parsing, extraction and analysis — production document intelligence in action.",
    stack: ["Azure AI", "Streamlit", "Python", "OCR"],
    accent: "cyan", lang: "Python", stars: 0,
    url: "https://github.com/MohamedMagdy2208/azure-ai-document-intelligence-studio-latest",
  },
  {
    title: "Brain Tumor Detection — CNN",
    tag: "Computer Vision · Deep Learning",
    desc: "A Convolutional Neural Network for classifying brain tumors from MRI scans — applying deep learning to medical imaging for high-accuracy diagnostic support.",
    stack: ["CNN", "TensorFlow", "OpenCV", "Medical Imaging"],
    accent: "violet", lang: "Jupyter Notebook", stars: 2,
    url: "https://github.com/MohamedMagdy2208/Brain-Tumor-CNN",
  },
  {
    title: "LLM Sentiment Analysis",
    tag: "NLP · LLM",
    desc: "Sentiment classification powered by large language models, extracting tone and emotion from text with modern transformer-based NLP techniques.",
    stack: ["Python", "LLMs", "Transformers", "NLP"],
    accent: "cyan", lang: "Python", stars: 1,
    url: "https://github.com/MohamedMagdy2208/LLM-Sentiment-Analysis",
  },
  {
    title: "Breast Cancer Prediction — ANN",
    tag: "Machine Learning · Healthcare",
    desc: "An Artificial Neural Network predicting breast cancer diagnoses from clinical features — end-to-end ML pipeline for reliable, data-driven medical classification.",
    stack: ["ANN", "Scikit-Learn", "Pandas", "NumPy"],
    accent: "violet", lang: "Jupyter Notebook", stars: 2,
    url: "https://github.com/MohamedMagdy2208/Breast-Cancer-ANN",
  },
];

const EXPERIENCE = [
  { role: "AI Engineer Intern — Client Solutions & GenAI", org: "Global Brands Group (GBG)", loc: "Cairo, Egypt", date: "Feb 2026 – Present", points: ["Selected for a 6-month client-facing extension after graduating as a Top Achiever with Highest Commendation.", "Architected a production-ready Airport Lost & Found System (LLMs, Graph RAG, FastAPI, Redis) on Azure.", "Designed high-accuracy retrieval pipelines with Hybrid Search (HNSW & BM25), LangChain and LangSmith."] },
  { role: "AI & Digital Twin Engineer Intern", org: "Siemens Industry 4.0 Innovation Center (ITIDA)", loc: "New Administrative Capital, Egypt", date: "Jan 2026 – Mar 2026", points: ["Built Digital Twin simulations to model and optimize manufacturing workflows.", "Implemented AI-based monitoring for smart factories to reduce downtime.", "Designed predictive maintenance algorithms from real-time sensor data."] },
  { role: "Digital Twin Engineering Trainee", org: "National Telecommunication Institute (NTI)", loc: "Cairo, Egypt", date: "Oct 2025 – Jan 2026", points: ["Built end-to-end predictive maintenance ML models to forecast equipment failures.", "Integrated AI models into real-time dashboards for engineering teams.", "Optimized industrial workflow simulations, reducing process latency."] },
  { role: "Research Scholar — ContiLab (Fully Funded)", org: "Chung-Ang University (CAU)", loc: "Seoul, South Korea", date: "Mar 2025", points: ["Won a competitive fully funded scholarship in Construction Safety Management.", "Developed YOLO Computer Vision models for real-time hazard detection.", "Engineered Unity Digital Twin simulations for complex safety scenarios."] },
  { role: "AI & Data Science Trainee — IBM Track", org: "Digital Egypt Pioneers (DEPI), MCIT", loc: "Cairo, Egypt", date: "Apr 2024 – Oct 2024", points: ["Mastered advanced Data Science: Python, SQL, Deep Learning.", "Built and deployed a full-stack ML capstone solving a real business problem.", "Applied statistical analysis to optimize decision-making."] },
  { role: "Data Analysis Intern", org: "Fawry MSME Finance", loc: "Cairo, Egypt", date: "Jul 2024 – Sep 2024", points: ["Designed executive KPI dashboards in Power BI for Marketing & Sales.", "Automated reporting with Python and Excel.", "Built SQL/Pandas pipelines for high-quality data."] },
];

const CERTS = [
  { icon: "trophy", title: "Top Achiever — Highest Commendation", org: "Global Brands Group GenAI Program", note: "Certificate of Achievement, top of program" },
  { icon: "globe", title: "Fully Funded Research Scholarship", org: "Chung-Ang University, Seoul 🇰🇷", note: "Competitive selection — Construction Safety AI" },
  { icon: "spark", title: "AI & Data Science — IBM Track", org: "Digital Egypt Pioneers (DEPI), MCIT", note: "Full-stack ML capstone, deployed to production" },
  { icon: "chip", title: "Industry 4.0 Digital Twin", org: "Siemens Innovation Center · NTI", note: "Predictive maintenance & smart-factory AI" },
];

/* ---------------- HELPERS ---------------- */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* Count-up number animation */
function CountUp({ value, suffix = "", duration = 1400 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const Icon = ({ d, className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
const icons = {
  github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
  chart: <><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></>,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  arrow: <><path d="M5 12h14M12 5l7 7-7 7"/></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></>,
  star: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></>,
  up: <><path d="M12 19V5M5 12l7-7 7 7"/></>,
  trophy: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></>,
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  chip: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></>,
};

/* ---------------- COMPONENTS ---------------- */
function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Experience", "Contact"];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono font-bold text-lg grad-text">MM<span className="text-gray-500">.ai</span></a>
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-400">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className={`nav-link hover:text-cyan-glow transition-colors ${active === l.toLowerCase() ? "active" : ""}`}>{l}</a>)}
          <a href={LINKS.cv} target="_blank" rel="noopener" download className="flex items-center gap-1.5 text-gray-300 hover:text-cyan-glow transition"><Icon d={icons.download} className="w-4 h-4"/> CV</a>
          <a href={`mailto:${LINKS.email}`} className="px-4 py-2 rounded-lg text-ink font-semibold bg-gradient-to-r from-cyan-glow to-violet-glow hover:opacity-90 transition">Hire Me</a>
        </div>
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon d={open ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>} className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink-soft border-t border-white/5 px-5 py-4 flex flex-col gap-4 text-gray-300">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-cyan-glow">{l}</a>)}
          <a href={LINKS.cv} target="_blank" rel="noopener" download onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-cyan-glow"><Icon d={icons.download} className="w-4 h-4"/> Download CV</a>
          <a href={`mailto:${LINKS.email}`} className="px-4 py-2 rounded-lg text-ink font-semibold text-center bg-gradient-to-r from-cyan-glow to-violet-glow">Hire Me</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const roles = ["Generative AI Engineer", "Graph RAG Architect", "Computer Vision Engineer", "Digital Twin Engineer"];
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = roles[idx];
    let t;
    if (!del && txt.length < cur.length) t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 70);
    else if (!del && txt.length === cur.length) t = setTimeout(() => setDel(true), 1600);
    else if (del && txt.length > 0) t = setTimeout(() => setTxt(cur.slice(0, txt.length - 1)), 35);
    else { setDel(false); setIdx((idx + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [txt, del, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-5">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-glow border border-cyan-glow/30 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse"></span> Available for AI roles
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Mohamed Magdy
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-mono">
            <span className="grad-text font-semibold">{txt}</span><span className="cursor h-6"></span>
          </p>
          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            AI Engineer & Data Scientist specializing in <span className="text-gray-200">Generative AI</span>, <span className="text-gray-200">Computer Vision</span> and <span className="text-gray-200">Industry 4.0</span> systems. I turn complex AI architectures — from Graph RAG to Digital Twins — into production-ready business value.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-lg text-ink font-semibold bg-gradient-to-r from-cyan-glow to-violet-glow hover:opacity-90 transition flex items-center gap-2">View Projects <Icon d={icons.arrow} className="w-4 h-4"/></a>
            <a href={LINKS.cv} target="_blank" rel="noopener" download className="px-6 py-3 rounded-lg font-semibold glow-border text-gray-200 hover:text-white transition flex items-center gap-2"><Icon d={icons.download} className="w-4 h-4"/> Download CV</a>
          </div>
          <div className="mt-8 flex items-center gap-5 text-gray-400">
            <a href={LINKS.github} target="_blank" className="hover:text-cyan-glow transition" aria-label="GitHub"><Icon d={icons.github}/></a>
            <a href={LINKS.linkedin} target="_blank" className="hover:text-cyan-glow transition" aria-label="LinkedIn"><Icon d={icons.linkedin}/></a>
            <a href={LINKS.kaggle} target="_blank" className="hover:text-cyan-glow transition" aria-label="Kaggle"><Icon d={icons.chart}/></a>
            <a href={`mailto:${LINKS.email}`} className="hover:text-cyan-glow transition" aria-label="Email"><Icon d={icons.mail}/></a>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="float relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl p-[3px] bg-gradient-to-br from-cyan-glow to-violet-glow glow-cyan">
              <img src="profile.jpg" alt="Mohamed Magdy — AI Engineer" loading="eager" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute -top-3 -right-3 bg-ink-soft glow-border rounded-lg px-3 py-2 text-xs font-mono text-cyan-glow">Top Achiever 🏆</div>
            <div className="absolute -bottom-3 -left-3 bg-ink-soft glow-border rounded-lg px-3 py-2 text-xs font-mono text-violet-glow">6+ AI roles</div>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-glow transition animate-bounce" aria-label="Scroll down">
        <Icon d={<path d="M12 5v14M5 12l7 7 7-7"/>} className="w-6 h-6"/>
      </a>
    </section>
  );
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative px-5 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="font-mono text-cyan-glow text-sm mb-2">{kicker}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
          <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-cyan-glow to-violet-glow"></div>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { v: 12, suffix: "+", l: "AI/ML Technologies" },
    { v: 6, suffix: "+", l: "AI & Data Roles" },
    { v: 15, suffix: "", l: "GitHub Projects" },
    { v: 2, suffix: "", l: "Countries (EG · KR)" },
  ];
  return (
    <Section id="about" kicker="01 — About" title="Who I Am">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 reveal space-y-4 text-gray-400 leading-relaxed">
          <p>I'm an <span className="text-gray-100 font-medium">AI Engineer</span> based in Cairo, Egypt, building enterprise-grade Generative AI and Computer Vision systems. My work spans <span className="text-cyan-glow">standard & Graph RAG pipelines</span>, LLM-powered workflows, and highly optimized hybrid search solutions deployed to production on Azure.</p>
          <p>I've engineered everything from an <span className="text-gray-100">Airport Lost & Found System</span> for real clients, to <span className="text-gray-100">Digital Twins</span> and predictive maintenance systems for Industry 4.0, to <span className="text-gray-100">YOLO-based hazard detection</span> during a fully-funded research scholarship in South Korea.</p>
          <p>I love translating complex AI architectures into measurable, real-world business value.</p>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-ink-soft glow-border rounded-xl p-5 text-center hover:scale-[1.03] transition">
              <div className="text-2xl font-bold grad-text font-mono"><CountUp value={s.v} suffix={s.suffix} /></div>
              <div className="text-xs text-gray-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" kicker="02 — Stack" title="Technical Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((s, i) => (
          <div key={s.group} className="reveal bg-ink-soft glow-border rounded-xl p-6 hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 40}ms` }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-cyan-glow"><Icon d={icons.spark} className="w-4 h-4"/></span>
              <h3 className="font-semibold text-white text-sm">{s.group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-glow/40 hover:text-cyan-glow transition">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" kicker="03 — Work" title="Featured Projects">
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <div key={p.title} className="reveal group bg-ink-soft glow-border rounded-xl p-6 flex flex-col hover:-translate-y-1.5 transition" style={{ transitionDelay: `${i * 50}ms` }}>
            <div className="flex items-start justify-between gap-3">
              <div className={`text-xs font-mono ${p.accent === 'cyan' ? 'text-cyan-glow' : 'text-violet-glow'}`}>{p.tag}</div>
              <a href={p.url} target="_blank" className="text-gray-500 group-hover:text-cyan-glow transition" aria-label="Code"><Icon d={icons.github} className="w-5 h-5"/></a>
            </div>
            <a href={p.url} target="_blank"><h3 className="mt-3 text-lg font-semibold text-white group-hover:grad-text transition">{p.title}</h3></a>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed flex-1">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">{t}</span>)}
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-4 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5"><span className={`w-2.5 h-2.5 rounded-full ${p.lang === 'Python' ? 'bg-cyan-glow' : 'bg-violet-glow'}`}></span>{p.lang}</span>
              <span className="flex items-center gap-1"><Icon d={icons.star} className="w-3.5 h-3.5"/> {p.stars}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="reveal mt-10 text-center">
        <a href={LINKS.github} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold glow-border text-gray-200 hover:text-cyan-glow transition">
          <Icon d={icons.github} className="w-5 h-5"/> View all 15 repositories on GitHub <Icon d={icons.arrow} className="w-4 h-4"/>
        </a>
      </div>
    </Section>
  );
}

function Certs() {
  return (
    <Section id="certs" kicker="04 — Recognition" title="Achievements & Certifications">
      <div className="grid sm:grid-cols-2 gap-6">
        {CERTS.map((c, i) => (
          <div key={c.title} className="reveal bg-ink-soft glow-border rounded-xl p-6 flex gap-4 items-start hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 50}ms` }}>
            <div className="shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-glow/20 to-violet-glow/20 flex items-center justify-center text-cyan-glow">
              <Icon d={icons[c.icon]} className="w-5 h-5"/>
            </div>
            <div>
              <h3 className="font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-cyan-glow/90 mt-0.5">{c.org}</p>
              <p className="text-sm text-gray-500 mt-1">{c.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" kicker="05 — Journey" title="Experience">
      <div className="relative border-l border-white/10 ml-3 space-y-10">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="reveal relative pl-8">
            <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-glow to-violet-glow glow-cyan"></span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-white">{e.role}</h3>
              <span className="text-xs font-mono text-cyan-glow">{e.date}</span>
            </div>
            <p className="text-sm text-gray-400 mt-0.5">{e.org} · <span className="text-gray-500">{e.loc}</span></p>
            <ul className="mt-3 space-y-1.5">
              {e.points.map((pt, j) => (
                <li key={j} className="text-sm text-gray-400 flex gap-2"><span className="text-violet-glow mt-1">▹</span><span>{pt}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="reveal mt-12 bg-ink-soft glow-border rounded-xl p-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-white">B.Sc. Computer Science</h3>
          <p className="text-sm text-gray-400">October 6 University · GPA 3.37 / 4.0</p>
        </div>
        <span className="text-xs font-mono text-cyan-glow">2019 – 2023</span>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="06 — Contact" title="Let's Build Something">
      <div className="reveal bg-gradient-to-br from-cyan-glow/10 to-violet-glow/10 glow-border rounded-2xl p-8 sm:p-12 text-center">
        <p className="text-gray-300 max-w-xl mx-auto">I'm open to AI Engineering and Data Science opportunities. Whether it's Generative AI, Computer Vision, or Industry 4.0 — let's talk.</p>
        <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 mt-7 px-8 py-3.5 rounded-lg text-ink font-semibold bg-gradient-to-r from-cyan-glow to-violet-glow hover:opacity-90 transition">
          <Icon d={icons.mail} className="w-5 h-5"/> {LINKS.email}
        </a>
        <div className="mt-8 flex items-center justify-center gap-6 text-gray-400 flex-wrap">
          <a href={LINKS.github} target="_blank" className="hover:text-cyan-glow transition flex items-center gap-2 text-sm"><Icon d={icons.github}/> GitHub</a>
          <a href={LINKS.linkedin} target="_blank" className="hover:text-cyan-glow transition flex items-center gap-2 text-sm"><Icon d={icons.linkedin}/> LinkedIn</a>
          <a href={LINKS.kaggle} target="_blank" className="hover:text-cyan-glow transition flex items-center gap-2 text-sm"><Icon d={icons.chart}/> Kaggle</a>
          <a href={LINKS.cv} target="_blank" rel="noopener" download className="hover:text-cyan-glow transition flex items-center gap-2 text-sm"><Icon d={icons.download}/> CV</a>
        </div>
        <p className="mt-6 text-sm text-gray-500 font-mono flex items-center justify-center gap-2"><Icon d={icons.pin} className="w-4 h-4"/> {LINKS.location} · {LINKS.phone}</p>
      </div>
      <p className="text-center text-gray-600 text-xs mt-12 font-mono">© 2026 Mohamed Magdy · <a href="https://mohamedmagdy.site" className="hover:text-cyan-glow transition">mohamedmagdy.site</a> · Built with React + Tailwind</p>
    </Section>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button id="back-to-top" className={show ? "show" : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
      <Icon d={icons.up} className="w-5 h-5"/>
    </button>
  );
}

/* Scroll progress + scrollspy hook */
function useScrollUI(setActive) {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const ids = ["about", "skills", "projects", "certs", "experience", "contact"];
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.width = pct + "%";
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

function App() {
  const [active, setActive] = useState("");
  useReveal();
  useScrollUI(setActive);
  return (
    <div className="relative z-10">
      <Nav active={active} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certs />
      <Experience />
      <Contact />
      <BackToTop />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* ---------------- Neural network canvas background ---------------- */
(function neuralCanvas() {
  const canvas = document.getElementById("neural-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles, mouse = { x: -999, y: -999 };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(90, Math.floor((w * h) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // mouse repulsion
      const dxm = p.x - mouse.x, dym = p.y - mouse.y;
      const dm = Math.hypot(dxm, dym);
      if (dm < 120) { p.x += dxm / dm * 0.8; p.y += dym / dm * 0.8; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34, 211, 238, 0.55)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          const op = (1 - dist / 130) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(140, 130, 240, ${op})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseout", () => { mouse.x = -999; mouse.y = -999; });
  resize();
  draw(); // animates if motion allowed, else renders a single static frame
})();

/* ---------------- Preloader removal ---------------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    const pre = document.getElementById("preloader");
    if (pre) pre.classList.add("hide");
  }, 500);
});
