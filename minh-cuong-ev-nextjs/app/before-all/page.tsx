import { beforeAllProducts } from '@/data/site';
import { ProductCard } from '@/components/product-card';
import { SectionTitle } from '@/components/ui';

export default function BeforeAllPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Danh mục Before All" title="Tất cả mẫu xe Before All" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {beforeAllProducts.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
