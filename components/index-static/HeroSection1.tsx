import Link from "next/link";

export default function HeroSection1() {
  return (
    <section
      id="hero"
      className="
        scroll-mt-30 min-h-[600px] lg:min-h-[700px]
        flex flex-col justify-center
        bg-wise-white px-6 lg:px-12 xl:px-20
        relative overflow-hidden
      "
      aria-label="Hero section with call to action"
    >
      {/* Background pattern - subtle green tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-wise-white via-[rgba(211,242,192,0.15)] to-wise-white pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h1
          className="
            wise-display-hero text-wise-black
            max-sm:text-[3.5rem] sm:text-[5rem] lg:text-[6rem]
            leading-[0.85]
            mb-8
          "
        >
          Gear Up. <br />
          Push Harder. <br />
          <span className="text-wise-green">Perform Better.</span>
        </h1>

        <p
          className="
            wise-body text-wise-warm-dark max-w-xl mb-10
            max-lg:hidden
          "
        >
          Elevate your game with high-performance activewear designed to move
          with you. Stay comfortable, look sharp, and conquer every workout.
        </p>

        <Link
          href="/#product"
          className="
            wise-button-primary inline-block
            focus:outline-none focus:ring-2 focus:ring-wise-green-dark focus:ring-offset-2
          "
          tabIndex={0}
        >
          Shop Now
        </Link>
      </div>

      {/* Decorative green accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-wise-green/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
