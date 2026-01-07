import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TbaHero } from "@/components/sections/tba-hero";

export default function SpeakersPage() {
  return (
    <main className="relative">
      <Navbar />
      <TbaHero title="SPEAKERS" />
      <Footer />
    </main>
  );
}
