'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';
import { navItems, showroom } from '@/data/site';
import { ButtonLink, cn } from '@/components/ui';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-left">
          <div className="text-xl font-black tracking-tight text-slate-900">{showroom.name}</div>
          <div className="text-sm text-slate-500">{showroom.tagline}</div>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex">
          {navItems.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-2xl px-4 py-2 text-sm font-semibold transition',
                  active ? 'bg-amber-400 text-slate-900 hover:bg-amber-300' : 'text-slate-700 hover:bg-slate-100',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="text-right text-sm">
            <div className="font-semibold text-slate-900">Hotline</div>
            <div className="text-slate-500">{showroom.hotline}</div>
          </div>
          <ButtonLink href="/lien-he">Liên hệ ngay</ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-2xl p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-amber-100 px-4 py-3 xl:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-semibold',
                    active ? 'bg-amber-400 text-slate-900' : 'border border-slate-200 text-slate-700',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${showroom.hotline}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              <Phone className="h-4 w-4" />
              {showroom.hotline}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
