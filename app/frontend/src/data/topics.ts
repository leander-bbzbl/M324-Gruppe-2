export interface Topic {
  id: string
  name: string
  description: string
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
    id: 'berserk',
    name: 'Berserk',
    description:
      'Der Dark-Fantasy-Manga von Kentaro Miura rund um Guts und Griffith. Hast du ihn wirklich gelesen?',
  },
  {
    id: 'photography',
    name: 'Photography',
    description:
      'Blende, Belichtungszeit und ISO. Kennst du dich mit Kameras aus oder hast du nur einen Filter drauf?',
  },
]
