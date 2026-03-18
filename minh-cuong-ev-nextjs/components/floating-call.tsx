import { Phone } from 'lucide-react';
import { showroom } from '@/data/site';

export function FloatingCall() {
  return (
    <a
      href={`tel:${showroom.hotline}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-amber-400 px-5 py-3 font-bold text-slate-900 shadow-xl hover:bg-amber-300"
    >
      <Phone className="h-4 w-4" />
      {showroom.hotline}
    </a>
  );
}
