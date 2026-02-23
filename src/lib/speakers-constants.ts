export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export type Speaker = {
  name: string;
  title: string;
  image: string;
  bio?: string;
  topics?: string[];
  availability?: string;
  socials?: {
    x?: string;
    linkedin?: string;
    other?: string;
  };
};

// 2026 Speakers - Announced
export const currentSpeakers: Speaker[] = [
  {
    name: "Austin Federa",
    title: "Co-Founder, DoubleZero",
    image: "/2026Speakers/Austin Federa.webp",
    bio: "Austin Federa is the Co-Founder of DoubleZero, a dedicated high-performance network for modern distributed systems, and President of the DoubleZero Foundation. Prior to co-founding DoubleZero in 2024, Austin served as Head of Strategy at the Solana Foundation, where he was responsible for setting the direction of the Foundation and working with projects and developers building across the Solana ecosystem. Previously, Austin worked on marketing and product at Bison Trails, and was Director of Marketing at Republic and Republic Crypto, a private investing platform.",
    topics: [
      "The Public Internet Wasn't Built for This",
      "Accelerating Blockchain By Optimizing Physical Infrastructure",
      "The Internet in Internet Capital Markets",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/Austin_Federa",
      linkedin: "https://www.linkedin.com/in/austin-federa",
    },
  },
  {
    name: "Robin Linus",
    title: "Stanford University | ZeroSync",
    image: "/2026Speakers/Robin Linus.webp",
    bio: "Creator of BitVM, PhD Student at Stanford.",
    topics: [
      "Latest developments in BitVM including garbled circuits and transaction introspection without softforks",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/robin_linus",
    },
  },
  {
    name: "Hester M. Peirce",
    title: "Commissioner, U.S. Securities and Exchange Commission",
    image: "/2026Speakers/Hester M. Peirce.webp",
    bio: "Hester M. Peirce was appointed by President Donald J. Trump to the U.S. Securities and Exchange Commission and was sworn in on January 11, 2018. Prior to joining the SEC, Commissioner Peirce conducted research on the regulation of financial markets at the Mercatus Center at George Mason University. She was a Senior Counsel on the U.S. Senate Committee on Banking, Housing, and Urban Affairs. Commissioner Peirce earned her bachelor's degree in Economics from Case Western Reserve University and her JD from Yale Law School.",
    topics: ["Crypto Task Force, US SEC"],
    availability: "Only April 11th (Saturday)",
  },
  {
    name: "Mikhail Shalaginov",
    title: "Quantum Machine Build Lead, QuEra Computing",
    image: "/2026Speakers/Mikhail Shalaginov.webp",
    bio: "Dr. Mikhail Shalaginov is a quantum scientist and entrepreneur. He earned his Ph.D. in Quantum Photonics from Purdue University and conducted postdoctoral research at MIT. At QuEra Computing, he leads a team developing product-level neutral-atom quantum machines. He also conceived Qubitcoin, a quantum proof-of-work concept embedding useful quantum tasks into mining, and currently serves as Technology Advisor at Superquantum Lab, advancing open-source quantum computing software.",
    topics: [
      "Advances in quantum computers",
      "Merging quantum computers and blockchains",
      "Quantum computing readiness to threaten existing security protocols",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/MYShalaginov",
      linkedin: "https://www.linkedin.com/in/mikhail-shalaginov/",
    },
  },
];

