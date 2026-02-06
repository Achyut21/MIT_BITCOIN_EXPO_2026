import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ArticleCard } from "@/components/sections/article-card";
import { Countdown } from "@/components/sections/countdown";
import { JsonLd } from "@/components/seo/json-ld";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "MIT Bitcoin Expo 2026",
  description:
    "The premier Bitcoin conference and hackathon in Boston. Featuring talks, workshops, and a 36-hour Bitcoin hackathon with prizes. Theme: Freedom for All.",
  startDate: "2026-04-11T09:00:00-04:00",
  endDate: "2026-04-12T18:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "MIT Campus",
    address: {
      "@type": "PostalAddress",
      streetAddress: "77 Massachusetts Ave",
      addressLocality: "Cambridge",
      addressRegion: "MA",
      postalCode: "02139",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "MIT Bitcoin Club",
    url: "https://mitbitcoinexpo.org",
  },
  image: "https://mitbitcoinexpo.org/og-image.png",
  url: "https://mitbitcoinexpo.org",
  keywords:
    "Bitcoin, hackathon, Boston hackathon, Bitcoin hackathon, blockchain, cryptocurrency, MIT, conference",
  subEvent: {
    "@type": "Hackathon",
    name: "MIT Bitcoin Expo 2026 Hackathon",
    description:
      "A 36-hour Bitcoin hackathon at MIT. Build innovative projects in Bitcoin, blockchain, and cryptocurrency. Open to developers, designers, and builders.",
    startDate: "2026-04-10T18:00:00-04:00",
    endDate: "2026-04-12T12:00:00-04:00",
    url: "https://mitbitcoinexpo.org/hackathon",
    location: {
      "@type": "Place",
      name: "MIT Campus",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cambridge",
        addressRegion: "MA",
        addressCountry: "US",
      },
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MIT Bitcoin Club",
  url: "https://mitbitcoinexpo.org",
  logo: "https://mitbitcoinexpo.org/greenLogo.webp",
  sameAs: [
    "https://x.com/MITBitcoinClub",
    "https://www.linkedin.com/company/mitbitcoinclub/",
    "https://www.youtube.com/@MITBitcoinClub",
  ],
};

export default function Home() {
  return (
    <main className="relative">
      <JsonLd data={eventJsonLd} />
      <JsonLd data={orgJsonLd} />
      <Navbar />
      <Hero />
      <ArticleCard />
      <Countdown />
      <Footer />
    </main>
  );
}
