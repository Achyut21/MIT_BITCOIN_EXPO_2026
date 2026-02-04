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
  adam: "https://www.mitbtcexpo.org/assets/img/team/Adam.jpeg",
  ben: "https://www.mitbtcexpo.org/assets/img/team/Ben.jpeg",
  cameron: "https://www.mitbtcexpo.org/assets/img/team/Cameron.jpeg",
  hash: "https://www.mitbtcexpo.org/assets/img/team/Hash.jpeg",
  thomaz: "https://www.mitbtcexpo.org/assets/img/team/Luiz.jpeg",
  achyut: "/team/achyut-katiyar.webp",
  arul: "/team/Arul.webp",
  yi: "/team/yi.webp",
  rojina: "/team/rojina.webp",
  carys: "/team/Carys.webp",
};

// Linked list of team categories and their members
const LinkedInLink = {
  achyut: "https://www.linkedin.com/in/achyutkatiyar2103/",
  arul: "https://linkedin.com/in/arulagarwal",
  yi: "https://www.linkedin.com/in/yiliu-mit/",
  rojina: "https://www.linkedin.com/in/rojina-adhikari-1464b5282/",
  carys: "https://www.linkedin.com/in/carys-chan-8a2588298/",
};

export const teamCategories: TeamCategory[] = [
  {
    name: "Board",
    members: [
      {
        name: "Namnueng Protpagorn",
        team: "Board",
        role: "Co-Director",
        image: "",
        linkedin: "#",
      },
      {
        name: "Nicole Yifan Wu",
        team: "Board",
        role: "Co-Director",
        image: "",
        linkedin: "#",
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
        linkedin: "#",
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
        role: "Co-Chair",
        image: TEAM_IMAGES.adam,
        linkedin: "#",
      },
      {
        name: "Hash",
        team: "Content",
        role: "Volunteer",
        image: TEAM_IMAGES.hash,
        linkedin: "#",
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
        name: "Kevin",
        team: "Hackathon",
        role: "Co-Chair",
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
        role: "Volunteer",
        image: "",
        linkedin: "#",
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
        name: "Achyut Katiyar",
        team: "Marketing",
        role: "Co-Chair",
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
        name: "Kevin",
        team: "Sponsorship",
        role: "Co-Chair",
        image: "",
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
