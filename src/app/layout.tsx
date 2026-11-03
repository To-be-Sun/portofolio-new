import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tobe Hinata Portfolio",
  description: "戸部陽太のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
        />
      </head>
      <body
        className="antialiased bg-background text-foreground min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