// Previous Year Speakers (MIT Bitcoin Expo 2025)
export const previousSpeakers: Speaker[] = [
  {
    name: "Adam Jonas",
    title: "CEO, Chaincode Labs",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Adam.png",
  },
  {
    name: "Anna Chekhovich",
    title: "Nonprofit Bitcoin Adoption Lead",
    image: "/2025Speakers/Anna Chekhovich.webp",
  },
  {
    name: "Antoine Poinsot",
    title: "Engineer, Chaincode Labs",
    image: "/2025Speakers/Antoine Poinsot.webp",
  },
  {
    name: "Arsh Molu",
    title: "Operations Lead, Human Rights Foundation",
    image: "/2025Speakers/Arsh Molu.webp",
  },
  {
    name: "Bradley Rettler",
    title: "Director, Bitcoin Research Institute, University of Wyoming",
    image: "/2025Speakers/Bradley Rettler.webp",
  },
  {
    name: "Brian Abely",
    title: "Investment Strategist, Fidelity Digital Asset Management",
    image: "/2025Speakers/Brian Abely.webp",
  },
  {
    name: "Cory Fields",
    title: "Bitcoin Core Developer - MIT DCI",
    image: "/2025Speakers/Cory Fields.webp",
  },
  {
    name: "Dylan LeClair",
    title: "Director of Bitcoin Strategy at Metaplanet",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Dylan.jpg",
  },
  {
    name: "Eric Semler",
    title: "Chairman, Semler Scientific",
    image: "/2025Speakers/Eric Semler.webp",
  },
  {
    name: "Ethan Heilman",
    title: "Research Fellow MIT DCI",
    image: "/2025Speakers/Ethan Heilman.webp",
  },
  {
    name: "Evan Mawarire",
    title: "Human Rights and Freedom Activist",
    image: "/2025Speakers/Evan Mawarire.webp",
  },
  {
    name: "Farida Nabourema",
    title: "Convener, Africa Bitcoin Conference",
    image: "/2025Speakers/Farida Nabourema.webp",
  },
  {
    name: "Femi Longe",
    title: "Global Bitcoin Development Lead, Human Rights Foundation",
    image: "/2025Speakers/Femi Longe.webp",
  },
  {
    name: "Frank Corva",
    title: "Political Correspondent at Bitcoin Magazine",
    image: "/2025Speakers/Frank Corva.webp",
  },
  {
    name: "Gloria Zhao",
    title: "Bitcoin Core Developer",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Gloria.jpeg",
  },
  {
    name: "Hunter Beast",
    title: "Protocol Engineer for Anduro, Project Lead at Surmount Systems",
    image: "/2025Speakers/Hunter Beast.webp",
  },
  {
    name: "Jameson Lopp",
    title: "Chief Security Officer at Casa",
    image: "/2025Speakers/Jameson Lopp.webp",
  },
  {
    name: "Janusz",
    title: "Lead Maintainer @ Bitcoin Layers",
    image: "/2025Speakers/janusz.webp",
  },
  {
    name: "Jeff Walton",
    title: "MSTR True North Founder",
    image: "/2025Speakers/Jeff Walton.webp",
  },
  {
    name: "Jeremy Rubin",
    title: "Char Network",
    image: "/2025Speakers/Jeremy Rubin.webp",
  },
  {
    name: "Jorge Jraissati",
    title: "President, Economic Inclusion Group",
    image: "/2025Speakers/Jorge Jraissati.webp",
  },
  {
    name: "Matt Odell",
    title: "Partner, Ten31, CoFounder, OpenSats",
    image: "/2025Speakers/Matt Odell.webp",
  },
  {
    name: "Mauricio Di Bartolomeo",
    title: "Co-founder & CSO at Ledn",
    image: "/2025Speakers/Mauricio Di Bartolomeo.webp",
  },
  {
    name: "Mikhail Komarov",
    title: "Co-Founder @[[alloc] init]",
    image: "/2025Speakers/Mikhail Komarov.webp",
  },
  {
    name: "Neha Narula",
    title: "Director, Digital Currency Initiative, MIT Media Lab",
    image: "/2025Speakers/Neha Narula.webp",
  },
  {
    name: "Nico Lechuga",
    title: "Founding Partner, Ego Death Capital",
    image: "/2025Speakers/Nico Lechuga.webp",
  },
  {
    name: "Paul Giordano",
    title: "VP of Digital Asset Management, MARA",
    image: "/2025Speakers/Paul Giordano.webp",
  },
  {
    name: "Phong Le",
    title: "President and CEO, Strategy",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Phong.jpeg",
  },
  {
    name: "Ren Crypto Fish",
    title: "Partner, Electric Capital",
    image: "/2025Speakers/Ren Crypto Fish.webp",
  },
  {
    name: "Robin Linus",
    title: "PhD Student at Stanford",
    image: "/2025Speakers/Robin Linus.webp",
  },
  {
    name: "Roger Dingledine",
    title: "Co-founder, The Tor Project",
    image: "/2025Speakers/Roger Dingledine.webp",
  },
  {
    name: "Roger Huang",
    title: "Author, Would Mao Hold Bitcoin",
    image: "/2025Speakers/Roger Huang.webp",
  },
  {
    name: "Satsie",
    title: "The Bitcoin Dev Project",
    image: "/2025Speakers/Satsie.webp",
  },
  {
    name: "Sjors Provoost",
    title: "Bitcoin Core Developer",
    image: "/2025Speakers/Sjors Provoost.webp",
  },
  {
    name: "Steven Roose",
    title: "CEO @ Second",
    image: "/2025Speakers/Steven Roose.webp",
  },
  {
    name: "Tadge Dryja",
    title: "Bitcoin Programmer",
    image: "/2025Speakers/Tadge Dryja.webp",
  },
  {
    name: "Timothy Massad",
    title: "Director, Digital Assets Policy Project, Harvard Kennedy School",
    image: "/2025Speakers/Timothy Massad.webp",
  },
  {
    name: "Vitor Pamplona",
    title: "Creator of Amethyst",
    image: "/2025Speakers/Vitor Pamplona.webp",
  },
  {
    name: "Weikeng Chen",
    title: "Research Partner, L2 Iterative",
    image: "/2025Speakers/Weikeng Chen.webp",
  },
  {
    name: "William Casarin",
    title: "Damus Founder & CEO",
    image: "/2025Speakers/William Casarin.webp",
  },
];

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return currentSpeakers.find((s) => generateSlug(s.name) === slug);
}

export function getAllSpeakerSlugs(): string[] {
  return currentSpeakers.map((s) => generateSlug(s.name));
}
