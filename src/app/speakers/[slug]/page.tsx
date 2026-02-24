import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getSpeakerBySlug,
  getAllSpeakerSlugs,
  generateSlug,
} from "@/lib/speakers-constants";
import { JsonLd } from "@/components/seo/json-ld";
import { SpeakerDetail } from "./speaker-detail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSpeakerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) return {};

  const description = speaker.bio
    ? speaker.bio.slice(0, 160)
    : `${speaker.name} — ${speaker.title} at MIT Bitcoin Expo 2026`;

  return {
    title: `${speaker.name} — MIT Bitcoin Expo 2026`,
    description,
    openGraph: {
      title: `${speaker.name} — ${speaker.title}`,
      description,
      images: speaker.image.startsWith("/")
        ? [`https://mitbitcoinexpo.org${speaker.image}`]
        : [speaker.image],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${speaker.name} — MIT Bitcoin Expo 2026`,
      description,
    },
  };
}

export default async function SpeakerPage({ params }: Props) {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);
  if (!speaker) notFound();

  const baseUrl = "https://mitbitcoinexpo.org";
  const speakerImage = speaker.image.startsWith("/")
    ? `${baseUrl}${speaker.image}`
    : speaker.image;

  const personLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: speaker.name,
    jobTitle: speaker.title,
    image: speakerImage,
    url: `${baseUrl}/speakers/${generateSlug(speaker.name)}`,
    ...(speaker.bio && { description: speaker.bio }),
    ...(speaker.socials?.x && { sameAs: [speaker.socials.x, speaker.socials.linkedin].filter(Boolean) }),
  };

  return (
    <>
      <JsonLd data={personLd} />
      <SpeakerDetail speaker={speaker} />
    </>
  );
}
