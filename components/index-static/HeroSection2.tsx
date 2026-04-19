export default function HeroSection2() {
  return (
    <section
      id="hero-2"
      className="
        relative min-h-[500px] lg:min-h-[600px]
        overflow-hidden flex items-center
        bg-wise-white
      "
      aria-label="Hero section with background image and call to action"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-wise-surface">
        <div
          className="
            absolute inset-0
            bg-[url('/runner.png')]
            bg-[50%_100%] bg-cover
            scale-x-[-1]
            opacity-20
          "
        ></div>
      </div>

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-wise-green/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
