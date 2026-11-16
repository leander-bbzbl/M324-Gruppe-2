export interface Topic {
  id: string;
  name: string;
  description: string;
}

export const topics: Topic[] = [
  {
    id: 'gym',
    name: 'Gym',
    description:
      'Trainingspläne, Supplements und Fitness-Mythen. Weisst du wirklich, wovon du im Gym sprichst?',
  },
  {
    id: 'hypixel',
    name: 'Hypixel',
    description:
      'Der bekannteste Minecraft-Server mit Bedwars, Skyblock und Co. Bist du ein echter Spieler oder nur ein Mitläufer?',
  },
  {
    id: 'detective-conan',
    name: 'Detektiv Conan',
    description:
      'Ein Anime über einen Detektiv, der in einen Kinderkörper geschrumpft wurde. Weisst du genug über die Serie?',
  },
  {
    id: 'photography',
    name: 'Photography',
    description:
      'Blende, Belichtungszeit und ISO. Kennst du dich mit Kameras aus oder hast du nur einen Filter drauf?',
  },
];
