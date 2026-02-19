import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Galerie from "@/components/Galerie";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/lib/stitch";

export default async function Home() {
  const images = await getGalleryImages();

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Galerie images={images} />
      <Contact />
      <Footer />
    </main>
  );
}
