import About from "@/components/About";
import CardContainer from "@/components/cards/CardContainer";
import CategoryBar from "@/components/CategoryBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection1 from "@/components/HeroSection1";
import HeroSection2 from "@/components/HeroSection2";

export default function Home() {
  return (
    <div className="page">
      <HeroSection1 />
      <HeroSection2 />
      <About />
      <CategoryBar />
      <CardContainer />
      <Contact />
      <Footer />
    </div>
  );
}
