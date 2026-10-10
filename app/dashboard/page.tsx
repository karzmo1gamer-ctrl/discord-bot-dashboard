"use client";

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Guild = {
  id: string;
  name: string;
  icon: string | null;
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    if (session?.accessToken) {
      fetchGuilds();
    }
  }, [session, status, router]);

  const fetchGuilds = async () => {
    try {
      const res = await fetch('/api/discord/guilds');
      const data = await res.json();
      setGuilds(data || []);
    } catch (error) {
      console.error('Failed to fetch guilds', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b1020] text-white">
        <p>جاري التحميل...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1020] p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <button onClick={() => signOut()} className="rounded-xl bg-red-500 px-5 py-2 font-bold">
            تسجيل الخروج
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-slate-400">عدد السيرفرات</p>
            <h2 className="mt-3 text-4xl font-bold text-cyan-400">{guilds.length}</h2>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-slate-400">الأعضاء النشطين</p>
            <h2 className="mt-3 text-4xl font-bold">4.2K</h2>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-slate-400">الاشتراكات</p>
            <h2 className="mt-3 text-4xl font-bold text-violet-400">321</h2>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">السيرفرات الخاصة بك</h2>
          {loading ? (
            <p className="mt-4 text-slate-400">جاري جلب السيرفرات...</p>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {guilds.map((guild) => (
                <div key={guild.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                  <div className="flex items-center gap-3">
                    {guild.icon ? (
                      <img
                        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                        alt={guild.name}
                        className="h-12 w-12 rounded-full"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
                        {guild.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{guild.name}</h3>
                  </div>
                  <button className="mt-5 w-full rounded-xl bg-cyan-500 px-3 py-2 font-bold text-slate-950">
                    إدارة السيرفر
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
