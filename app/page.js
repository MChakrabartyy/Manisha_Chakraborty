import ThemeToggle from './ThemeToggle';
import Sides from './Sides';
import ScrollFX from './ScrollFX';
import Rotator from './Rotator';
import CopyEmail from './CopyEmail';
import Note from './Note';
import { Sticker } from './Stickers';

const GH = 'https://github.com/MChakrabartyy';
const LI = 'https://www.linkedin.com/in/manisha-chakraborty';
const EMAIL = 'mchakr11@asu.edu';

const rotating = [
  'ships AI agents to production.',
  'turns 5-day tasks into 10-minute queries.',
  'co-founded ASU’s AWS Student Builders Club.',
  'has won 4 hackathons (so far).',
  'grew a 5,000-member AI community 12×.',
];

const experience = [
  {
    when: 'Jun 2026 – now',
    role: 'AI Engineering Co-op',
    org: 'Precisely Software',
    place: 'Burlington, MA',
    now: true,
    points: [
      'Architected a production agentic RAG system on Claude that pulls from 7 enterprise sources and cut talent assessment prep from 5 days to under 10 minutes.',
      'Built the whole pipeline for automated 9-box scoring: nightly ingestion, LLM orchestration, a FastAPI service and a React front end.',
      'Gathered requirements from 6 data owners and took it from prototype to production on Azure AI in 10 weeks.',
    ],
  },
  {
    when: 'Aug 2026 – now',
    role: 'Agentic Engineer',
    org: 'Enterprise Technology, ASU',
    place: 'Tempe, AZ',
    now: true,
    points: [
      'Ship features and fixes in enterprise codebases with an AI-first workflow (Claude Code, Cursor) for code, tests and docs.',
      'Keep AWS-hosted platforms healthy across REST APIs, data pipelines, CI/CD and infrastructure-as-code, from code review to incident response.',
    ],
  },
  {
    when: 'Mar 2026 – now',
    role: 'QA Engineer',
    org: 'EdPlus, ASU',
    place: 'Scottsdale, AZ',
    now: true,
    points: ['Built AI-assisted validation pipelines in Python that caught 290+ defects across 250+ student-facing modules before they ever went live.'],
  },
  {
    when: 'Aug 2024 – Mar 2026',
    role: 'Software Developer',
    org: 'Barrett Honors College, ASU',
    place: 'Tempe, AZ',
    points: ['Built a Python and React platform tying together Salesforce, Canvas and AV system APIs, cutting manual work by 30% across 3 departments.'],
  },
];

const projects = [
  {
    name: 'Decoy',
    stamp: '2nd of 80+ teams · DevHacks ’25',
    blurb:
      'Built in 24 hours. Decoy listens to live phone calls through Twilio and flags scams in real time with an agentic OpenAI pipeline that uses tool-calling.',
    impact: '93% precision · 25% lower latency with response caching',
    tags: ['Python', 'Flask', 'React', 'Twilio', 'OpenAI API'],
    note: 'scammers, beware',
  },
  {
    name: 'CollabCode',
    when: 'Dec 2025',
    blurb:
      'A multiplayer code editor with an AI debugger inside it. Llama 3.3 70B is grounded in the project’s own code history, with domain-anchored retrieval as a hallucination guardrail.',
    impact: '40% faster debugging · sub-50ms sync across 10+ sessions',
    tags: ['TypeScript', 'React', 'WebSocket', 'CRDTs', 'Durable Objects', 'Llama 3.3'],
    link: `${GH}/CollabCode`,
  },
  {
    name: 'SignalNote',
    when: 'Jan 2026',
    blurb:
      'Reads raw product feedback, detects intent with an LLM on Cloudflare Workers AI, and routes each entry to the right owner.',
    impact: '1,000+ entries routed at sub-100ms · 60% less manual triage',
    tags: ['React', 'Python', 'REST APIs', 'SQL', 'Workers AI', 'KV'],
    link: `${GH}/SignalNote`,
  },
];

