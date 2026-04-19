import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#product" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer
      className="
        bg-wise-black text-wise-white
        py-16 px-6 lg:px-12
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo and Tagline */}
        <div className="mb-12">
          <Link
            href="/"
            className="
              font-semibold text-3xl tracking-tight text-wise-green
              hover:text-wise-mint transition-colors duration-200
            "
            style={{ fontFamily: "Wise Sans, Inter, sans-serif", fontWeight: 900 }}
          >
            FitWear
          </Link>
          <p className="wise-caption text-wise-gray mt-3 max-w-md">
            Performance activewear designed for those who push their limits.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                wise-body-semibold text-wise-white
                hover:text-wise-green
                transition-colors duration-200
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.12)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="wise-caption text-wise-gray">
            &copy; {year} EldriTech. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="wise-caption text-wise-gray hover:text-wise-green transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="wise-caption text-wise-gray hover:text-wise-green transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
