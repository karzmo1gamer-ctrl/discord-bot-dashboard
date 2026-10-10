const plans = [
  { name: 'Free', price: '0$', features: ['إعدادات أساسية', 'سيرفرين فقط', 'دعم أساسي'] },
  { name: 'Pro', price: '15$', features: ['إحصائيات متقدمة', 'أوامر مخصصة', 'دعم سريع'] },
  { name: 'Premium', price: '29$', features: ['كل المزايا', 'أولوية الدعم', 'تخصيص كامل'] },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0b1020] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-black">الأسعار</h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-4 text-4xl font-black text-cyan-400">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950">
                اختر الخطة
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