const models = [
  { name: 'Claude', use: 'My pick for enterprise reasoning over messy, multi-source data. It runs the Precisely agent in production.' },
  { name: 'Llama 3.3 70B', use: 'Open weights at the edge, grounded in code history for CollabCode’s debugger.' },
  { name: 'GPT', use: 'Low-latency classification on live call audio in Decoy.' },
];

const toolbox = [
  ['GenAI & agents', ['Agentic architectures', 'LLM orchestration', 'RAG', 'Vector embeddings', 'MCP & tool calling', 'Multi-agent systems', 'LLM evals', 'Guardrails', 'LangChain']],
  ['Models & ML', ['Claude', 'GPT', 'Gemini', 'Llama 3.3', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face']],
  ['Languages & backend', ['Python', 'TypeScript', 'Java', 'C++', 'SQL', 'FastAPI', 'Flask', 'React', 'Next.js']],
  ['Cloud & MLOps', ['AWS', 'Azure AI', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Snowflake', 'MongoDB', 'Workers AI']],
  ['AI-native dev tools', ['Claude Code', 'Cursor', 'Codex', 'GitHub Copilot']],
];

// Side B photo slots. Drop images in public/photos/ and set `src` (e.g. '/photos/me.jpg').
const photos = [
  { src: '', caption: 'This is me', tilt: -3 },
  { src: '', caption: 'My happy place', tilt: 2 },
  { src: '', caption: 'With my people', tilt: -1.5 },
  { src: '', caption: 'Out on an adventure', tilt: 3 },
];

const community = [
  ['Co-Founder & VP, AWS Student Builders Club', 'Started it with an official AWS and Amazon partnership. Reach is up 5×, with workshops that have prepped 100+ students for internships and certifications.'],
  ['VP of Operations, The AI Society', 'Ran end-to-end operations for a 39-person team across marketing, events and partnerships, and grew our reach 12× for 5,000+ members.'],
  ['Campus Ambassador, Adobe & Perplexity', 'Hands-on AI demos for 200+ students, with their feedback going straight back to the engineering teams.'],
  ['Grace Hopper Celebration Scholar', 'GHC 2025 scholar. Find me there again this year.'],
];
const circles = ['Society of Women Engineers', 'Women in Computer Science', 'Girls Who Code', 'Rewriting the Code', 'FACE', 'CodePath'];

// A sticker scattered beside a section. x/y are % of the section box.
const S = ({ t, x, y, size = 60, speed = 0.3, depth = 1, spin = 0.04, props }) => (
  <Sticker type={t} size={size} speed={speed} depth={depth} spin={spin} props={props} style={{ left: `${x}%`, top: `${y}%` }} />
);
const Deco = ({ children, cls = '' }) => <div className={`deco ${cls}`} aria-hidden="true">{children}</div>;
const Head = ({ n, title, aside }) => (
  <div className="sec-head">
    <h2>{n && <span className="num">{n}</span>}{title}</h2>
    {aside && <span>{aside}</span>}
  </div>
);

export default function Home() {
  const work = (
    <>
      <section id="work">
        <Deco>
          <S t="heart" x={3} y={18} size={70} speed={0.35} />
          <S t="star" x={92} y={60} size={50} speed={0.5} spin={0.08} />
        </Deco>
        <div className="wrap panel">
          <Head n="01" title="The TL;DR" aside="the elevator pitch" />
          <p className="big-copy reveal">
            I build AI agents that <mark>actually ship</mark>. At Precisely I took a talent assessment that ate <mark>5 days</mark> of manual work and turned it into a <mark>10-minute query</mark>. Now I do the same kind of thing as an Agentic Engineer at ASU, and spend my evenings building communities where more people get to do it too.
          </p>
          <div className="stats">
            <div className="stat"><b data-count="4" data-decimals="1">4.0</b><small>GPA in Computer Science, 3× Dean’s List</small></div>
            <div className="stat"><b>5d → 10m</b><small>Assessment prep, thanks to my agent</small></div>
            <div className="stat"><b data-count="4" data-suffix="×">4×</b><small>Hackathon winner</small></div>
            <div className="stat"><b data-count="5000" data-suffix="+">5,000+</b><small>Members in the AI Society I helped run</small></div>
          </div>
        </div>
      </section>

      <section id="experience">
        <Deco>
          <S t="soot" x={94} y={10} size={52} speed={0.45} depth={1.6} />
          <S t="strawberry" x={2} y={55} size={56} speed={0.3} />
        </Deco>
        <div className="wrap panel">
          <Head n="02" title="Currently juggling" aside="yes, all at once" />
          <ul className="xp">
            {experience.map((x) => (
              <li key={x.role}>
                <div className="when">
                  {x.when}
                  {x.now && <span className="now"><i />currently</span>}
                </div>
                <div>
                  <h3>{x.role}</h3>
                  <div className="org">{x.org} · {x.place}</div>
                  <ul className="points">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="featured">
        <Deco>
          <S t="shell" x={1} y={12} size={78} speed={0.25} spin={0.02} />
          <S t="star" x={93} y={70} size={44} speed={0.55} props={{ points: 4 }} spin={0.1} />
        </Deco>
        <div className="wrap panel">
          <Head n="03" title="The one I’m proudest of" aside="Precisely Software" />
          <div className="feature">
            <Note arrow="down-left" className="feature-note">my favorite build ♡ live in production</Note>
            <div className="eyebrow">In production · Azure AI</div>
            <h3>Talent Assessment Agent</h3>
            <p>
              I was handed a problem, not a spec. Managers spent days pulling talent data out of seven different systems before they could even start an assessment. So I sat down with the six people who owned that data, designed the system, and owned it from prototype to launch in ten weeks.
            </p>
            <div className="flow">
              <div><b>01 · Ingest</b>Nightly pipeline across Jira, Snowflake, Tableau, Cornerstone, UKG, Glassdoor, Git</div>
              <div><b>02 · Retrieve</b>Agentic RAG over the unified talent data</div>
              <div><b>03 · Reason</b>LLM orchestration on Claude with 9-box scoring</div>
              <div><b>04 · Serve</b>FastAPI + React, live on Azure AI</div>
            </div>
            <p style={{ margin: 0 }}>
              <span className="metric">5 days → under 10 minutes</span> per query, used by Engineering and Customer Support.
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <Deco>
          <S t="lily" x={93} y={8} size={74} speed={0.3} />
          <S t="heart" x={2} y={46} size={48} speed={0.5} props={{ color: '#e3a0b8', line: '#b45f80' }} />
          <S t="soot" x={95} y={78} size={44} speed={0.6} depth={1.8} />
        </Deco>
        <div className="wrap panel">
          <Head n="04" title="Side quests" aside="hackathons, classes, late nights" />
          <div className="grid">
            {projects.map((p, i) => (
              <article className={`card tilt ${i === 0 ? 'wide' : ''}`} key={p.name}>
                {p.stamp && <span className="stamp">★ {p.stamp}</span>}
                {p.note && <Note arrow="down-left" className="card-note">{p.note}</Note>}
                <div className="top"><h3>{p.name}</h3>{p.when && <span className="when">{p.when}</span>}</div>
                <p>{p.blurb}</p>
                <p><span className="metric">{p.impact}</span></p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                {p.link && <a className="link" href={p.link} target="_blank" rel="noreferrer">Peek at the code →</a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai">
        <Deco>
          <S t="leaf" x={1} y={20} size={70} speed={0.28} spin={0.02} />
          <S t="starfish" x={93} y={55} size={58} speed={0.42} />
        </Deco>
        <div className="wrap panel">
          <Head n="05" title="My toolbox" aside="right model, right job" />
          <p className="intro-copy reveal">
            I don&apos;t have a favorite model. I have a <em>reason</em> for each one.
          </p>
          <div className="models">
            {models.map((m) => (
              <div className="model" key={m.name}><b>{m.name}</b><p>{m.use}</p></div>
            ))}
          </div>
          <div className="toolbox">
            {toolbox.map(([group, items]) => (
              <div className="tool-group" key={group}>
                <h4>{group}</h4>
                <div className="chips">{items.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="school">
        <Deco>
          <S t="star" x={3} y={30} size={48} speed={0.45} spin={0.08} />
          <S t="heart" x={93} y={20} size={52} speed={0.35} props={{ color: '#e3a0b8', line: '#b45f80' }} />
        </Deco>
        <div className="wrap panel">
          <Head n="06" title="Report card" aside="Arizona State University" />
          <div className="report">
            <div className="grade">
              <span className="gpa">4.0</span>
              <span className="gpa-label">GPA · B.S. Computer Science<br />Class of May 2028</span>
            </div>
            <div className="report-body">
              <h4>Favorite classes so far</h4>
              <div className="chips">
                {['Data Structures & Algorithms', 'Linear Algebra', 'Theory of Computation', 'Discrete Math', 'Calc III', 'OOP'].map((c) => <span key={c}>{c}</span>)}
              </div>
              <h4>Gold stars</h4>
              <ul className="awards">
                <li><b>3×</b> Dean’s List</li>
                <li><b>4×</b> Hackathon winner</li>
                <li><b>5×</b> SUN Awards for service & leadership</li>
                <li><b>GHC</b> Grace Hopper Celebration Scholar 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const person = (
    <>
      <section id="me">
        <Deco>
          <S t="heart" x={3} y={14} size={66} speed={0.35} />
          <S t="strawberry" x={93} y={58} size={54} speed={0.45} />
        </Deco>
        <div className="wrap panel">
          <Head n="01" title="Off the clock" aside="the human behind the commits" />
          <div className="about">
            <div className="polaroid big" style={{ '--tilt': '-2deg' }}>
              <div className="ph">{photos[0].src ? <img src={photos[0].src} alt="Manisha" /> : <span>photo coming soon</span>}</div>
              <p>{photos[0].caption}</p>
            </div>
            <div className="about-copy">
              <p className="hi">Hi! I&apos;m Manisha, <span className="hand">Brishti</span> to friends.</p>
              <p>
                The résumé tells you what I build. This side is about everything else: the people, places and little things that make me, me. I&apos;m happiest when I&apos;m bringing people together, whether that&apos;s a 5,000-person AI community, a brand-new club, or a hackathon team running on no sleep.
              </p>
              <p className="hand-line">more stories &amp; photos coming soon…</p>
            </div>
          </div>
        </div>
      </section>

      <section id="photos">
        <Deco>
          <S t="shell" x={94} y={10} size={64} speed={0.3} spin={0.02} />
          <S t="star" x={2} y={60} size={46} speed={0.5} spin={0.08} />
        </Deco>
        <div className="wrap panel">
          <Head n="02" title="Snapshots" aside="life off the keyboard" />
          <div className="polaroids">
            {photos.slice(1).map((ph) => (
              <figure className="polaroid" key={ph.caption} style={{ '--tilt': `${ph.tilt}deg` }}>
                <div className="ph">{ph.src ? <img src={ph.src} alt={ph.caption} /> : <span>photo coming soon</span>}</div>
                <figcaption>{ph.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="community">
        <Deco>
          <S t="lily" x={1} y={10} size={68} speed={0.3} />
          <S t="soot" x={95} y={60} size={46} speed={0.55} depth={1.8} />
        </Deco>
        <div className="wrap panel">
          <Head n="03" title="My people" aside="community is my love language" />
          <ul className="lead-list">
            {community.map(([b, t]) => <li key={b}><b>{b}</b><span>{t}</span></li>)}
          </ul>
          <div className="circles reveal">
            <span className="hand">proud member of</span>
            <div className="chips">{circles.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <ScrollFX />
      <div className="bg" aria-hidden="true">
        <img src="/manisha-illustration.webp" alt="" />
      </div>

      {/* little companions that ride down the page edges as you scroll */}
      <div className="companion right" data-travel="0.62" aria-hidden="true"><Sticker type="heart" size={34} speed={0} /></div>
      <div className="companion left" data-travel="0.55" aria-hidden="true"><Sticker type="star" size={30} speed={0} /></div>

      <nav className="nav">
        <div className="wrap">
          <a href="#top" className="mark">Manisha<em>.</em></a>
          <ul>
            <li><a href="#side-a">The engineer</a></li>
            <li><a href="#side-b">The human</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Say hi</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="hero-text">
            <div className="eyebrow">AI Engineer · CS @ Arizona State</div>
            <h1>
              <span className="l1">Hello, you&apos;ve reached</span>
              <span className="l2">
                <span className="name">Manisha&apos;s
                  <svg className="swoosh" viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden="true"><path d="M4 20 C 70 6, 150 4, 296 14" pathLength="1" /></svg>
                </span>
              </span>
              <span className="l3">little corner of the globe.</span>
            </h1>
            <p className="aside-hand">welcome to my humble abode ♡</p>
            <p className="lede">
              I&apos;m an AI engineer who <Rotator items={rotating} />
            </p>
            <div className="cta">
              <a className="btn primary" href="#resume">Grab my resume</a>
              <a className="btn" href={LI} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={GH} target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className="status"><span className="dot" />Open to Summer 2027 internships in AI/ML, SWE & AI PM · catch me at GHC 2026</div>
          </div>
          <Note arrow="down-left" className="me-note">yep, that&apos;s me!</Note>
          <Deco cls="hero-deco">
            <S t="heart" x={36} y={14} size={58} speed={-0.45} depth={1.4} />
            <S t="star" x={30} y={78} size={44} speed={-0.7} spin={0.1} depth={1.8} />
            <S t="strawberry" x={88} y={70} size={52} speed={-0.55} depth={1.5} />
            <S t="soot" x={84} y={16} size={44} speed={-0.8} depth={2} />
          </Deco>
          <a href="#sides" className="scroll-hint">come on in ↓</a>
        </header>

        <Sides work={work} person={person} />

        <section id="resume">
          <Deco>
            <S t="star" x={2} y={30} size={50} speed={0.45} spin={0.08} />
            <S t="heart" x={94} y={50} size={54} speed={0.35} />
          </Deco>
          <div className="wrap panel">
            <Head title="Grab a copy" aside="pick the one for your role" />
            <div className="resumes">
              <a className="resume tilt" href="/resume/ai-ml-engineer.pdf" target="_blank" rel="noreferrer">
                <span className="tab">fresh ✦</span>
                <b>AI / ML Engineer</b><small>Agents, RAG, evals, production GenAI</small><i>Download PDF ↓</i>
              </a>
              <a className="resume tilt" href="/resume/software-engineer.pdf" target="_blank" rel="noreferrer">
                <b>Software Engineer</b><small>Distributed systems, backend, cloud</small><i>Download PDF ↓</i>
              </a>
              <a className="resume tilt" href="/resume/ai-product-manager.pdf" target="_blank" rel="noreferrer">
                <b>AI Product Manager</b><small>Discovery, scoping, launch, metrics</small><i>Download PDF ↓</i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <Deco>
          <S t="lily" x={6} y={10} size={70} speed={0.3} />
          <S t="soot" x={90} y={20} size={48} speed={0.5} depth={1.8} />
          <S t="starfish" x={86} y={70} size={56} speed={0.4} />
        </Deco>
        <div className="wrap panel contact-card">
          <p className="hand-kicker">psst, my inbox is open</p>
          <h2>Say hi<span className="heart-dot">♡</span></h2>
          <p>Recruiting for Summer 2027, building something with AI, or heading to GHC this year? I&apos;d love to hear from you.</p>
          <div className="cta">
            <CopyEmail email={EMAIL} />
            <a className="btn" href={`mailto:${EMAIL}`}>Write me an email</a>
            <a className="btn" href={LI} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="fine">Designed &amp; built with love in Tempe, Arizona. (The stickers are draggable, by the way.)</div>
        </div>
      </footer>
    </>
  );
}
