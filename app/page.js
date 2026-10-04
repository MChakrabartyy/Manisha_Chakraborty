import ThemeToggle from './ThemeToggle';
import Sides from './Sides';
import ScrollFX from './ScrollFX';
import { Sticker } from './Stickers';

const GH = 'https://github.com/MChakrabartyy';
const LI = 'https://www.linkedin.com/in/manisha-chakraborty';
const EMAIL = 'mchakr11@asu.edu';

const projects = [
  {
    name: 'CollabCode',
    when: 'Dec 2025',
    blurb:
      'A multiplayer code editor with an AI debugger inside it. Sessions stay in sync under 50ms using Cloudflare Durable Objects and CRDTs, and Llama 3.3 70B answers questions grounded in the project’s own code history.',
    impact: '40% faster debugging, zero sync conflicts at 10+ users',
    tags: ['TypeScript', 'React', 'CRDTs', 'Durable Objects', 'RAG', 'Llama 3.3'],
    link: `${GH}/CollabCode`,
  },
  {
    name: 'SignalNote',
    when: 'Jan 2026',
    blurb:
      'An internal tool that reads raw product feedback, detects intent with an LLM and routes it to the right owner, with a live dashboard for sentiment and priority.',
    impact: '1,000+ entries routed at sub-100ms, 60% less manual triage',
    tags: ['Cloudflare Workers AI', 'React', 'REST APIs', 'SQL', 'KV'],
    link: `${GH}/SignalNote`,
  },
  {
    name: 'Decoy',
    badge: '2nd Place, DevHacks ’25',
    when: 'Sep 2025',
    blurb:
      'Built in 24 hours. Decoy listens to live phone calls through Twilio and flags scams in real time with an agentic OpenAI pipeline.',
    impact: '93% precision, 25% lower latency with inference caching',
    tags: ['Python', 'Flask', 'Twilio', 'OpenAI API', 'React'],
  },
  {
    name: 'DiscussIQ',
    when: 'Spring 2026',
    blurb:
      'A discussion and grading platform for courses, built with a test-first mindset across four release phases.',
    impact: '120+ JUnit tests, 0 defect failures',
    tags: ['Java', 'JavaFX', 'JUnit', 'H2', 'MVC'],
  },
];

const experience = [
  {
    when: 'Aug 2026 – now',
    role: 'Agentic Engineer',
    org: 'Enterprise Technology, ASU',
    text: 'Shipping features and fixes in enterprise platform codebases with an AI-first workflow, and supporting CI/CD, infrastructure-as-code and AWS platform reliability.',
  },
  {
    when: 'Jun 2026 – now',
    role: 'AI Engineering Co-op',
    org: 'Precisely Software',
    text: 'Built and own a production agentic RAG system on Claude that turns a 5-day talent assessment into a 10-minute query.',
  },
  {
    when: 'Mar 2026 – now',
    role: 'QA Engineer',
    org: 'EdPlus, ASU',
    text: 'AI-assisted validation pipelines in Python that caught 290+ defects across 250+ modules before students ever saw them.',
  },
  {
    when: 'Aug 2024 – Mar 2026',
    role: 'Software Developer',
    org: 'Barrett Honors College, ASU',
    text: 'A Python and React platform tying together Salesforce, Canvas and AV systems. Adopted by 3 departments, cut manual work by 30%.',
  },
];

const models = [
  { name: 'Claude', use: 'My pick for enterprise reasoning over messy, multi-source data. Powers the Precisely agent in production.' },
  { name: 'Llama 3.3 70B', use: 'Open weights at the edge. Grounded in code history for CollabCode’s debugger.' },
  { name: 'GPT (OpenAI API)', use: 'Low-latency, real-time classification on live call audio in Decoy.' },
];

const tools = ['Claude Code', 'Cursor', 'Codex', 'GitHub Copilot', 'Gemini', 'MCP & tool calling', 'Multi-agent orchestration', 'LLM evals', 'RAG', 'LangChain', 'PyTorch', 'FastAPI', 'AWS', 'Azure AI'];

// Side B photo slots. Drop images in public/photos/ and set `src` (e.g. '/photos/me.jpg').
const photos = [
  { src: '', caption: 'This is me', tilt: -3 },
  { src: '', caption: 'My happy place', tilt: 2 },
  { src: '', caption: 'With my people', tilt: -1.5 },
  { src: '', caption: 'Out on an adventure', tilt: 3 },
];

