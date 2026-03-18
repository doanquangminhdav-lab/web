import type { MarketModel } from '@/data/site';
import { Card, CardBody } from '@/components/ui';
import { VehicleImage } from '@/components/vehicle-image';

export function MarketCard({ item }: { item: MarketModel }) {
  return (
    <Card>
      <CardBody>
        <VehicleImage src={item.image} alt={item.name} className="h-52" />
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <div className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item.tag}</div>
            <div className="mt-4 text-2xl font-bold text-slate-900">{item.name}</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Tham khảo</div>
            <div className="mt-2 text-lg font-black text-slate-900">{item.priceText}</div>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Tốc độ / phân khúc</div>
            <div className="mt-2 text-sm font-semibold text-slate-900">{item.speed}</div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Quãng đường / pin</div>
            <div className="mt-2 text-sm font-semibold text-slate-900">{item.range}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
