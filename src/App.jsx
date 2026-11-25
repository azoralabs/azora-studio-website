import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MacDownload from './components/MacDownload'

const features = [
  {
    title: 'Visual Scene Editor',
    desc: 'Drag-and-drop scene composition with a hierarchical node tree, transform gizmos, and multi-viewport support.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Code Editor',
    desc: 'Built-in Azora code editor with syntax highlighting, autocompletion, error diagnostics, and integrated terminal.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Asset Browser',
    desc: 'Import, organize, and preview textures, models, audio, fonts, and shaders with drag-and-drop workflow.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Inspector',
    desc: 'Edit entity components, tweak properties in real time, and see changes reflected instantly in the viewport.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Animation Editor',
    desc: 'Timeline-based animation editor for keyframes, curves, skeletal rigs, and blend tree configuration.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Live Preview',
    desc: 'Play and test your game directly inside the editor with hot-reload. Iterate without leaving the IDE.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: 'Build & Export',
    desc: 'One-click builds for all platforms. Configure target settings, icons, splash screens, and signing from the UI.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
  {
    title: 'Debugging Tools',
    desc: 'Integrated debugger, profiler, frame inspector, and entity hierarchy viewer for diagnosing issues fast.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Plugin System',
    desc: 'Extend the editor with custom panels, tools, importers, and workflows using the Azora plugin API.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
]

const ecosystem = [
  {
    title: 'Azora Engine',
    desc: 'The cross-platform game engine that powers everything. 2D & 3D rendering, physics, audio, ECS, and more.',
    href: 'https://azoraengine.org',
    cta: 'Explore Engine',
    accent: 'bg-az-secondary/10 border-az-secondary/30 hover:border-az-secondary/60',
    ctaColor: 'text-az-secondary',
  },
  {
    title: 'Azora Language',
    desc: 'The programming language behind the engine. Learn Azora to write game logic, tools, and engine extensions.',
    href: 'https://azoralang.org',
    cta: 'Learn Azora',
    accent: 'bg-az-red/10 border-az-red/30 hover:border-az-red/60',
    ctaColor: 'text-az-red',
  },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-24">
            <img src="/assets/azora-studio-mark.png" alt="" className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-az-10 mb-4">
              Azora <span className="text-az-primary">Studio</span>
            </h1>
            <p className="text-lg text-az-45 max-w-2xl mx-auto leading-relaxed mb-8">
              The visual editor and IDE for building apps, games, and tools with the Azora Engine. Design scenes, write code, and ship from one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-az-primary text-white font-medium hover:brightness-110 transition"
              >
                Get Azora Launcher
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3l6 5-6 5" />
                </svg>
              </a>
              <a
                href="https://github.com/azoralabs/azora-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-az-65 text-az-20 font-medium hover:border-az-40 hover:text-az-10 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <MacDownload />

          {/* Features */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-2 text-center text-az-10">Features</h2>
            <p className="text-az-45 text-center mb-12 max-w-2xl mx-auto">
              A complete IDE for software development, all in one window.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(f => (
                <div key={f.title} className="rounded-xl border border-az-75 bg-az-85 p-5 hover:border-az-60 transition-colors">
                  <span className="inline-block text-az-primary mb-3">{f.icon}</span>
                  <h3 className="font-semibold text-az-10 mb-2">{f.title}</h3>
                  <p className="text-sm text-az-45 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ecosystem */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-2 text-center text-az-10">Ecosystem</h2>
            <p className="text-az-45 text-center mb-12 max-w-lg mx-auto">
              Azora Studio is part of a larger ecosystem of tools and languages.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {ecosystem.map(l => (
                <a
                  key={l.title}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl border p-8 transition-colors ${l.accent}`}
                >
                  <h3 className="text-xl font-semibold text-az-10 mb-3">{l.title}</h3>
                  <p className="text-sm text-az-45 leading-relaxed mb-5">{l.desc}</p>
                  <span className={`text-sm font-medium ${l.ctaColor}`}>
                    {l.cta} &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-az-10 mb-4">About</h2>
            <p className="text-az-45 max-w-2xl mx-auto leading-relaxed">
              Azora Studio is developed by Azora Labs as part of the Azora ecosystem.
              It is an open-source visual editor and IDE designed for building games with the Azora Engine and the Azora programming language.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
