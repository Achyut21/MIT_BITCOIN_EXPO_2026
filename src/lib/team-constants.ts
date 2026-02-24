export type TeamMember = {
  name: string;
  team: string;
  role: string;
  image: string;
  linkedin?: string;
};

export type TeamCategory = {
  name: string;
  members: TeamMember[];
};

// Real images from mitbtcexpo.org
const TEAM_IMAGES = {
  ben: "https://www.mitbtcexpo.org/assets/img/team/Ben.jpeg",
  thomaz: "https://www.mitbtcexpo.org/assets/img/team/Luiz.jpeg",
  achyut: "/team/achyut-katiyar.webp",
  arul: "/team/Arul.webp",
  yi: "/team/yi.webp",
  rojina: "/team/rojina.webp",
  carys: "/team/Carys.webp",
  michelle: "/team/michelle.webp",
  thomas: "/team/tom.webp",
  adam: "/team/adam.webp",
  hash: "/team/hash.webp",
  cameron: "/team/cam.webp",
  namnueng: "/team/namnueng.webp",
  nicole: "/team/nicole.webp"
};

// Linked list of team categories and their members
const LinkedInLink = {
  achyut: "https://www.linkedin.com/in/achyutkatiyar2103/",
  arul: "https://linkedin.com/in/arulagarwal",
  yi: "https://www.linkedin.com/in/yiliu-mit/",
  rojina: "https://www.linkedin.com/in/rojina-adhikari-1464b5282/",
  carys: "https://www.linkedin.com/in/carys-chan-8a2588298/",
  michelle: "https://www.linkedin.com/in/michelle-cao-4437a220a/",
  thomas: "https://www.linkedin.com/in/tomcpilla/",
  adam: "https://www.linkedin.com/in/agebner/",
  hash: "https://www.linkedin.com/in/h6239/",
  cameron: "https://www.linkedin.com/in/cameron-moini-207496232/",
  namnueng: "https://www.linkedin.com/in/namnueng/",
  nicole: "https://www.linkedin.com/in/nicole-wu-47b317109/"
};

export const teamCategories: TeamCategory[] = [
  {
    name: "Board",
    members: [
      {
        name: "Namnueng Protpagorn",
        team: "Board",
        role: "Co-Director",
        image: TEAM_IMAGES.namnueng,
        linkedin: LinkedInLink.namnueng,
      },
      {
        name: "Nicole Yifan Wu",
        team: "Board",
        role: "Co-Director",
        image: TEAM_IMAGES.nicole,
        linkedin: LinkedInLink.nicole,
      },
      {
        name: "Thomaz",
        team: "Board",
        role: "Co-Director",
        image: TEAM_IMAGES.thomaz,
        linkedin: "#",
      },
    ],
  },
  {
    name: "Content",
    members: [
      {
        name: "Cameron",
        team: "Content",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.cameron,
        linkedin: LinkedInLink.cameron,
      },
      {
        name: "Ishaana",
        team: "Content",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
      {
        name: "Adam",
        team: "Content",
        role: "Co-Chair | Associate at ego death",
        image: TEAM_IMAGES.adam,
        linkedin: LinkedInLink.adam,
      },
      {
        name: "Hash",
        team: "Content",
        role: "Advisor",
        image: TEAM_IMAGES.hash,
        linkedin: LinkedInLink.hash,
      },
      {
        name: "Manish",
        team: "Content",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
      {
        name: "Trey",
        team: "Content",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
    ],
  },
  {
    name: "Hackathon",
    members: [
      {
        name: "Frank",
        team: "Hackathon",
        role: "Co-Chair (Lead)",
        image: "",
        linkedin: "#",
      },
      {
        name: "Achyut Katiyar",
        team: "Hackathon",
        role: "Co-Chair",
        image: TEAM_IMAGES.achyut,
        linkedin: LinkedInLink.achyut,
      },
    ],
  },
  {
    name: "Logistics",
    members: [
      {
        name: "Yoyo",
        team: "Logistics",
        role: "Co-Chair (Lead)",
        image: "",
        linkedin: "#",
      },
      {
        name: "Rojina Adhikari",
        team: "Logistics",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.rojina,
        linkedin: LinkedInLink.rojina,
      },
      {
        name: "Michelle C",
        team: "Logistics",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.michelle,
        linkedin: LinkedInLink.michelle,
      },
    ],
  },
  {
    name: "Marketing",
    members: [
      {
        name: "Julie",
        team: "Marketing",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
      {
        name: "Yi Liu",
        team: "Marketing",
        role: "Co-Chair",
        image: TEAM_IMAGES.yi,
        linkedin: LinkedInLink.yi,
      },
      {
        name: "Carys Chan",
        team: "Marketing",
        role: "Co-Chair",
        image: TEAM_IMAGES.carys,
        linkedin: LinkedInLink.carys,
      },
      {
        name: "Thomas Pilla",
        team: "Marketing",
        role: "Co-Chair",
        image: TEAM_IMAGES.thomas,
        linkedin: LinkedInLink.thomas,
      },
      {
        name: "Achyut Katiyar",
        team: "Marketing",
        role: "Co-Chair (Creator of this Website)",
        image: TEAM_IMAGES.achyut,
        linkedin: "#",
      },
    ],
  },
  {
    name: "Sponsorship",
    members: [
      {
        name: "Ben",
        team: "Sponsorship",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.ben,
        linkedin: "#",
      },
      {
        name: "Alexandra",
        team: "Sponsorship",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
      {
        name: "Arul",
        team: "Sponsorship",
        role: "Co-Chair",
        image: TEAM_IMAGES.arul,
        linkedin: LinkedInLink.arul,
      },
    ],
  },
];

// Flat list of all team members
export const allTeamMembers: TeamMember[] = teamCategories.flatMap((category) => category.members);
