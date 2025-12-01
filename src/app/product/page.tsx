'use client';

export default function Product(){
  const products = [
    {
      title: "Mortgage Repayment Calculator",
      description: "Frontend Mentor チャレンジ",
      url: "https://to-be-sun.github.io/FM6-3-Mortgage-repayment-calculator/",
      color: "from-orange-500 to-amber-500",
      hoverBorder: "hover:border-orange-200",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "お気に入りの飲食店マップ",
      description: "Google Maps API を活用",
      url: "https://to-be-sun.github.io/my-favorite-restaurant/",
      color: "from-blue-500 to-indigo-600",
      hoverBorder: "hover:border-blue-200",
      skills: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    },
    {
      title: "Todo App",
      description: "タスク管理アプリケーション",
      url: "https://todo-app-frontend-lemon.vercel.app/",
      color: "from-purple-500 to-pink-500",
      hoverBorder: "hover:border-purple-200",
      skills: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "GPT Clone",
      description: "ChatGPT風AIチャットアプリ",
      url: "https://github.com/To-be-Sun/gpt-clone",
      color: "from-green-500 to-emerald-600",
      hoverBorder: "hover:border-green-200",
      skills: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "OpenAI API"],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative px-8 py-12 sm:px-12 sm:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs mb-4 backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            制作物
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Product
          </h1>
          <p className="mt-3 text-base text-white/80 max-w-xl">
            これまでに制作したWebアプリケーションやプロジェクトを紹介します。
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg ${product.hoverBorder} transition-all duration-300`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <iframe 
                src={product.url}
                className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                title={product.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r ${product.color} text-white text-xs font-medium shadow-lg`}>
                  <span>View</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm truncate">{product.title}</h3>
              <p className="text-xs text-gray-500 mt-1 truncate">{product.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {product.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-gray-100 text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}