const features = [
  {
    title: "Immersive storefronts",
    description:
      "Curate holographic product narratives with adaptive layouts powered by live shopper telemetry.",
  },
  {
    title: "Quantum-grade security",
    description:
      "End-to-end encrypted escrow with real-time fraud heuristics keeps every deal protected at light speed.",
  },
  {
    title: "Adaptive pricing engine",
    description:
      "Predictive pricing tunes offers across galaxies using demand signals, supply flux, and loyalty resonance.",
  },
];

const highlights = [
  { label: "Vendors", value: "12.4K" },
  { label: "Digital artifacts", value: "1.9M" },
  { label: "Avg. response", value: "42ms" },
  { label: "Countries", value: "187" },
];

const showcases = [
  {
    title: "Meta skins",
    description: "Customizable avatar overlays with live physics and adaptive glow states.",
  },
  {
    title: "AI-crafted worlds",
    description: "Microverses spun from prompt artistry, ready for instant habitation.",
  },
  {
    title: "Sensory soundscapes",
    description: "Spatial audio blueprints engineered for volumetric experiences.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 -top-1/3 h-[480px] w-[480px] rounded-full bg-fuchsia-500/30 blur-[180px]" />
        <div className="absolute left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-sky-500/25 blur-[160px]" />
        <div className="absolute -bottom-24 right-16 h-[420px] w-[420px] rounded-full bg-violet-500/30 blur-[160px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-4 pb-24 pt-12 sm:px-8">
        <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400/70 to-sky-400/60 text-2xl font-semibold text-white shadow-[0_0_40px_rgba(217,70,239,0.35)]">
              Δ
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-200/80">
                Aurora Marketplace
              </p>
              <p className="text-base text-slate-200/70">
                Commerce beyond dimensions
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a className="text-slate-200/80 transition-colors hover:text-white" href="#exchange">
              Exchange
            </a>
            <a className="text-slate-200/80 transition-colors hover:text-white" href="#features">
              Systems
            </a>
            <a className="text-slate-200/80 transition-colors hover:text-white" href="#showcase">
              Showcase
            </a>
            <a className="text-slate-200/80 transition-colors hover:text-white" href="#contact">
              Join
            </a>
          </nav>
          <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl transition hover:border-white/40 hover:bg-white/20">
            Launch Console
          </button>
        </header>

        <section className="relative rounded-[3rem] border border-white/10 bg-white/5 px-8 pb-14 pt-16 shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur-2xl md:px-16">
          <div className="absolute right-6 top-6 flex items-center gap-2 text-xs text-white/70">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Market flux: Stable
          </div>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
                Verified multi-verse exchange
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Trade the rarest digital artifacts inside a luminous glass cosmos.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/80 md:text-xl">
                Aurora digitizes trust with adaptive escrow rails, composable storefront neurons,
                and an experience layer that refracts every interaction through living glass.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_25px_60px_-15px_rgba(14,165,233,0.6)] transition hover:shadow-[0_35px_80px_-25px_rgba(14,165,233,0.8)]">
                  <span className="relative z-10">Enter the exchange</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
                </button>
                <button className="rounded-full border border-white/30 bg-white/5 px-8 py-3 text-sm font-semibold text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:text-white">
                  Schedule a holographic demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/80 to-violet-500/70 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-3xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-white/70">
                    Aurora synapse feed
                  </span>
                  <span className="text-white/60">Live</span>
                </div>
                <div className="mt-6 grid gap-4 text-sm text-white/80">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">Acquisition</p>
                    <p className="mt-2 text-lg text-white">
                      Chrono Capsule Series·XI secured for 4.2Ξ
                    </p>
                    <p className="mt-2 text-white/60">Escrow sealed · Dive in 14s</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">Trend burst</p>
                    <p className="mt-2 text-lg text-white">
                      Synthwave aurora bundles spiking +38% velocity
                    </p>
                    <p className="mt-2 text-white/60">Forecast engine recalibrated</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">Collaboration</p>
                    <p className="mt-2 text-lg text-white">
                      Hyperloom × Prism Syndicate storefront unlocked
                    </p>
                    <p className="mt-2 text-white/60">Shared vault open for 6h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="exchange"
          className="grid gap-10 rounded-[3rem] border border-white/10 bg-white/5 px-8 py-16 backdrop-blur-2xl md:grid-cols-[320px_minmax(0,1fr)] md:px-16"
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-100/60">
              Market telemetry
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Signal-rich dashboards orchestrated for instantaneous intent.
            </h2>
            <p className="text-base text-slate-200/75">
              Aurora scans interlinked marketplaces, harmonizes trust signatures, and lets you sync
              every launch with luminous precision.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center text-white/80 shadow-[0_20px_60px_-30px_rgba(59,130,246,0.45)] backdrop-blur-3xl"
              >
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="features"
          className="grid gap-10 rounded-[3rem] border border-white/10 bg-white/5 px-8 py-16 backdrop-blur-2xl md:grid-cols-[minmax(0,1fr)_360px] md:px-16"
        >
          <div className="grid gap-6">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-100/60">
              Systems architecture
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Modular glass layers that refract into limitless commerce canvases.
            </h2>
            <p className="max-w-2xl text-base text-slate-200/75">
              Assemble storefront shards, integrate payment constellations, and stream your own
              experience overlays—all inside Aurora&apos;s glassmorphic OS.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-3xl transition hover:border-white/30 hover:bg-white/15"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/70 to-sky-500/60 text-lg font-semibold text-white shadow-[0_0_40px_rgba(217,70,239,0.35)]">
                    ✶
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-200/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-8 text-white shadow-[0_35px_90px_-45px_rgba(59,130,246,0.75)]">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#38bdf825,_transparent_60%)]" />
              <div className="absolute inset-0 bg-[conic-gradient(from_160deg_at_50%_50%,#a855f7_0%,transparent_40%,#22d3ee_70%,transparent_100%)]" />
            </div>
            <div className="relative flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/80">
                Live commerce orbit
              </p>
              <p className="text-4xl font-semibold leading-tight">
                A single lumen console to choreograph your entire marketplace.
              </p>
              <p className="text-sm text-white/70">
                Configure transaction pipelines, intelligence meshes, and loyalty fields with
                tactile precision.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <p className="text-lg font-semibold text-white">99.999%</p>
                  <p className="mt-1 uppercase tracking-[0.2em]">Uptime</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                  <p className="text-lg font-semibold text-white">8.2×</p>
                  <p className="mt-1 uppercase tracking-[0.2em]">Conversion lift</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="showcase"
          className="grid gap-10 rounded-[3rem] border border-white/10 bg-white/5 px-8 py-16 backdrop-blur-2xl md:px-16"
        >
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-100/60">
              Featured drops
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Drop into tomorrow&apos;s marketplace windows.
            </h2>
            <p className="text-base text-slate-200/75 md:text-lg">
              Each collection is curated by Aurora&apos;s synesthetic curators, framed with living
              glass, and wired into instant fulfillment networks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {showcases.map((drop) => (
              <div
                key={drop.title}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-6 text-left text-white shadow-[0_25px_80px_-35px_rgba(168,85,247,0.65)] backdrop-blur-3xl"
              >
                <div className="absolute -top-10 right-6 h-24 w-24 rounded-full bg-gradient-to-br from-sky-500/70 to-fuchsia-500/70 blur-2xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-3xl text-white shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                  ◊
                </div>
                <h3 className="relative mt-8 text-xl font-semibold">{drop.title}</h3>
                <p className="relative mt-3 text-sm text-white/75">{drop.description}</p>
                <button className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-100 transition hover:text-white">
                  Discover the vault
                  <span aria-hidden className="text-lg">
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-8 py-14 backdrop-blur-2xl md:px-16"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-y-0 left-16 w-64 rounded-full bg-gradient-to-b from-sky-400/60 via-transparent to-fuchsia-400/60 blur-2xl" />
            <div className="absolute right-12 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/70 to-cyan-400/70 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Become a sovereign seller inside the glass economy.
              </h2>
              <p className="mt-4 text-base text-slate-200/75">
                Instantly onboard with verified identity layers, modular storefront atoms, and a
                concierge AI orbit tailored to your brand.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-2">
              <input
                type="email"
                placeholder="glow@aurora.verse"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
              <button
                type="submit"
                className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_-25px_rgba(14,165,233,0.8)] transition hover:shadow-[0_30px_60px_-35px_rgba(14,165,233,0.9)]"
              >
                Request access
              </button>
            </form>
          </div>
        </section>

        <footer className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-white/60 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurora Marketplace. All rights reserved across realities.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-white" href="#">
              Terms
            </a>
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white" href="#">
              Status
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
