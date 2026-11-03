'use client';
import React from "react";
import Image from "next/image";
import { MarkGithubIcon } from '@primer/octicons-react';
import { ArrowUpRight } from 'lucide-react';
import { HeartScene } from '@/components/heart-scene';

const sceneSections = ['profile', 'product', 'product-detail', 'career', 'contact'];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs tracking-[0.2em] text-muted-foreground">{children}</p>;
}

const socialClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background";

export default function Home() {
  const events = [
    { year: 2004, event: '岐阜県出身' },
    { year: 2010, event: '岐阜聖徳学園大学付属小学校入学' },
    { year: 2016, event: '岐阜聖徳学園大学付属小学校卒業' },
    { year: 2016, event: '名古屋中学校入学' },
    { year: 2019, event: '名古屋中学校卒業' },
    { year: 2019, event: '名古屋高校入学' },
    { year: 2022, event: '名古屋高校卒業' },
    { year: 2023, event: '日本医科大学入学' },
  ];
  const certificates = [
    { name: "英検準１級" },
    { name: "漢検２級" },
    { name: "統計検定２級" },
    { name: "G検定" },
  ];

  const skills = [
    { area: "言語", items: "TypeScript / JavaScript / Python / HTML / CSS" },
    { area: "フロントエンド", items: "React / Next.js（App Router）/ Vite / Tailwind CSS / shadcn/ui / TanStack Query" },
    { area: "バックエンド", items: "FastAPI / Hono / Node.js / REST API 設計" },
    { area: "データベース", items: "PostgreSQL / SQLite / Prisma / SQL" },
    { area: "データ分析", items: "pandas / NumPy / SciPy / scikit-learn / Matplotlib / seaborn / JupyterLab" },
    { area: "AI・LLM", items: "Claude Code / Codex" },
    { area: "自動化・連携", items: "Google Apps Script / GitHub Actions / Playwright / Notion API / Slack API / Google Workspace API（OAuth）" },
    { area: "文書・画像処理", items: "pypdf / Pillow / OCR" },
    { area: "開発ツール", items: "Git / GitHub（Issue・PR レビュー）/ pnpm / Vitest / pytest" },
    { area: "デプロイ", items: "Vercel / Fly.io" },
  ];

  const internships = [
    { period: "2026.09 – 現在", name: "LocalX株式会社", url: "https://www.localx.jp/", detail: "求人収集・採点ツールの開発、GAS による業務効率化" },
    { period: "2025.10 – 現在", name: "株式会社CLINIAL", url: "https://clinial.co.jp/", detail: "EHR（電子カルテ）データの解析" },
    { period: "2025.07 – 2025.12", name: "はてなベース株式会社", url: "https://hatenabase.jp/", detail: "kintone 周辺の開発" },
    { period: "2025.04 – 2026.02", name: "株式会社Wanderlust", url: "https://wander-lust.io/", detail: "データ分析手法の習得、主成分分析の AI エージェント開発" },
  ];

  const products = [
    {
      title: "PCA AI Agent",
      description: "プラントの運転データ（CSV / Excel）を、画面の質問に答えながら前処理・主成分分析・クラスタリング・グループ評価まで進める分析ツール。迷ったときはAIに結果の説明と推奨の選択肢を聞けます。",
      url: "https://pca-ai-agent.vercel.app",
      image: "/products/pca-ai-agent.gif",
      video: null,
      stagesLabel: "分析の流れ",
      stages: [
        { name: "データ取り込み", detail: "CSV / Excel を読み込み、列を数値・日時・対象外に自動で判定" },
        { name: "前処理", detail: "欠損値と外れ値候補（IQR 1.5 倍）を集計し、扱い方と移動平均を選ぶ" },
        { name: "標準化・除外", detail: "標準化し、変動係数 1% 未満の列を除外するか決める" },
        { name: "主成分分析", detail: "使う列と主成分の数を選ぶ" },
        { name: "クラスタリング", detail: "主成分の組とクラスタ数を選び、Ward 法で分ける" },
        { name: "グループ評価", detail: "グループ別の偏差と推移の図を出し、結果を Excel で書き出す" },
      ],
      stack: [
        { area: "フロントエンド", items: "Next.js 16 / React 19 / Tailwind CSS v4 / shadcn/ui / SheetJS" },
        { area: "バックエンド", items: "FastAPI / pandas / scikit-learn / SciPy / SQLite" },
        { area: "AI", items: "OpenAI API" },
        { area: "インフラ", items: "Vercel（フロント）/ Fly.io（API）" },
      ],
    },
    {
      title: "Tool Workspace",
      description: "左に Gmail・Slack・Notion・カレンダーなど普段使うツールの本物の画面、右に Claude Code が動くターミナルを並べる Mac アプリ。アカウント（組織）ごとにツールとターミナルの作業フォルダを切り替え、AI と一緒に日々の仕事を進めるための作業場です。",
      note: "自分の Mac で使う個人用のアプリのため、デモはありません。動画は架空のツールとデータで操作したサンプルです。",
      image: "/products/tool-workspace-poster.jpg",
      video: "/products/tool-workspace.mp4",
      stagesLabel: "機能",
      stages: [
        { name: "プロジェクト", detail: "アカウントのドメインごとに、左のツールと右のターミナル（~/Workspaces/<名前>）をまとめて切り替える" },
        { name: "ツール", detail: "Web サービスをアカウントごとにログインを分けて常駐させ、通知と未読の印を残す" },
        { name: "ターミナル", detail: "区画の分割・タブの移動ができ、Claude Code や Codex をボタン 1 つで起動する" },
        { name: "画面を AI に渡す", detail: "ツールの画面を範囲で囲むと画像にして、Claude Code の入力にそのまま渡す" },
        { name: "tw コマンド", detail: "ターミナルや Claude Code から、ツールを開く・縮小する・ページを開くなど表示を操作する" },
        { name: "スマホから", detail: "Tailscale 経由で、iPhone のブラウザから Mac のターミナルを使う" },
      ],
      stack: [
        { area: "デスクトップ", items: "Electron / node-pty / xterm.js / UNIX ソケット" },
        { area: "画面", items: "React 19 / Vite / Tailwind CSS v4 / shadcn/ui" },
        { area: "連携", items: "Claude Code（スキル・スラッシュコマンド）/ Tailscale" },
      ],
    },
  ];

  return (
    <>
      <HeartScene sectionIds={sceneSections} />

      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-10">
        <a href="#profile" className="font-mono text-xs tracking-widest text-white">TH</a>
        <nav className="flex gap-5 text-xs text-white md:gap-8">
          <a href="#product" className="hover:underline underline-offset-4">成果物</a>
          <a href="#career" className="hover:underline underline-offset-4">経歴</a>
          <a href="#contact" className="hover:underline underline-offset-4">連絡先</a>
        </nav>
      </header>

      <main>
        <section id="profile" className="mx-auto flex min-h-svh max-w-[1320px] flex-col justify-end px-6 pb-10 md:px-10 md:pb-14">
          <h1 className="text-2xl font-normal tracking-[0.12em] md:text-3xl">戸部 陽太</h1>
        </section>

        <section id="product" className="mx-auto max-w-[1320px] px-6 md:px-10">
          {products.map((product, productIndex) => (
            <div key={product.title} className={productIndex > 0 ? "mt-48" : undefined}>
              <div
                className={`grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-14 ${
                  productIndex === 0 ? "min-h-svh content-end pb-16 md:pb-24" : ""
                }`}
              >
                <div>
                  <Label>成果物 {String(productIndex + 1).padStart(2, "0")}</Label>
                  <h2 className="mt-3 text-2xl font-normal tracking-wide md:text-3xl">{product.title}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-loose text-muted-foreground">{product.description}</p>
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[var(--signal)]"
                    >
                      デモを開く
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </a>
                  ) : (
                    <p className="mt-6 max-w-sm text-xs leading-loose text-muted-foreground/70">{product.note}</p>
                  )}
                </div>

                {(() => {
                  const screen = (
                    <div className={`relative overflow-hidden rounded-sm border bg-background ${product.video ? "aspect-[1500/930]" : "aspect-[8/5]"}`}>
                      {product.video ? (
                        <video
                          src={product.video}
                          poster={product.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          aria-label={`${product.title}の操作動画`}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      ) : (
                        <Image
                          src={product.image}
                          alt={`${product.title}の操作画面`}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 760px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                        />
                      )}
                    </div>
                  );
                  return product.url ? (
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${product.title}のデモを開く`}>
                      {screen}
                    </a>
                  ) : (
                    screen
                  );
                })()}
              </div>

              <div id={productIndex === 0 ? "product-detail" : undefined} className="mt-24 grid gap-8 md:grid-cols-[1fr_3fr]">
                <Label>{product.stagesLabel}</Label>
                <ol className="border-t">
                  {product.stages.map((stage, index) => (
                    <li key={stage.name} className="grid grid-cols-[2.5rem_8rem_1fr] items-baseline gap-4 border-b py-3 text-sm max-sm:grid-cols-[2rem_1fr]">
                      <span className="font-mono text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                      <span>{stage.name}</span>
                      <span className="text-muted-foreground max-sm:col-start-2">{stage.detail}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-24 grid gap-8 md:grid-cols-[1fr_3fr]">
                <Label>技術</Label>
                <div>
                  <dl className="border-t">
                    {product.stack.map((row) => (
                      <div key={row.area} className="grid grid-cols-[8rem_1fr] items-baseline gap-4 border-b py-3 text-sm max-sm:grid-cols-1 max-sm:gap-1">
                        <dt className="text-muted-foreground">{row.area}</dt>
                        <dd className="font-mono text-xs leading-[1.8]">{row.items}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="career" className="mx-auto mt-40 max-w-[1320px] space-y-24 px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
            <Label>スキル</Label>
            <dl className="border-t">
              {skills.map((row) => (
                <div key={row.area} className="grid grid-cols-[8rem_1fr] items-baseline gap-4 border-b py-3 text-sm max-sm:grid-cols-1 max-sm:gap-1">
                  <dt className="text-muted-foreground">{row.area}</dt>
                  <dd className="font-mono text-xs leading-[1.8]">{row.items}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
            <Label>経歴</Label>
            <ol className="border-t">
              {events.map((event) => (
                <li key={event.event} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-4 border-b py-3 text-sm">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{event.year}</span>
                  <span>{event.event}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
            <Label>インターン</Label>
            <ol className="border-t">
              {internships.map((intern) => (
                <li key={intern.name} className="grid grid-cols-[9rem_14rem_1fr] items-baseline gap-4 border-b py-3 text-sm max-md:grid-cols-[9rem_1fr] max-sm:grid-cols-1 max-sm:gap-1">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{intern.period}</span>
                  <span>
                    <a href={intern.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[var(--signal)]">
                      {intern.name}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </span>
                  <span className="text-muted-foreground max-md:col-start-2 max-sm:col-start-1">{intern.detail}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
            <Label>資格</Label>
            <div className="border-t">
              {certificates.map((c) => (
                <p key={c.name} className="border-b py-3 text-sm">{c.name}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto flex min-h-svh max-w-[1320px] flex-col justify-end px-6 pb-10 pt-40 md:px-10 md:pb-14">
          <Label>連絡先</Label>
          <a
            href="mailto:yangtaihubu@gmail.com"
            className="mt-3 break-all text-xl font-normal tracking-wide transition-colors md:text-2xl hover:text-[var(--signal)]"
          >
            yangtaihubu@gmail.com
          </a>
          <div className="mt-5 flex items-center gap-2">
            <a href="https://github.com/To-be-Sun" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={socialClass}>
              <MarkGithubIcon size={16} />
            </a>
            <a href="https://www.instagram.com/tobesun01/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3 0 3.3 0 4.5.1 1.2.1 1.9.3 2.4.6.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.5 1.2.6 2.4.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.2-.3 1.9-.6 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.2.5-2.4.6-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.2-.1-1.9-.3-2.4-.6a4.6 4.6 0 0 1-1.5-1.1 4.6 4.6 0 0 1-1.1-1.5c-.3-.5-.5-1.2-.6-2.4C2.2 15.3 2.2 15 2.2 12s0-3.3.1-4.5c.1-1.2.3-1.9.6-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.2-.5 2.4-.6C8.7 2.2 9 2.2 12 2.2Zm0 1.8c-3 0-3.3 0-4.4.1-1 .1-1.6.3-2 .5-.5.2-.8.5-1.1.9-.4.4-.7.7-.9 1.1-.2.4-.4 1-.5 2-.1 1.1-.1 1.4-.1 4.4s0 3.3.1 4.4c.1 1 .3 1.6.5 2 .2.5.5.8.9 1.1.4.4.7.7 1.1.9.4.2 1 .4 2 .5 1.1.1 1.4.1 4.4.1s3.3 0 4.4-.1c1-.1 1.6-.3 2-.5.5-.2.8-.5 1.1-.9.4-.4.7-.7.9-1.1.2-.4.4-1 .5-2 .1-1.1.1-1.4.1-4.4s0-3.3-.1-4.4c-.1-1-.3-1.6-.5-2-.2-.5-.5-.8-.9-1.1a3.2 3.2 0 0 0-1.1-.9c-.4-.2-1-.4-2-.5-1.1-.1-1.4-.1-4.4-.1Zm0 3.1a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8Zm0 1.8a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm5-2.1a1.3 1.3 0 1 1 0 2.7 1.3 1.3 0 0 1 0-2.7Z"/>
              </svg>
            </a>
            <a href="https://x.com/yangtaihubu" target="_blank" rel="noopener noreferrer" aria-label="X" className={socialClass}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.01l-6.58 7.52 7.73 11.98h-6.06l-4.74-6.9-5.42 6.9H3.17l7.04-8.97L2.7 2.25h6.22l4.28 6.16 5.04-6.16Zm-1.06 18.28h1.67L7.9 4.9H6.12l11.06 15.63Z"/>
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
