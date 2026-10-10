const commands = [
  { name: '!help', desc: 'عرض قائمة الأوامر' },
  { name: '!ping', desc: 'اختبار استجابة البوت' },
  { name: '!stats', desc: 'عرض إحصائيات السيرفر' },
  { name: '!warn', desc: 'تحذير عضو' },
  { name: '!mute', desc: 'كتم عضو مؤقتاً' },
  { name: '!ticket', desc: 'إنشاء تذكرة دعم' },
];

export default function CommandsPage() {
  return (
    <main className="min-h-screen bg-[#0b1020] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black">الأوامر</h1>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {commands.map((cmd) => (
            <div key={cmd.name} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold text-cyan-400">{cmd.name}</h2>
              <p className="mt-3 text-slate-300">{cmd.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
