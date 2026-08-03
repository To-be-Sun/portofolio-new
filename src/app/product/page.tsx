'use client';

import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Product() {
  const products = [
    {
      title: "Mortgage Repayment Calculator",
      description: "Frontend Mentor チャレンジ",
      url: "https://to-be-sun.github.io/FM6-3-Mortgage-repayment-calculator/",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "お気に入りの飲食店マップ",
      description: "Google Maps API を活用",
      url: "https://to-be-sun.github.io/my-favorite-restaurant/",
      skills: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    },
    {
      title: "Todo App",
      description: "タスク管理アプリケーション",
      url: "https://todo-app-frontend-lemon.vercel.app/",
      skills: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "GPT Clone",
      description: "ChatGPT風AIチャットアプリ",
      url: "https://gpt-clone-henna-eight.vercel.app/",
      skills: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "OpenAI API"],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      {/* Hero */}
      <section className="rounded-xl border bg-card p-8 sm:p-10">
        <Badge variant="secondary" className="mb-4">
          制作物
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Product
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          これまでに制作したWebアプリケーションやプロジェクトを紹介します。
        </p>
      </section>

      {/* Products Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="gap-0 overflow-hidden py-0 transition-colors hover:border-foreground/20">
              <div className="relative aspect-[4/3] overflow-hidden border-b bg-muted">
                <iframe
                  src={product.url}
                  className="pointer-events-none h-[400%] w-[400%] origin-top-left scale-[0.25]"
                  title={product.title}
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5" />
                <div className="absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Badge className="gap-1">
                    View
                    <ExternalLink className="h-3 w-3" />
                  </Badge>
                </div>
              </div>
              <CardHeader className="gap-1 p-4">
                <CardTitle className="truncate text-sm">{product.title}</CardTitle>
                <CardDescription className="truncate">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-1">
                  {product.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </section>
    </main>
  );
}
