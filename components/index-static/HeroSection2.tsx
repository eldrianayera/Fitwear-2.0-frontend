export default function HeroSection2() {
  return (
    <section
      id="hero-2"
      className="
        relative min-h-[500px] lg:min-h-[600px]
        overflow-hidden flex items-center
        bg-wise-surface
      "
      aria-label="Hero section with call to action"
      style={{
        backgroundImage: `
          linear-gradient(135deg, transparent 48%, rgba(159, 232, 112, 0.15) 48%, rgba(159, 232, 112, 0.15) 52%, transparent 52%),
          linear-gradient(135deg, transparent 48%, rgba(159, 232, 112, 0.08) 48%, rgba(159, 232, 112, 0.08) 52%, transparent 52%)
        `,
        backgroundSize: '80px 80px, 120px 120px',
        backgroundPosition: '0 0, 40px 40px',
      }}
    >
      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 xl:px-20 py-16 lg:py-24 w-full">
        <div className="max-w-2xl">
          <h2
            className="
              wise-display-section text-wise-black
              max-sm:text-[3rem] sm:text-[4rem]
              leading-[0.85] mb-6
            "
          >
            Train <span className="text-wise-green">Strong.</span>
          </h2>

          <p className="wise-body text-wise-warm-dark max-w-lg mb-8">
            Unlock your full potential with apparel built for performance and
            style. Stay light, stay powerful, and own every moment.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-wise-green"></div>
              <span className="wise-body-semibold text-wise-black">
                Performance
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-wise-green"></div>
              <span className="wise-body-semibold text-wise-black">Comfort</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-wise-green"></div>
              <span className="wise-body-semibold text-wise-black">Style</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative green accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wise-green/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-wise-green/5 rounded-full blur-2xl pointer-events-none"></div>
    </section>
  );
}
