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
        title: "Roya Mahboob — Freedom Activist",
        presenters: "Roya Mahboob",
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
        title: "Calle — Cashu & Bitchat Developer",
        presenters: "Calle",
      },
      { start: "11:10 AM", end: "11:20 AM", type: "break", title: "Break" },
      {
        id: 4,
        start: "11:20 AM",
        end: "11:50 AM",
        type: "talk",
        title: "Ethan Heilman — Bitcoin Security Researcher",
        presenters: "Ethan Heilman",
      },
      {
        id: 5,
        start: "11:50 AM",
        end: "12:30 PM",
        type: "panel",
        title: "Inside Bitcoin Core: Building and Maintaining the Network",
        presenters: "Antoine Poinsot, Furszy, Ava Chow, Cory Fields",
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
        presenters: "Liam Eagen",
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
        end: "4:20 PM",
        type: "talk",
        title: "Free IBD with Proofless Utreexo",
        presenters: "Tadge Dryja",
      },
      { id: 11, start: "4:20 PM", end: "4:50 PM", type: "talk", title: "TBA" },
      {
        id: 12,
        start: "4:50 PM",
        end: "5:30 PM",
        type: "panel",
        title: "Infrastructure Panel",
        presenters: "Austin Federa, Muriel Médard",
      },
      { start: "5:30 PM", end: "5:35 PM", type: "logistics", title: "Closing Remarks" },
      // Additional programming
      {
        start: "2:30 PM",
        end: "4:30 PM",
        type: "workshop",
        title: "DCI Global Workshop",
        additionalProgramming: true,
      },
    ],
  },
  {
    date: "2026-04-12",
    label: "Sunday, April 12",
    value: "sunday",
    sessions: [
      { start: "8:00 AM", end: "9:30 AM", type: "logistics", title: "Registration and Breakfast" },
      { start: "9:30 AM", end: "9:40 AM", type: "logistics", title: "Welcome" },
      { id: 13, start: "9:40 AM", end: "10:10 AM", type: "keynote", title: "TBA" },
      {
        id: 14,
        start: "10:10 AM",
        end: "10:40 AM",
        type: "talk",
        title: "Aaron Feickert — Privacy Researcher",
        presenters: "Aaron Feickert",
      },
      {
        id: 15,
        start: "10:40 AM",
        end: "11:10 AM",
        type: "talk",
        title: "Jeremy Rubin — Bitcoin Developer",
        presenters: "Jeremy Rubin",
      },
      { start: "11:10 AM", end: "11:20 AM", type: "break", title: "Break" },
      {
        id: 16,
        start: "11:20 AM",
        end: "12:00 PM",
        type: "panel",
        title: "Post Quantum Cryptography and the Threat to Bitcoin",
        presenters: "Ethan Heilman, Alex Pruden, Mikhail Shalaginov, Clara Shikhelman",
      },
      {
        id: 17,
        start: "12:00 PM",
        end: "12:30 PM",
        type: "talk",
        title: "Nadav Kohen — Bitcoin/DLC Developer",
        presenters: "Nadav Kohen",
      },
      { start: "12:30 PM", end: "1:30 PM", type: "break", title: "Lunch Break" },
      {
        id: 18,
        start: "1:30 PM",
        end: "2:00 PM",
        type: "keynote",
        title: "Neha Narula — MIT DCI Director",
        presenters: "Neha Narula",
      },
      { id: 19, start: "2:00 PM", end: "2:30 PM", type: "talk", title: "TBA" },
      {
        id: 20,
        start: "2:30 PM",
        end: "3:10 PM",
        type: "panel",
        title: "VC Panel",
        presenters: "Boris Revsin, Mario Mena, Haley Huang",
        moderator: "Cameron",
      },
      { start: "3:10 PM", end: "3:20 PM", type: "break", title: "Break" },
      {
        id: 21,
        start: "3:20 PM",
        end: "3:50 PM",
        type: "talk",
        title: "Bitcoin PIPEs V2: Covenants and ZKPs on the Bitcoin L1 via Witness Encryption",
        presenters: "Misha Komarov",
      },
      { id: 22, start: "3:50 PM", end: "4:30 PM", type: "panel", title: "TBA" },
      {
        id: 23,
        start: "4:30 PM",
        end: "4:50 PM",
        type: "talk",
        title: "Frank Corva — Bitcoin Journalist",
        presenters: "Frank Corva",
      },
      { start: "4:50 PM", end: "5:00 PM", type: "award", title: "Henoch Argaw Memorial Award" },
      { start: "5:00 PM", end: "5:10 PM", type: "logistics", title: "Closing Remarks" },
    ],
  },
];
