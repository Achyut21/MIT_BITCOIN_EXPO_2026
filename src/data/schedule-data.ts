export type SessionType =
  | "keynote"
  | "talk"
  | "panel"
  | "break"
  | "logistics"
  | "award"
  | "workshop";

export interface Session {
  id?: number;
  start: string;
  end: string;
  type: SessionType;
  title: string;
  presenters?: string;
  moderator?: string;
  additionalProgramming?: boolean;
}

export interface ScheduleDay {
  date: string;
  label: string;
  value: string;
  sessions: Session[];
}

export const schedule: ScheduleDay[] = [
  {
    date: "2026-04-11",
    label: "Saturday, April 11",
    value: "saturday",
    sessions: [
      { start: "8:00 AM", end: "9:30 AM", type: "logistics", title: "Registration and Breakfast" },
      {
        start: "9:30 AM",
        end: "9:40 AM",
        type: "logistics",
        title: "Welcome by MIT Bitcoin Expo Director",
      },
      {
        id: 1,
        start: "9:40 AM",
        end: "10:10 AM",
        type: "keynote",
        title: "Bitcoin and the Right to Financial Existence",
        presenters: "Roya Mahboob",
        moderator: "Arsh Molu",
      },
      {
        id: 2,
        start: "10:10 AM",
        end: "10:40 AM",
        type: "talk",
        title: "Accelerating IBD with SwiftSync",
        presenters: "Rob Netzke",
      },
      {
        id: 3,
        start: "10:40 AM",
        end: "11:10 AM",
        type: "talk",
        title: "Bitchat and Cashu",
        presenters: "Calle",
      },
      { start: "11:10 AM", end: "11:20 AM", type: "break", title: "Break" },
      {
        id: 4,
        start: "11:20 AM",
        end: "11:50 AM",
        type: "talk",
        title: "Defending Bitcoin from Quantum Attacks with Algorithm Agility",
        presenters: "Ethan Heilman",
      },
      {
        id: 5,
        start: "11:50 AM",
        end: "12:30 PM",
        type: "panel",
        title: "Inside Bitcoin Core: Building and Maintaining the Network",
        presenters: "Antoine Poinsot, Furszy, Ava Chow, Cory Fields",
        moderator: "Stacey Waleyko",
      },
      {
        id: 6,
        start: "12:30 PM",
        end: "1:00 PM",
        type: "talk",
        title: "Transaction Introspection without Consensus Changes",
        presenters: "Robin Linus",
      },
      { start: "1:00 PM", end: "2:00 PM", type: "break", title: "Lunch Break" },
      {
        id: 7,
        start: "2:00 PM",
        end: "2:30 PM",
        type: "keynote",
        title: "Fireside Chat with Hester Peirce",
        presenters: "Hester Peirce",
        moderator: "Namnueng",
      },
      {
        id: 8,
        start: "2:30 PM",
        end: "3:00 PM",
        type: "talk",
        title: "More Efficient Garbled Circuits for Better BitVM Bridges",
        presenters: "Liam Eagan",
      },
      {
        id: 9,
        start: "3:00 PM",
        end: "3:40 PM",
        type: "panel",
        title: "Bitcoin Beyond the Base Layer: The Rise of L2s",
        presenters: "Jeremy Rubin, Ekrem BAL, Andrew Camilleri, David Seroy",
      },
      { start: "3:40 PM", end: "3:50 PM", type: "break", title: "Break" },
      {
        id: 10,
        start: "3:50 PM",
        end: "4:30 PM",
        type: "keynote",
        title: "Scaling Institutional Stablecoin Adoption",
        presenters: "Kash Razzaghi",
        moderator: "Bob Bench",
      },
      {
        id: 11,
        start: "4:30 PM",
        end: "5:00 PM",
        type: "talk",
        title: "Free IBD with Proofless Utreexo",
        presenters: "Tadge Dryja",
      },
      {
        id: 12,
        start: "5:00 PM",
        end: "5:40 PM",
        type: "panel",
        title: "Crypto Infrastructure: Scaling the Stack",
        presenters: "Austin Federa, Muriel Médard",
        moderator: "Achyut Katiyar",
      },
      { start: "5:40 PM", end: "5:45 PM", type: "logistics", title: "Closing Remarks" },
    ],
  },
  {
    date: "2026-04-12",
    label: "Sunday, April 12",
    value: "sunday",
    sessions: [
      { start: "8:30 AM", end: "10:00 AM", type: "logistics", title: "Registration and Breakfast" },
      { start: "10:00 AM", end: "10:10 AM", type: "logistics", title: "Welcome" },
      {
        id: 13,
        start: "10:10 AM",
        end: "10:40 AM",
        type: "talk",
        title: "The Plumbing of Privacy: How Cryptographic Components Build Toward Safer Bridges",
        presenters: "Aaron Feickert",
      },
      {
        id: 14,
        start: "10:40 AM",
        end: "11:10 AM",
        type: "talk",
        title: "Bitcoin PIPEs V2: Covenants and ZKPs on the Bitcoin L1 via Witness Encryption",
        presenters: "Misha Komarov",
      },
      { start: "11:10 AM", end: "11:15 AM", type: "break", title: "Break" },
      {
        id: 15,
        start: "11:15 AM",
        end: "11:45 AM",
        type: "talk",
        title: "Inside the Sequencer: Trust, Control, and Decentralization",
        presenters: "Jeremy Rubin",
      },
      {
        id: 16,
        start: "11:45 AM",
        end: "12:25 PM",
        type: "panel",
        title: "Post Quantum Cryptography and the Threat to Bitcoin",
        presenters: "Ethan Heilman, Alex Pruden, Mikhail Shalaginov",
        moderator: "Clara Shikhelman",
      },
      { start: "12:25 PM", end: "1:25 PM", type: "break", title: "Lunch Break" },
      {
        id: 17,
        start: "1:25 PM",
        end: "1:55 PM",
        type: "keynote",
        title: "Keynote",
        presenters: "Neha Narula",
      },
      {
        id: 18,
        start: "1:55 PM",
        end: "2:25 PM",
        type: "talk",
        title: "Agentic Commerce",
        presenters: "Kevin Cai",
      },
      {
        id: 19,
        start: "2:25 PM",
        end: "3:05 PM",
        type: "panel",
        title: "The State of Crypto VC",
        presenters: "Boris Revsin, Mario Mena, Haley Huang",
        moderator: "Cameron",
      },
      { start: "3:05 PM", end: "3:15 PM", type: "break", title: "Break" },
      {
        id: 20,
        start: "3:15 PM",
        end: "3:45 PM",
        type: "talk",
        title: "Nested Signatures on Bitcoin: From MuSig2 to Iceberg",
        presenters: "Nadav Kohen",
      },
      {
        id: 21,
        start: "3:45 PM",
        end: "4:05 PM",
        type: "talk",
        title: "Why Advocating for Bitcoin and Freedom Tech Matters",
        presenters: "Frank Corva",
      },
      {
        id: 22,
        start: "4:05 PM",
        end: "4:55 PM",
        type: "talk",
        title: "Hackathon Presentations",
        moderator: "Frank and Achyut",
      },
      { start: "4:55 PM", end: "5:05 PM", type: "award", title: "Henoch Argaw Memorial Award" },
      { start: "5:05 PM", end: "5:15 PM", type: "logistics", title: "Closing Remarks" },
    ],
  },
];
