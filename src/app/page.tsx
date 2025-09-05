import React from "react";
import {MarkGithubIcon} from '@primer/octicons-react'

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="relative isolate px-6 py-10 sm:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-2xl"
          />
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            戸部 陽太 / Tobe Hinata
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            医学生 × フロントエンド & データサイエンス。医療DXとアニメ業界に貢献するのが目標です。
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs">
              HTML/CSS/JS・Tailwind・React・Next.js
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs">
              Python独学・GCI受講中
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs">
              英検準1級 / NativeCamp
            </span>
          </div>
        </div>
      </section>

      {/* 2-column */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Profile */}
        <div className="md:col-span-1 space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 id="profile" className="mb-3 text-lg font-semibold tracking-tight">
              プロフィール
            </h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>21歳、日本の医学生。</li>
              <li>フロントエンド（Tailwind/React）とデータ分析（Python）を学習・実践。</li>
              <li>関心：医療データ活用、アニメ制作の工程最適化。</li>
              <li>趣味：サッカー（Arsenal推し）、アニメ</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-lg font-semibold tracking-tight">連絡先</h2>
            <div className="text-sm text-gray-700">
              <p>
                ご連絡は
                <a
                  href="mailto:yangtaihubu@gmail.com"
                  className="mx-1 text-blue-600 underline decoration-dotted underline-offset-4 hover:text-blue-700"
                >
                  yangtaihubu@gmail.com
                </a>
                まで。
              </p>

              {/* ▼▼ ソーシャルアイコン（GitHub / Instagram / X） ▼▼ */}
              <div className="mt-4 flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/To-be-Sun"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:ring-2 hover:ring-blue-500/20"
                >
                  <MarkGithubIcon size={16} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/tobesun01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:ring-2 hover:ring-pink-500/20"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.2c3 0 3.3 0 4.5.1 1.2.1 1.9.3 2.4.6.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.5 1.2.6 2.4.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.2-.3 1.9-.6 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.2.5-2.4.6-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.2-.1-1.9-.3-2.4-.6a4.6 4.6 0 0 1-1.5-1.1 4.6 4.6 0 0 1-1.1-1.5c-.3-.5-.5-1.2-.6-2.4C2.2 15.3 2.2 15 2.2 12s0-3.3.1-4.5c.1-1.2.3-1.9.6-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.2-.5 2.4-.6C8.7 2.2 9 2.2 12 2.2Zm0 1.8c-3 0-3.3 0-4.4.1-1 .1-1.6.3-2 .5-.5.2-.8.5-1.1.9-.4.4-.7.7-.9 1.1-.2.4-.4 1-.5 2-.1 1.1-.1 1.4-.1 4.4s0 3.3.1 4.4c.1 1 .3 1.6.5 2 .2.5.5.8.9 1.1.4.4.7.7 1.1.9.4.2 1 .4 2 .5 1.1.1 1.4.1 4.4.1s3.3 0 4.4-.1c1-.1 1.6-.3 2-.5.5-.2.8-.5 1.1-.9.4-.4.7-.7.9-1.1.2-.4.4-1 .5-2 .1-1.1.1-1.4.1-4.4s0-3.3-.1-4.4c-.1-1-.3-1.6-.5-2-.2-.5-.5-.8-.9-1.1a3.2 3.2 0 0 0-1.1-.9c-.4-.2-1-.4-2-.5-1.1-.1-1.4-.1-4.4-.1Zm0 3.1a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8Zm0 1.8a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm5-2.1a1.3 1.3 0 1 1 0 2.7 1.3 1.3 0 0 1 0-2.7Z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/yangtaihubu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:ring-2 hover:ring-gray-500/20"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.01l-6.58 7.52 7.73 11.98h-6.06l-4.74-6.9-5.42 6.9H3.17l7.04-8.97L2.7 2.25h6.22l4.28 6.16 5.04-6.16Zm-1.06 18.28h1.67L7.9 4.9H6.12l11.06 15.63Z"/>
                  </svg>
                </a>
              </div>
              {/* ▲▲ ソーシャルアイコン ▲▲ */}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* Skills */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 id="skills" className="mb-3 text-lg font-semibold tracking-tight">
              スキル
            </h2>
            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              <div>
                <p className="mb-1 font-medium">フロントエンド</p>
                <ul className="space-y-1 text-gray-700">
                  <li>HTML / CSS / JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>React・Next.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 font-medium">データサイエンス</p>
                <ul className="space-y-1 text-gray-700">
                  <li>Python, pandas, NumPy</li>
                  <li>scikit-learn</li>
                  <li>前処理・特徴量設計</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 id="experience" className="mb-3 text-lg font-semibold tracking-tight">
              経験
            </h2>
            <div className="space-y-3 text-sm">
              <div className="rounded-xl border border-gray-200 p-3">
                <p className="font-medium">AIスタートアップ インターン（2025年〜）</p>
                <p className="text-gray-600">
                  東大松尾研系のAIスタートアップで学習・開発実務に参画予定／進行中。<br></br>
                  kaggle titanicコンペへの参加、分析モデル入門の読破、transformerの原文読破<br></br>
                  LightGBM＋特徴量設計<br></br>
                  CV ≈ 0.83、LB ≈ 0.79
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-3">
                <p className="font-medium">Web開発・学習</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Frontend Mentor（Newbie 完了）、Udemy「Web Developer Bootcamp」受講</li>
                  <li>お気に入り飲食店マップ（Google Maps API）／UI練習（shadcn/ui）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 id="projects" className="mb-3 text-lg font-semibold tracking-tight">
              プロジェクト
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border border-gray-200 p-3">
                <p className="font-medium">飲食店お気に入りマップ</p>
                <p className="text-gray-600">
                  Google Maps APIで飲食店を登録・表示。UI/UXと地図操作の基礎を実践。
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-3">
                <p className="font-medium">Titanic 予測パイプライン</p>
                <p className="text-gray-600">
                  LightGBM＋前処理（欠損補完・カテゴリ変換・クラスタリング・PCA）で再現性ある学習環境を構築。
                </p>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h2 id="goals" className="mb-3 text-lg font-semibold tracking-tight">
              目標
            </h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>医療データの可視化・意思決定支援ツールを自作し、医療DXに寄与</li>
              <li>アニメ制作工程のエラー検出・効率化（QC）にデータとソフトウェアで挑戦</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
