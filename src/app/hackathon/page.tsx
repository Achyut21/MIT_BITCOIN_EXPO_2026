import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TbaHero } from "@/components/sections/tba-hero";

export default function HackathonPage() {
  return (
    <main className="relative">
      <Navbar />
      <TbaHero title="HACKATHON" />
      <Footer />
    </main>
  );
}
