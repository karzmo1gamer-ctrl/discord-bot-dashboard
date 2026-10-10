"use client";

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
      <Link href="/" className="text-2xl font-bold text-cyan-400">
        BotVerse
      </Link>

      <div className="flex gap-6 text-sm text-slate-300">
        <Link href="/">الرئيسية</Link>
        <Link href="/commands">الأوامر</Link>
        <Link href="/pricing">الأسعار</Link>
        {session && <Link href="/dashboard">لوحة التحكم</Link>}
      </div>

      {session ? (
        <button onClick={() => signOut()} className="rounded-xl bg-red-500 px-5 py-2 font-bold">
          تسجيل الخروج
        </button>
      ) : (
        <button onClick={() => signIn('discord', { callbackUrl: '/dashboard' })} className="rounded-xl bg-cyan-500 px-5 py-2 font-bold text-slate-950">
          تسجيل الدخول
        </button>
      )}
    </nav>
  );
}
