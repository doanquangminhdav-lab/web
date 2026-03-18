export function VehicleImage({
  src,
  alt,
  className = 'h-56',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[28px] bg-gradient-to-br from-amber-50 via-white to-slate-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain p-4"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/800x500/f8fafc/0f172a?text=Hinh+anh+mau+xe';
        }}
      />
    </div>
  );
}
