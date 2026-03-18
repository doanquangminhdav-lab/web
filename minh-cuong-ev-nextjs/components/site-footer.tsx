import { showroom } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-100 bg-amber-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="text-2xl font-black tracking-tight text-slate-900">{showroom.name}</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-amber-200 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Địa chỉ</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{showroom.address}</div>
          </div>
          <div className="rounded-3xl border border-amber-200 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Hotline</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">{showroom.hotline}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
