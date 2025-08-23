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
        fixed top-0 w-full h-20 z-50 flex items-center justify-between
        bg-background px-8 shadow-md
      "
      role="banner"
    >
      <a
        href="/"
        className="font-extrabold text-4xl text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
        tabIndex={0}
      >
        FitWear
      </a>

      <div className="flex-1 mx-12">
        <div className="flex gap-3 text-foreground md-only">
          {navItems.map((item, key) => (
            <Link key={key} className="hover:text-primary" href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <SearchBar isAdmin={false} />

      <div className="ml-6">
        <Link
          href="/sign-in"
          className="
              border-2 border-primary px-4 py-1 rounded-md text-primary
              font-semibold hover:bg-primary hover:text-white transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary
            "
          aria-label="Log out"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}
