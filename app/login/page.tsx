"use client";

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1020] text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8">
        <h1 className="text-3xl font-black">تسجيل الدخول</h1>
        <p className="mt-3 text-slate-400">سجل الدخول عبر Discord للوصول إلى لوحة التحكم</p>

        <button
          onClick={() => signIn('discord', { callbackUrl: '/dashboard' })}
          className="mt-8 w-full rounded-xl bg-[#5865F2] px-5 py-3 font-bold text-white"
        >
          تسجيل الدخول بـ Discord
        </button>
      </div>
    </main>
  );
}
