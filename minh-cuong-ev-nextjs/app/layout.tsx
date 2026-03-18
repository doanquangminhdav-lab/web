import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FloatingCall } from '@/components/floating-call';
import { showroom } from '@/data/site';

export const metadata: Metadata = {
  title: showroom.name,
  description: showroom.tagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingCall />
      </body>
    </html>
  );
}
