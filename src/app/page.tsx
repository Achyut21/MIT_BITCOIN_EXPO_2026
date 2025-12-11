import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ArticleCard } from "@/components/sections/article-card";
import { Countdown } from "@/components/sections/countdown";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ArticleCard />
      <Countdown />
      <Footer />
    </main>
  );
}
