import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-wise-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="order-2 lg:order-1">
          <div className="wise-card p-3">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-wise-surface">
              <Image
                src="/about.png"
                alt="About Us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="order-1 lg:order-2">
          <h2
            className="
              wise-display-section text-wise-black
              max-sm:text-[3rem] sm:text-[4rem]
              leading-[0.85] mb-8
            "
          >
            About <span className="text-wise-green">FitWear</span>
          </h2>

          <p className="wise-body text-wise-warm-dark mb-6">
            At FitWear, we believe that great performance starts with the right
            apparel. Our mission is to design high‑quality, stylish, and
            functional activewear that empowers you to move freely and push your
            limits.
          </p>

          <p className="wise-body text-wise-warm-dark mb-10">
            From the gym to the streets, our gear blends comfort, durability,
            and trend‑forward designs — so you can look good and feel great,
            wherever your journey takes you.
          </p>

          <Link
            href="/#product"
            className="
              wise-button-primary inline-block
              focus:outline-none focus:ring-2 focus:ring-wise-green-dark focus:ring-offset-2
            "
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
