'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen } from 'lucide-react';

const tabs = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'Product',
    href: '/product',
    icon: FolderOpen,
  },
];

export function TabNavigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold text-sm">
              TH
            </div>
            <span className="font-semibold text-gray-900 hidden sm:block">Tobe Hinata</span>
          </Link>

          {/* Tab Navigation */}
          <nav className="flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              const Icon = tab.icon;
              
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'text-purple-700 bg-purple-50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-purple-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