const community = [
  ['VP of Operations, The AI Society.', 'Grew reach 12× running ops for a 39-person team serving 5,000+ members.'],
  ['Co-Founder & VP, AWS Student Builders Club.', 'Started it in Aug 2026 so students can build on the cloud, not just read about it.'],
  ['Campus Ambassador, Adobe & Perplexity.', 'Hands-on AI demos for 200+ students, with their feedback going straight to product teams.'],
  ['Grace Hopper Celebration Scholar 2025.', 'Back at GHC in 2026.'],
  ['Hackathon winner.', 'Best Hardware Hack at SunHacks ’24 and 2nd place at DevHacks ’25.'],
  ['SUN Award recipient', 'for service and leadership, from multiple supervisors.'],
];

// A sticker scattered beside a section. x/y are % of the section box.
const S = ({ t, x, y, size = 60, speed = 0.3, depth = 1, spin = 0.04, props, cls = '' }) => (
  <Sticker type={t} size={size} speed={speed} depth={depth} spin={spin} props={props}
    style={{ left: `${x}%`, top: `${y}%` }} />
);
const Deco = ({ children, cls = '' }) => <div className={`deco ${cls}`} aria-hidden="true">{children}</div>;

export default function Home() {
  const work = (
    <>
      <section id="work">
        <Deco>
          <S t="heart" x={3} y={18} size={70} speed={0.35} />
          <S t="star" x={92} y={60} size={50} speed={0.5} spin={0.08} />
        </Deco>
        <div className="wrap panel">
          <div className="sec-head"><h2>The short version</h2><span>Side A · The Work</span></div>
          <p className="intro-copy reveal">
            I build AI agents that <em>actually ship</em>. At Precisely I took a talent assessment that ate 5 days of manual work and turned it into a 10-minute query, with an agentic RAG system I designed, built and launched to production. Now I&apos;m doing the same kind of work as an Agentic Engineer at ASU Enterprise Technology.
          </p>
          <div className="stats">
            <div className="stat"><b>4.0</b><small>GPA, B.S. Computer Science</small></div>
            <div className="stat"><b>5d → 10m</b><small>Assessment prep with my agent</small></div>
            <div className="stat"><b>5,000+</b><small>Members in the AI Society I help run</small></div>
            <div className="stat"><b>2028</b><small>Graduating May</small></div>
          </div>
        </div>
      </section>

      <section id="experience">
        <Deco>
          <S t="soot" x={94} y={10} size={52} speed={0.45} depth={1.6} />
          <S t="strawberry" x={2} y={55} size={56} speed={0.3} />
        </Deco>
        <div className="wrap panel">
          <div className="sec-head"><h2>Experience</h2><span>Usually more than one at a time</span></div>
          <ul className="xp">
            {experience.map((x) => (
              <li key={x.role}>
                <div className="when">{x.when}</div>
                <div><h3>{x.role} <small>· {x.org}</small></h3><p>{x.text}</p></div>
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
          <div className="sec-head"><h2>Featured work</h2><span>Precisely Software</span></div>
          <div className="feature">
            <div className="eyebrow">In production</div>
            <h3>Talent Assessment Agent</h3>
            <p>
              I was handed a problem, not a spec. Managers spent days pulling talent data out of seven different systems before they could even start an assessment. I talked to the six people who owned that data, designed the system, and owned it from prototype to launch in ten weeks.
            </p>
            <div className="flow">
              <div><b>01 · Ingest</b>Nightly pipeline across Jira, Snowflake, Tableau, Cornerstone, UKG, Glassdoor, Git</div>
              <div><b>02 · Retrieve</b>RAG over unified talent data</div>
              <div><b>03 · Reason</b>LLM orchestration on Claude with 9-box scoring</div>
              <div><b>04 · Serve</b>FastAPI + React, deployed on Azure AI</div>
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
          <div className="sec-head"><h2>Projects</h2><span>Hackathons, classes, late nights</span></div>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <div className="top"><h3>{p.name}</h3><span className="when">{p.when}</span></div>
                {p.badge && <span className="badge">★ {p.badge}</span>}
                <p>{p.blurb}</p>
                <p><span className="metric">{p.impact}</span></p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                {p.link && <a className="link" href={p.link} target="_blank" rel="noreferrer">View code →</a>}
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
          <div className="sec-head"><h2>How I build with AI</h2><span>Right model, right job</span></div>
          <p className="intro-copy small reveal">
            I don&apos;t have a favorite model. I have a reason for each one. Here&apos;s what I&apos;ve picked for real systems, and the tools I write code with every day.
          </p>
          <div className="models">
            {models.map((m) => (
              <div className="model" key={m.name}><b>{m.name}</b><p>{m.use}</p></div>
            ))}
          </div>
          <div className="toolrow reveal">{tools.map((t) => <span key={t}>{t}</span>)}</div>
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
          <div className="sec-head"><h2>Who I am as a person</h2><span>Side B · The Person</span></div>
          <div className="about">
            <div className="polaroid big" style={{ '--tilt': '-2deg' }}>
              <div className="ph">{photos[0].src ? <img src={photos[0].src} alt="Manisha" /> : <span>photo coming soon</span>}</div>
              <p>{photos[0].caption}</p>
            </div>
            <div className="about-copy">
              <p className="hi">Hi, I&apos;m Manisha. Brishti to friends.</p>
              <p>
                The résumé tells you what I build. This side is about everything else: the people, places and little things that make me, me. I love bringing people together, whether that&apos;s a 5,000-person AI community, a brand-new club, or a hackathon team running on no sleep.
              </p>
              <p>More stories and photos are on the way. Stay tuned.</p>
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
          <div className="sec-head"><h2>Snapshots</h2><span>Life off the keyboard</span></div>
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
          <div className="sec-head"><h2>Where you&apos;ll find me</h2><span>Community</span></div>
          <ul className="lead-list">
            {community.map(([b, t]) => <li key={b}><b>{b}</b> {t}</li>)}
          </ul>
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
          <a href="#top" className="mark">Manisha <em>Chakraborty</em></a>
          <ul>
            <li><a href="#side-a">Work</a></li>
            <li><a href="#side-b">About me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="hero-text">
            <div className="eyebrow">AI Engineer · CS @ Arizona State</div>
            <h1>
              Hello, you&apos;ve reached <em>Manisha&apos;s</em> little corner of the globe.
            </h1>
            <p className="lede">Welcome to my humble abode. Make yourself at home, look around, and pick a side.</p>
            <div className="cta">
              <a className="btn primary" href="#resume">Get my resume</a>
              <a className="btn" href={LI} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={GH} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={`mailto:${EMAIL}`}>Email</a>
            </div>
            <div className="status"><span className="dot" />Open to Summer 2027 internships in AI/ML, SWE and AI PM · See me at GHC 2026</div>
          </div>
          <Deco cls="hero-deco">
            <S t="heart" x={36} y={14} size={58} speed={-0.45} depth={1.4} />
            <S t="star" x={30} y={78} size={44} speed={-0.7} spin={0.1} depth={1.8} />
            <S t="strawberry" x={88} y={70} size={52} speed={-0.55} depth={1.5} />
            <S t="soot" x={84} y={16} size={44} speed={-0.8} depth={2} />
          </Deco>
          <a href="#sides" className="scroll-hint">Scroll to explore ↓</a>
        </header>

        <Sides work={work} person={person} />

        <section id="resume">
          <Deco>
            <S t="star" x={2} y={30} size={50} speed={0.45} spin={0.08} />
            <S t="heart" x={94} y={50} size={54} speed={0.35} />
          </Deco>
          <div className="wrap panel">
            <div className="sec-head"><h2>Resume</h2><span>Pick the one for your role</span></div>
            <div className="resumes">
              <a className="resume" href="/resume/ai-ml-engineer.pdf" target="_blank" rel="noreferrer">
                <b>AI / ML Engineer</b><small>Agents, RAG, evals, production GenAI</small><i>Download PDF ↓</i>
              </a>
              <a className="resume" href="/resume/software-engineer.pdf" target="_blank" rel="noreferrer">
                <b>Software Engineer</b><small>Distributed systems, backend, cloud</small><i>Download PDF ↓</i>
              </a>
              <a className="resume" href="/resume/ai-product-manager.pdf" target="_blank" rel="noreferrer">
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
          <h2>Let&apos;s talk.</h2>
          <p>Recruiting for Summer 2027 or at GHC this year? I&apos;d love to hear from you.</p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="btn" href={LI} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={GH} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="fine">Psst, the little stickers are draggable. Tempe, Arizona ♡</div>
        </div>
      </footer>
    </>
  );
}
