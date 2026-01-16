export type Speaker = {
  name: string;
  title: string;
  image: string;
};

// 2026 Speakers - To be announced
export const currentSpeakers: Speaker[] = [];

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
    image: "https://www.mitbtcexpo.org/assets/img/speakers/AnnaChe.jpeg",
  },
  {
    name: "Antoine Poinsot",
    title: "Engineer, Chaincode Labs",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/antoine.jpg",
  },
  {
    name: "Arsh Molu",
    title: "Operations Lead, Human Rights Foundation",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Arshmolu.jpeg",
  },
  {
    name: "Bradley Rettler",
    title: "Director, Bitcoin Research Institute, University of Wyoming",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Bradly.png",
  },
  {
    name: "Brian Abely",
    title: "Investment Strategist, Fidelity Digital Asset Management",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Brian.jpeg",
  },
  {
    name: "Cory Fields",
    title: "Bitcoin Core Developer - MIT DCI",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/CoryFields.jpg",
  },
  {
    name: "Dylan LeClair",
    title: "Director of Bitcoin Strategy at Metaplanet",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Dylan.jpg",
  },
  {
    name: "Eric Semler",
    title: "Chairman, Semler Scientific",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/EricSemler.png",
  },
  {
    name: "Ethan Heilman",
    title: "Research Fellow MIT DCI",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/EthanHeilman.jpeg",
  },
  {
    name: "Evan Mawarire",
    title: "Human Rights and Freedom Activist",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Evan.jpeg",
  },
  {
    name: "Farida Nabourema",
    title: "Convener, Africa Bitcoin Conference",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Farida.jpeg",
  },
  {
    name: "Femi Longe",
    title: "Global Bitcoin Development Lead, Human Rights Foundation",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/FemiLonge.jpeg",
  },
  {
    name: "Frank Corva",
    title: "Political Correspondent at Bitcoin Magazine",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/FrankCorva.jpeg",
  },
  {
    name: "Gloria Zhao",
    title: "Bitcoin Core Developer",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Gloria.jpeg",
  },
  {
    name: "Hunter Beast",
    title: "Protocol Engineer for Anduro, Project Lead at Surmount Systems",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/HunterBeast.png",
  },
  {
    name: "Jameson Lopp",
    title: "Chief Security Officer at Casa",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/JamesonLopp.jpeg",
  },
  {
    name: "Janusz",
    title: "Lead Maintainer @ Bitcoin Layers",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/janusz.jpeg",
  },
  {
    name: "Jeff Walton",
    title: "MSTR True North Founder",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/JeffWalton.jpeg",
  },
  {
    name: "Jeremy Rubin",
    title: "Char Network",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/JeremyRubin.jpeg",
  },
  {
    name: "Jorge Jraissati",
    title: "President, Economic Inclusion Group",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Jorge.png",
  },
  {
    name: "Matt Odell",
    title: "Partner, Ten31, CoFounder, OpenSats",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Odell.jpeg",
  },
  {
    name: "Mauricio Di Bartolomeo",
    title: "Co-founder & CSO at Ledn",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Mauricio.jpeg",
  },
  {
    name: "Mikhail Komarov",
    title: "Co-Founder @[[alloc] init]",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/MikhailKomarov.png",
  },
  {
    name: "Neha Narula",
    title: "Director, Digital Currency Initiative, MIT Media Lab",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/NehaNarula.jpg",
  },
  {
    name: "Nico Lechuga",
    title: "Founding Partner, Ego Death Capital",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Nico.jpeg",
  },
  {
    name: "Paul Giordano",
    title: "VP of Digital Asset Management, MARA",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/PaulGiordano.jpeg",
  },
  {
    name: "Phong Le",
    title: "President and CEO, Strategy",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Phong.jpeg",
  },
  {
    name: "Ren Crypto Fish",
    title: "Partner, Electric Capital",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/ren.jpeg",
  },
  {
    name: "Robin Linus",
    title: "PhD Student at Stanford",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/RobinLinus.jpeg",
  },
  {
    name: "Roger Dingledine",
    title: "Co-founder, The Tor Project",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/RogerDingledine.jpg",
  },
  {
    name: "Roger Huang",
    title: "Author, Would Mao Hold Bitcoin",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/RogerHuang.jpg",
  },
  {
    name: "Satsie",
    title: "The Bitcoin Dev Project",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Satsie.jpeg",
  },
  {
    name: "Sjors Provoost",
    title: "Bitcoin Core Developer",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Sjors.jpg",
  },
  {
    name: "Steven Roose",
    title: "CEO @ Second",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/StevenRoose.jpeg",
  },
  {
    name: "Tadge Dryja",
    title: "Bitcoin Programmer",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Tadge.jpeg",
  },
  {
    name: "Timothy Massad",
    title: "Director, Digital Assets Policy Project, Harvard Kennedy School",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/TimothyMassad.jpeg",
  },
  {
    name: "Vitor Pamplona",
    title: "Creator of Amethyst",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Vitor.jpg",
  },
  {
    name: "Weikeng Chen",
    title: "Research Partner, L2 Iterative",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/weikeng.png",
  },
  {
    name: "William Casarin",
    title: "Damus Founder & CEO",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/WilliamCassarin.jpeg",
  },
];
