# Thế giới xe điện Minh Cường — Next.js

Bộ mã Next.js hoàn chỉnh để deploy website showroom xe điện.

## Công nghệ

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React icons

## Cách chạy local

```bash
npm install
npm run dev
```

Mở trình duyệt tại:

```bash
http://localhost:3000
```

## Cách deploy lên Vercel

1. Tạo một repo mới trên GitHub
2. Upload toàn bộ source code này lên repo
3. Vào Vercel và chọn **Add New Project**
4. Import repo GitHub vừa tạo
5. Bấm **Deploy**

Vercel hỗ trợ Next.js theo kiểu zero-config nên không cần chỉnh build command riêng trong trường hợp này.

## Cấu trúc route

- `/` — Trang chủ
- `/before-all` — Danh mục xe Before All
- `/before-all/[slug]` — Trang chi tiết từng mẫu xe
- `/xe-pho-bien` — Các mẫu xe tham khảo
- `/bang-gia` — Bảng giá
- `/bao-hanh` — Bảo hành – hậu mãi
- `/lien-he` — Liên hệ

## Chỉnh nội dung nhanh

### Đổi tên shop, hotline, địa chỉ
Sửa file:

```bash
data/site.ts
```

### Thêm hoặc sửa sản phẩm Before All
Sửa mảng:

```bash
beforeAllProducts
```

### Thêm hoặc sửa mẫu xe tham khảo
Sửa mảng:

```bash
marketModels
```

## Lưu ý về ảnh

Hiện tại source code đang dùng ảnh từ URL bên ngoài.

Để website ổn định hơn khi vận hành thật, nên tải ảnh về thư mục:

```bash
public/images/
```

Sau đó thay URL ảnh trong `data/site.ts` thành đường dẫn local, ví dụ:

```ts
image: '/images/before-all/bf150i.jpg'
```

## Lưu ý về form liên hệ

Form hiện là giao diện tĩnh.

Nếu muốn nhận dữ liệu khách hàng thật, bạn có thể nối tiếp với một trong các cách sau:

- Formspree
- Google Sheets qua Apps Script
- Resend / SMTP email
- CRM nội bộ

## Domain riêng

Sau khi deploy thành công, vào phần **Project Settings > Domains** trên Vercel để gắn domain riêng.
