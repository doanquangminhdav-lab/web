import { Receipt } from 'lucide-react';
import { beforeAllProducts } from '@/data/site';
import { ButtonLink, Card, CardBody, SectionTitle } from '@/components/ui';

const sortedBeforeAll = [...beforeAllProducts].sort((a, b) => a.price - b.price);

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Bảng giá" title="Bảng giá xe điện" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardBody className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Receipt className="h-5 w-5 text-amber-600" />
              <div className="text-xl font-bold text-slate-900">Bảng giá Before All</div>
            </div>
            <div className="mt-6 grid gap-3">
              {sortedBeforeAll.map((item) => (
                <div key={item.slug} className="grid gap-3 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[110px_1fr_120px] sm:items-center">
                  <div className="overflow-hidden rounded-2xl bg-slate-50">
                    <img src={item.image} alt={item.name} className="h-20 w-full object-contain p-2" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.category}</div>
                  </div>
                  <div className="text-right text-lg font-black text-slate-900">{item.priceText}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <div className="grid gap-6">
          <Card className="bg-slate-900 text-white">
            <CardBody className="p-8">
              <div className="text-sm uppercase tracking-[0.22em] text-amber-300">Liên hệ</div>
              <div className="mt-3 text-3xl font-bold">Xem xe và nhận tư vấn</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/lien-he">Liên hệ ngay</ButtonLink>
                <ButtonLink href="/before-all" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  Xem danh mục xe
                </ButtonLink>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <div className="text-xl font-bold text-slate-900">Khoảng giá</div>
              <div className="mt-6 grid gap-4">
                {[
                  ['Dưới 15 triệu', 'BC1, Civit, Live Go'],
                  ['15 – 18 triệu', 'Gopath SI, Latina V, Latina VI'],
                  ['20 – 26 triệu', 'Faro, BF, BF26'],
                  ['35 triệu trở lên', 'BF150i, BF150S'],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl bg-slate-50 p-4">
                    <div className="font-semibold text-slate-900">{a}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{b}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
