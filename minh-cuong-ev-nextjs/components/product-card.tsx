import { Star } from 'lucide-react';
import type { Product } from '@/data/site';
import { Card, CardBody, ButtonLink } from '@/components/ui';
import { VehicleImage } from '@/components/vehicle-image';

export function ProductCard({ item }: { item: Product }) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-md">
      <CardBody>
        <VehicleImage src={item.image} alt={item.name} className="h-52" />
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <div className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{item.badge}</div>
            <div className="mt-4 text-xl font-bold text-slate-900">{item.name}</div>
            <div className="mt-1 text-sm text-slate-500">{item.category}</div>
          </div>
          <Star className="mt-1 h-5 w-5 text-amber-500" />
        </div>
        <div className="mt-4 text-2xl font-black text-slate-900">{item.priceText}</div>
        <div className="mt-6">
          <ButtonLink href={`/before-all/${item.slug}`} className="w-full">
            Xem chi tiết
          </ButtonLink>
        </div>
      </CardBody>
    </Card>
  );
}
