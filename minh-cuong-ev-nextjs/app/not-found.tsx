import { ButtonLink, Card, CardBody } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-16">
      <Card className="w-full">
        <CardBody className="p-8 text-center sm:p-10">
          <div className="text-3xl font-black text-slate-900">Không tìm thấy trang</div>
          <div className="mt-3 text-slate-600">Trang bạn đang tìm không tồn tại hoặc đã được thay đổi.</div>
          <div className="mt-6">
            <ButtonLink href="/">Quay về trang chủ</ButtonLink>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
