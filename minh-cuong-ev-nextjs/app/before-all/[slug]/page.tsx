import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { beforeAllProducts } from '@/data/site';
import { Card, CardBody, ButtonLink, SectionTitle } from '@/components/ui';
import { VehicleImage } from '@/components/vehicle-image';

export function generateStaticParams() {
  return beforeAllProducts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = beforeAllProducts.find((item) => item.slug === slug);
  return {
    title: product ? `${product.name} | Thế giới xe điện Minh Cường` : 'Sản phẩm',
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = beforeAllProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap gap-3">
        <ButtonLink href="/before-all" variant="secondary">
          Quay lại danh mục Before All
        </ButtonLink>
        <ButtonLink href="/lien-he">Liên hệ xem xe</ButtonLink>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Card className="lg:sticky lg:top-24 lg:h-fit">
          <CardBody className="p-6 sm:p-8">
            <div className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{product.badge}</div>
            <div className="mt-4 text-3xl font-black tracking-tight text-slate-900">{product.name}</div>
            <div className="mt-2 text-lg text-slate-500">{product.category}</div>
            <div className="mt-5 text-4xl font-black text-slate-900">{product.priceText}</div>
            <div className="mt-6">
              <VehicleImage src={product.image} alt={product.name} className="h-72" />
            </div>
            <div className="mt-6 rounded-3xl bg-slate-50 p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Phù hợp</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">{product.audience}</div>
            </div>
          </CardBody>
        </Card>

        <div className="grid gap-8">
          <Card>
            <CardBody className="p-6 sm:p-8">
              <SectionTitle eyebrow="Thông số kỹ thuật" title="Bảng thông số chi tiết" />
              <div className="mt-8 grid gap-3">
                {product.specs.map(([key, value]) => (
                  <div key={key} className="grid gap-2 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[220px_1fr]">
                    <div className="text-sm font-semibold text-slate-500">{key}</div>
                    <div className="text-sm leading-6 text-slate-800">{value}</div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card className="bg-slate-900 text-white">
            <CardBody className="p-6 sm:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Liên hệ</div>
              <div className="mt-3 text-3xl font-bold">Xem xe tại showroom</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/lien-he">Liên hệ ngay</ButtonLink>
                <ButtonLink href="/bang-gia" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  Xem bảng giá
                </ButtonLink>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
