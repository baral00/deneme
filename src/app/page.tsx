import fs from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Galerie from "@/components/Galerie";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/lib/stitch";

// Helper to parse simple frontmatter
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(fileContent);
  if (!match) return {};

  const content = match[1];
  const data: Record<string, string> = {};
  content.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      data[key.trim()] = value.join(':').trim();
    }
  });
  return data;
}

export default async function Home() {
  const images = await getGalleryImages();

  // Read content from git CMS source
  const filePath = path.join(process.cwd(), 'content/pages/index.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const pageData = parseFrontmatter(fileContent);

  return (
    <main className="min-h-screen bg-cream" data-sb-object-id="content/pages/index.md">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Galerie images={images} />
      <Contact />
      <Footer />
    </main>
  );
}
