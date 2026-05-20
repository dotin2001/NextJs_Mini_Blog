export function HeroBanner({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="mx-auto w-full max-w-[720px] bg-gradient-to-r from-[#5b46ea] to-[#be1eff] px-5 py-6 text-white sm:px-7">
      <h1 className="text-[24px] font-semibold leading-none">{title}</h1>
      <p className="mt-2 max-w-lg text-[11px] leading-5 text-white/80">{subtitle}</p>
    </section>
  );
}
