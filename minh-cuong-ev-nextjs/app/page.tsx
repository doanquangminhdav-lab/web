import { ChevronRight, Phone, Receipt, ShieldCheck } from 'lucide-react';
import { beforeAllProducts } from '@/data/site';
import { SectionTitle, Card, CardBody, ButtonLink } from '@/components/ui';
import { ProductCard } from '@/components/product-card';
import { VehicleImage } from '@/components/vehicle-image';
import { showroom } from '@/data/site';

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-amber-100 bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Xe điện Before All • Giá rõ ràng • Hỗ trợ xem xe tại showroom
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {showroom.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{showroom.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/before-all">
                Xem xe Before All
                <ChevronRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/bang-gia" variant="secondary">
                Xem bảng giá
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['10+', 'Mẫu Before All'],
                ['12', 'Mẫu tham khảo'],
                ['24-26', 'Bạch Mai'],
                ['0948', '125 922'],
              ].map(([value, label]) => (
                <Card key={label}>
                  <CardBody className="p-5">
                    <div className="text-2xl font-black text-slate-900">{value}</div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <div className="bg-slate-950 p-8 text-white">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Mẫu nổi bật</div>
              <div className="mt-3 text-3xl font-bold">{beforeAllProducts[0].name}</div>
              <div className="mt-3 text-xl font-semibold text-amber-300">{beforeAllProducts[0].priceText}</div>
            </div>
            <div className="p-6 sm:p-8">
              <VehicleImage src={beforeAllProducts[0].image} alt={beforeAllProducts[0].name} className="h-72" />
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Xe Before All" title="Các mẫu xe nổi bật" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {beforeAllProducts.slice(0, 8).map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="border-y border-amber-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: Receipt, title: 'Bảng giá rõ ràng' },
            { icon: ShieldCheck, title: 'Bảo hành – hậu mãi' },
            { icon: Phone, title: 'Liên hệ xem xe' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <CardBody className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-xl font-bold text-slate-900">{item.title}</div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
