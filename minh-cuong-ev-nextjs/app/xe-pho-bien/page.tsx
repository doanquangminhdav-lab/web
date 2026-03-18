import { marketModels } from '@/data/site';
import { MarketCard } from '@/components/market-card';
import { SectionTitle } from '@/components/ui';

export default function MarketPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Xe phổ biến khác" title="Các mẫu xe tham khảo" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {marketModels.map((item) => (
          <MarketCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
