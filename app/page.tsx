export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            Discord Bot Dashboard
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight">أضف قوة للبوت الخاص بك</h1>

          <p className="mt-5 text-lg text-slate-300">
            لوحة تحكم عربية احترافية لإدارة السيرفرات، الأوامر، الإحصائيات، الأدوار، القنوات، والبريميوم.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/login" className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950">
              ابدأ الآن
            </a>
            <a href="/pricing" className="rounded-xl border border-slate-600 px-6 py-3 font-bold text-white">
              شاهد الأسعار
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
          <div className="grid gap-4">
            <div className="rounded-2xl bg-slate-800 p-4">
              <p className="text-sm text-slate-400">عدد السيرفرات</p>
              <h3 className="mt-2 text-3xl font-bold text-cyan-400">124</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">الأعضاء</p>
                <h3 className="mt-2 text-2xl font-bold">18.7K</h3>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Premium</p>
                <h3 className="mt-2 text-2xl font-bold text-violet-400">1.2K</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
