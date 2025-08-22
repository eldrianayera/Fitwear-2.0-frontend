import About from "@/components/index-static/About";
import Contact from "@/components/index-static/Contact";
import Footer from "@/components/index-static/Footer";
import HeroSection1 from "@/components/index-static/HeroSection1";
import HeroSection2 from "@/components/index-static/HeroSection2";
import ProductsGrid from "@/components/products-grid/ProductsGrid";

export default function Home() {
  return (
    <div className="page">
      <HeroSection1 />
      <HeroSection2 />
      <About />
      <ProductsGrid />
      <Contact />
      <Footer />
    </div>
  );
}
