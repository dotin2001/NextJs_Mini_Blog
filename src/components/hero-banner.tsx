export function HeroBanner({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative left-1/2 right-1/2 -mt-5 w-screen -translate-x-1/2 bg-gradient-to-r from-[#4a3df0] to-[#b613ff] text-white sm:-mt-6">
      <div className="mx-auto flex min-h-[132px] w-full max-w-[1120px] items-center px-4 py-8 sm:px-6">
        <div className="max-w-[440px]">
          <h1 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.03em]">{title}</h1>
          <p className="mt-3 max-w-[420px] text-[11px] leading-5 text-white/88">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
