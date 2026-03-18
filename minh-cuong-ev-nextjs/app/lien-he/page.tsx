import { Gauge, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Card, CardBody, SectionTitle } from '@/components/ui';
import { showroom } from '@/data/site';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="bg-slate-900 text-white">
          <CardBody className="p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Liên hệ showroom</div>
            <div className="mt-4 text-3xl font-black leading-tight">{showroom.name}</div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <MapPin className="mt-1 h-5 w-5 text-amber-300" />
                <div>
                  <div className="font-semibold">Địa chỉ</div>
                  <div className="mt-1 text-sm leading-6 text-slate-300">{showroom.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <Phone className="mt-1 h-5 w-5 text-amber-300" />
                <div>
                  <div className="font-semibold">Hotline</div>
                  <div className="mt-1 text-sm leading-6 text-slate-300">{showroom.hotline}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <Gauge className="mt-1 h-5 w-5 text-amber-300" />
                <div>
                  <div className="font-semibold">Hỗ trợ</div>
                  <div className="mt-1 text-sm leading-6 text-slate-300">Xem xe, nhận bảng giá và hỏi thông tin sản phẩm.</div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-8">
            <SectionTitle eyebrow="Biểu mẫu" title="Đăng ký nhận tư vấn" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
