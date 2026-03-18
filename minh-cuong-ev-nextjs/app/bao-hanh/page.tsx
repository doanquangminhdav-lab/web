import { Building2, ShieldCheck, Wrench, Zap } from 'lucide-react';
import { showroom } from '@/data/site';
import { Card, CardBody, SectionTitle } from '@/components/ui';

export default function WarrantyPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Bảo hành – hậu mãi" title="Bảo hành và hỗ trợ sau bán" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <Card className="bg-slate-900 text-white">
          <CardBody className="p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-amber-300" />
              <div className="text-xl font-bold">Nội dung hỗ trợ</div>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                'Kiểm tra xe trước khi giao',
                'Hướng dẫn sử dụng và sạc đúng cách khi nhận xe',
                'Hỗ trợ theo dõi bảo dưỡng định kỳ',
                'Hỗ trợ kiểm tra khi xe có vấn đề',
                'Xác nhận tình trạng pin hoặc ắc quy khi giao xe',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-6 sm:p-8">
            <div className="text-xl font-bold text-slate-900">Thông tin bảo hành</div>
            <div className="mt-6 grid gap-4">
              {[
                ['Động cơ / bộ điều khiển', 'Theo phiếu bán hàng và chính sách áp dụng tại thời điểm mua xe.'],
                ['Ắc quy / pin', 'Theo từng phiên bản xe và tình trạng thực tế khi giao xe.'],
                ['Sạc / phụ kiện theo xe', 'Kiểm tra tại showroom khi tiếp nhận xe.'],
                ['Bảo dưỡng định kỳ', 'Hỗ trợ kiểm tra theo nhu cầu sử dụng.'],
                ['Liên hệ', `${showroom.address} • ${showroom.hotline}`],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-4">
                  <div className="font-semibold text-slate-900">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{text}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { icon: Wrench, title: 'Bảo dưỡng' },
          { icon: Zap, title: 'Hướng dẫn sạc' },
          { icon: Building2, title: 'Tiếp nhận tại showroom' },
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
  );
}
