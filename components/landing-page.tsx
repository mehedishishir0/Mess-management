export default function MessFlowLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 font-black">MF</span>
          <div>
            <div className="text-xl font-bold tracking-tight">MessFlow</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Multi-Tenant Platform</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="/login" className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10">Log In</a>
          <a href="/signup" className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">Create Mess Account</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr,0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Tenant-ready mess operations
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Keep your mess fair, calm, and fully visible.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MessFlow helps managers and residents log meals, monitor expenses, distribute bills, and close each month with trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/signup" className="rounded-2xl bg-emerald-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-emerald-400">Create Mess Account</a>
            <a href="/login" className="rounded-2xl border border-white/25 px-7 py-3 font-bold text-white transition hover:bg-white/10">Log In</a>
          </div>
          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <div className="text-2xl font-bold">Daily</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">Meal logs</div>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <div className="text-2xl font-bold">Monthly</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">Settlements</div>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
              <div className="text-2xl font-bold">Secure</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">Tenant auth</div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/16 bg-white/9 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-3xl bg-slate-950/80 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Monthly overview</p>
                <h2 className="mt-2 text-2xl font-semibold">August 2026</h2>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">Live</span>
            </div>
            <div className="mt-8 space-y-3">
              {[
                ['Total meals', '342'],
                ['Grocery spend', '৳ 31,480'],
                ['Utility spend', '৳ 7,950'],
                ['Residents', '8'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Settlement balance</span>
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-black text-slate-950">Balanced</span>
              </div>
              <p className="mt-3 text-3xl font-bold text-white">৳ 0</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
