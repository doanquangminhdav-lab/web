export function ContactForm() {
  return (
    <form className="grid gap-4">
      <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Họ và tên" />
      <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Số điện thoại" />
      <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Mẫu xe bạn quan tâm" />
      <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Nội dung cần hỗ trợ" />
      <textarea className="min-h-[140px] rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0" placeholder="Ghi chú" />
      <button type="submit" className="rounded-2xl bg-amber-400 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-300">
        Gửi yêu cầu
      </button>
    </form>
  );
}
