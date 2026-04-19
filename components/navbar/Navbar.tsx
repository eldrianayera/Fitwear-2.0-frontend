import Link from "next/link";
import SearchBar from "./SearchBar";

type NavItem = {
  name: string;
  href: string;
};

export default function NavBar() {
  const navItems: NavItem[] = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Product", href: "/#product" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-between
        bg-wise-white/95 backdrop-blur-sm px-6 lg:px-12
        border-b border-[rgba(14,15,12,0.08)]
      "
      role="banner"
    >
      {/* Logo */}
      <Link
        href="/"
        className="
          font-semibold text-2xl tracking-tight
          text-wise-black focus:outline-none focus:ring-2 focus:ring-wise-green rounded
          transition-transform duration-200 hover:scale-105
        "
        tabIndex={0}
        style={{ fontFamily: "Wise Sans, Inter, sans-serif", fontWeight: 900 }}
      >
        FitWear
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 mx-12">
        <div className="flex gap-2">
          {navItems.map((item, key) => (
            <Link
              key={key}
              className="
                px-4 py-2 rounded-full text-wise-black wise-body-semibold
                nav-link-hover transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-wise-green
              "
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <SearchBar isAdmin={false} />

        {/* Admin CTA */}
        <Link
          href="/sign-in"
          className="
            hidden sm:inline-flex
            wise-button-secondary
          "
          aria-label="Admin login"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}
