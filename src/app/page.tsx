'use client';
import React from "react";
import Image from "next/image";
import { MarkGithubIcon } from '@primer/octicons-react';
import { Mail, Award, PenLine, Clock, Briefcase, ExternalLink, FolderOpen } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    { name: "統計検定２級", image: "/certificates/toukei-kentei-2kyu-preview.png", file: "/certificates/toukei-kentei-2kyu.pdf" },
    { name: "G検定", image: "/certificates/g-kentei-preview.png", file: "/certificates/g-kentei.pdf" },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js",
    "TypeScript", "Python", "FastAPI", "Supabase", "Prisma",
  ];

  const internships = [
    { name: "Wanderlust", url: "https://wander-lust.io/" },
    { name: "はてなベース", url: "https://hatenabase.jp/" },
    { name: "CLINIAL", url: "https://clinial.co.jp/" },
  ];

  const product = {
    title: "PCA AI Agent",
    description: "プラントの運転データ（CSV / Excel）を、画面の質問に答えながら前処理・主成分分析・クラスタリング・グループ評価まで進める分析ツール。迷ったときはAIに結果の説明と推奨の選択肢を聞けます。",
    url: "https://pca-ai-agent.vercel.app",
    image: "/products/pca-ai-agent.gif",
    skills: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "scikit-learn", "OpenAI API"],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      {/* Hero */}
      <section className="rounded-xl border bg-card p-8 sm:p-10">
        <Badge variant="secondary" className="mb-4">
          医学生 × エンジニア
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          戸部 陽太
        </h1>
        <p className="text-muted-foreground mt-1">Tobe Hinata</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="font-normal">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Product */}
      <section>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card className="transition-colors hover:border-foreground/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
                成果物
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-[8/5] overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={product.image}
                  alt={`${product.title}の操作画面`}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-3">
                <p className="font-medium text-foreground">{product.title}</p>
                <CardDescription>{product.description}</CardDescription>
                <div className="flex flex-wrap gap-1">
                  {product.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Visit site</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      </section>

      {/* 2-column */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4 text-muted-foreground" />
                連絡先
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">
                <a
                  href="mailto:yangtaihubu@gmail.com"
                  className="font-medium text-foreground hover:underline"
                >
                  yangtaihubu@gmail.com
                </a>
              </p>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/To-be-Sun"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <MarkGithubIcon size={18} />
                </a>

                <a
                  href="https://www.instagram.com/tobesun01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.2c3 0 3.3 0 4.5.1 1.2.1 1.9.3 2.4.6.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.5 1.2.6 2.4.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.2-.3 1.9-.6 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.2.5-2.4.6-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.2-.1-1.9-.3-2.4-.6a4.6 4.6 0 0 1-1.5-1.1 4.6 4.6 0 0 1-1.1-1.5c-.3-.5-.5-1.2-.6-2.4C2.2 15.3 2.2 15 2.2 12s0-3.3.1-4.5c.1-1.2.3-1.9.6-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.2-.5 2.4-.6C8.7 2.2 9 2.2 12 2.2Zm0 1.8c-3 0-3.3 0-4.4.1-1 .1-1.6.3-2 .5-.5.2-.8.5-1.1.9-.4.4-.7.7-.9 1.1-.2.4-.4 1-.5 2-.1 1.1-.1 1.4-.1 4.4s0 3.3.1 4.4c.1 1 .3 1.6.5 2 .2.5.5.8.9 1.1.4.4.7.7 1.1.9.4.2 1 .4 2 .5 1.1.1 1.4.1 4.4.1s3.3 0 4.4-.1c1-.1 1.6-.3 2-.5.5-.2.8-.5 1.1-.9.4-.4.7-.7.9-1.1.2-.4.4-1 .5-2 .1-1.1.1-1.4.1-4.4s0-3.3-.1-4.4c-.1-1-.3-1.6-.5-2-.2-.5-.5-.8-.9-1.1a3.2 3.2 0 0 0-1.1-.9c-.4-.2-1-.4-2-.5-1.1-.1-1.4-.1-4.4-.1Zm0 3.1a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8Zm0 1.8a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm5-2.1a1.3 1.3 0 1 1 0 2.7 1.3 1.3 0 0 1 0-2.7Z"/>
                  </svg>
                </a>

                <a
                  href="https://x.com/yangtaihubu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.01l-6.58 7.52 7.73 11.98h-6.06l-4.74-6.9-5.42 6.9H3.17l7.04-8.97L2.7 2.25h6.22l4.28 6.16 5.04-6.16Zm-1.06 18.28h1.67L7.9 4.9H6.12l11.06 15.63Z"/>
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Certificate */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Award className="h-4 w-4 text-muted-foreground" />
                資格
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certificates.map((c) => (
                  <li key={c.name} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    {c.file ? (
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {certificates
                  .filter((c) => c.image)
                  .map((c) => (
                    <a
                      key={c.name}
                      href={c.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-lg border hover:bg-accent transition-colors"
                    >
                      <div className="relative h-32 w-full bg-muted">
                        <Image
                          src={c.image!}
                          alt={`${c.name}の合格証`}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="px-2 py-1.5 text-center text-xs text-muted-foreground">{c.name}</p>
                    </a>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Note */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <PenLine className="h-4 w-4 text-muted-foreground" />
                Note
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-lg border">
                <iframe src="https://note.com/embed/notes/n326d33efe6f7" className="w-full h-[180px]"></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* Career */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4 text-muted-foreground" />
                経歴
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-medium">Year</TableHead>
                      <TableHead className="text-left font-medium">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.event}>
                        <TableCell className="font-medium text-muted-foreground">{event.year}</TableCell>
                        <TableCell className="text-left">{event.event}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                インターン経験
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {internships.map((intern) => (
                  <a
                    key={intern.name}
                    href={intern.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border p-4 hover:bg-accent transition-colors"
                  >
                    <p className="font-medium text-foreground">{intern.name}</p>
                    <p className="mb-3 text-xs text-muted-foreground">インターン</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>Visit site</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
