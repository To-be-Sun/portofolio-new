'use client';
import React from "react";
import {MarkGithubIcon} from '@primer/octicons-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  const events = [
    {
      year: 2004,
      event: '岐阜県出身',
    },
    {
      year: 2010,
      event: '岐阜聖徳学園大学付属小学校入学',
    },
    {
      year: 2016,
      event: '岐阜聖徳学園大学付属小学校卒業',
    },
    {
      year: 2016,
      event: '名古屋中学校入学',
    },
    {
      year: 2019,
      event: '名古屋中学校卒業',
    },
    {
      year: 2019,
      event: '名古屋高校入学',
    },
    {
      year: 2022,
      event: '名古屋高校卒業',
    },
    {
      year: 2023,
      event: '日本医科大学入学',
    },
  ];
  const certificates = ["英検準一級", "漢検２級"];

  const skills = [
    { name: "HTML", color: "from-orange-500 to-orange-600" },
    { name: "CSS", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", color: "from-yellow-400 to-amber-500" },
    { name: "React", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Python", color: "from-yellow-400 to-green-500" },
    { name: "FastAPI", color: "from-teal-500 to-emerald-600" },
    { name: "Supabase", color: "from-emerald-500 to-green-600" },
    { name: "Prisma", color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative px-8 py-16 sm:px-12 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs mb-4 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                医学生 × エンジニア
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                戸部 陽太
              </h1>
              <p className="text-xl text-white/60 mt-1">Tobe Hinata</p>
            </div>
          </div>
          
          {/* Skill Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r ${skill.color} shadow-lg shadow-black/20 hover:scale-105 transition-transform cursor-default`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2-column */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Contact */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold tracking-tight">連絡先</h2>
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-4">
                <a
                  href="mailto:yangtaihubu@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  yangtaihubu@gmail.com
                </a>
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/To-be-Sun"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-800 hover:scale-110 transition-all duration-200 shadow-md"
                >
                  <MarkGithubIcon size={18} />
                </a>

                <a
                  href="https://www.instagram.com/tobesun01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white hover:scale-110 transition-all duration-200 shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.2c3 0 3.3 0 4.5.1 1.2.1 1.9.3 2.4.6.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.5 1.2.6 2.4.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.2-.3 1.9-.6 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.2.5-2.4.6-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.2-.1-1.9-.3-2.4-.6a4.6 4.6 0 0 1-1.5-1.1 4.6 4.6 0 0 1-1.1-1.5c-.3-.5-.5-1.2-.6-2.4C2.2 15.3 2.2 15 2.2 12s0-3.3.1-4.5c.1-1.2.3-1.9.6-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.2-.5 2.4-.6C8.7 2.2 9 2.2 12 2.2Zm0 1.8c-3 0-3.3 0-4.4.1-1 .1-1.6.3-2 .5-.5.2-.8.5-1.1.9-.4.4-.7.7-.9 1.1-.2.4-.4 1-.5 2-.1 1.1-.1 1.4-.1 4.4s0 3.3.1 4.4c.1 1 .3 1.6.5 2 .2.5.5.8.9 1.1.4.4.7.7 1.1.9.4.2 1 .4 2 .5 1.1.1 1.4.1 4.4.1s3.3 0 4.4-.1c1-.1 1.6-.3 2-.5.5-.2.8-.5 1.1-.9.4-.4.7-.7.9-1.1.2-.4.4-1 .5-2 .1-1.1.1-1.4.1-4.4s0-3.3-.1-4.4c-.1-1-.3-1.6-.5-2-.2-.5-.5-.8-.9-1.1a3.2 3.2 0 0 0-1.1-.9c-.4-.2-1-.4-2-.5-1.1-.1-1.4-.1-4.4-.1Zm0 3.1a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8Zm0 1.8a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm5-2.1a1.3 1.3 0 1 1 0 2.7 1.3 1.3 0 0 1 0-2.7Z"/>
                  </svg>
                </a>

                <a
                  href="https://x.com/yangtaihubu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white hover:bg-gray-800 hover:scale-110 transition-all duration-200 shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.01l-6.58 7.52 7.73 11.98h-6.06l-4.74-6.9-5.42 6.9H3.17l7.04-8.97L2.7 2.25h6.22l4.28 6.16 5.04-6.16Zm-1.06 18.28h1.67L7.9 4.9H6.12l11.06 15.63Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold tracking-tight">資格</h2>
            </div>
            <div className="space-y-2">
              {certificates.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold tracking-tight">Note</h2>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <iframe src="https://note.com/embed/notes/n326d33efe6f7" className="w-full h-[180px]"></iframe>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* Career */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold tracking-tight">経歴</h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-indigo-50 to-violet-50">
                    <TableHead className="font-semibold text-indigo-700">Year</TableHead>
                    <TableHead className="text-left font-semibold text-indigo-700">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={event.event} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <TableCell className="font-medium text-indigo-600">{event.year}</TableCell>
                      <TableCell className="text-left text-gray-700">{event.event}</TableCell>
                    </TableRow> 
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Experience */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold tracking-tight">インターン経験</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a 
                href="https://wander-lust.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <p className="font-semibold text-blue-700">Wanderlust</p>
                <p className="text-xs text-blue-600 mb-2">インターン</p>
                <div className="flex items-center gap-1 text-sm text-blue-500">
                  <span>Visit site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
              <a 
                href="https://hatenabase.jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <p className="font-semibold text-orange-700">はてなベース</p>
                <p className="text-xs text-orange-600 mb-2">インターン</p>
                <div className="flex items-center gap-1 text-sm text-orange-500">
                  <span>Visit site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
              <a 
                href="https://clinial.co.jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <p className="font-semibold text-green-700">CLINIAL</p>
                <p className="text-xs text-green-600 mb-2">インターン</p>
                <div className="flex items-center gap-1 text-sm text-green-500">
                  <span>Visit site</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
