export interface Answer {
  id: string;
  text: string;
}

/**
 * Angaben einer Frage. Alle Themen verwenden dieses Format.
 * - id: eindeutige Kennung der Frage
 * - topicId: Thema, zu dem die Frage gehört
 * - text: Fragetext
 * - answers: Antwortmöglichkeiten
 * - correctAnswerId: id der richtigen Antwort
 */
export interface Question {
  id: string;
  topicId: string;
  text: string;
  answers: Answer[];
  correctAnswerId: string;
}

export const exampleQuestion: Question = {
  id: 'gym-example',
  topicId: 'gym',
  text: 'Was bedeutet PR im Gym?',
  answers: [
    {
      id: 'personal-record',
      text: 'Personal Record, die persönliche Bestleistung',
    },
    {
      id: 'protein-riegel',
      text: 'Protein-Riegel, die Pflichtmahlzeit nach dem Training',
    },
    {
      id: 'push-repeat',
      text: 'Push Repeat, jede Übung zweimal hintereinander',
    },
    { id: 'pre-run', text: 'Pre-Run, das Aufwärmen auf dem Laufband' },
  ],
  correctAnswerId: 'personal-record',
};

export const hypixelQuestions: Question[] = [
  {
    id: 'hypixel-1',
    topicId: 'hypixel',
    text: 'Was ist in Hypixel Bedwars die Hauptaufgabe, damit gegnerische Teams nicht mehr respawnen können?',
    answers: [
      { id: 'h1-a', text: 'Das Bett des gegnerischen Teams abbauen' },
      { id: 'h1-b', text: 'Im gegnerischen Bett schlafen' },
      { id: 'h1-c', text: 'Möglichst viele Betten platzieren' },
      { id: 'h1-d', text: 'Schnell ein Bett finden' },
    ],
    correctAnswerId: 'h1-a',
  },
  {
    id: 'hypixel-2',
    topicId: 'hypixel',
    text: 'Welche Ressource spawnt in Hypixel Bedwars typischerweise auf der eigenen Insel bzw. den Inseln direkt am Start?',
    answers: [
      { id: 'h2-a', text: 'Diamond' },
      { id: 'h2-b', text: 'Iron' },
      { id: 'h2-c', text: 'Emerald' },
      { id: 'h2-d', text: 'Netherite' },
    ],
    correctAnswerId: 'h2-b',
  },
  {
    id: 'hypixel-3',
    topicId: 'hypixel',
    text: 'Wofür ist „Bridging“ im Modus wie Bedwars oder Skywars besonders wichtig?',
    answers: [
      {
        id: 'h3-a',
        text: 'Um Blöcke schnell und sicher über Abgründe zu anderen Inseln zu bauen',
      },
      {
        id: 'h3-b',
        text: 'Um im Lobby Menü zwischen verschiedenen Spielmodi zu wechseln',
      },
      {
        id: 'h3-c',
        text: 'Um Minions in Hypixel Skyblock automatisch aufzuladen',
      },
      {
        id: 'h3-d',
        text: 'Um im Chat private Nachrichten an Freunde zu senden',
      },
    ],
    correctAnswerId: 'h3-a',
  },
  {
    id: 'hypixel-4',
    topicId: 'hypixel',
    text: 'Was sind „Minions“ in Hypixel Skyblock?',
    answers: [
      {
        id: 'h4-a',
        text: 'Boss Gegner in den Dungeons, die seltene Waffen droppen',
      },
      {
        id: 'h4-b',
        text: 'Helfer auf der eigenen Insel, die automatisch Ressourcen abbauen, farmen oder sammeln',
      },
      {
        id: 'h4-c',
        text: 'Kosmetische Begleiter (Pets), die nur in der Lobby herumlaufen',
      },
      {
        id: 'h4-d',
        text: 'NPCs am Spawn, die tägliche Quests vergeben',
      },
    ],
    correctAnswerId: 'h4-b',
  },
  {
    id: 'hypixel-5',
    topicId: 'hypixel',
    text: 'Wo handeln Spieler in Hypixel Skyblock direkt miteinander für Items und Coins?',
    answers: [
      { id: 'h5-a', text: 'Im Auction House und über den Bazaar' },
      { id: 'h5-b', text: 'Nur über den regulären Minecraft Dorfbewohner Handel' },
      { id: 'h5-c', text: 'Ausschliesslich in der Bedwars Lobby' },
      { id: 'h5-d', text: 'Im Nether Portal der Startinsel' },
    ],
    correctAnswerId: 'h5-a',
  },
  {
    id: 'hypixel-6',
    topicId: 'hypixel',
    text: 'Welches Item in Hypixel Bedwars wird häufig genutzt, um einen schnellen Vorsprung über eine Lücke zu gewinnen?',
    answers: [
      { id: 'h6-a', text: 'Fireball' },
      { id: 'h6-b', text: 'Angel' },
      { id: 'h6-c', text: 'Verzauberter Goldapfel' },
      { id: 'h6-d', text: 'Eimer mit Milch' },
    ],
    correctAnswerId: 'h6-a',
  },
  {
    id: 'hypixel-7',
    topicId: 'hypixel',
    text: 'Was ist das Ziel in einer klassischen Runde Hypixel Skywars?',
    answers: [
      {
        id: 'h7-a',
        text: 'Als letzter Spieler oder letztes Team auf den schwebenden Inseln zu überleben',
      },
      {
        id: 'h7-b',
        text: 'Innerhalb von 5 Minuten das höchste Skill Level in Farming zu erreichen',
      },
      {
        id: 'h7-c',
        text: 'Alle versteckten Köpfe in der Hauptlobby einzusammeln',
      },
      {
        id: 'h7-d',
        text: 'Einen eigenen Shop auf dem Server zu eröffnen',
      },
    ],
    correctAnswerId: 'h7-a',
  },
  {
    id: 'hypixel-8',
    topicId: 'hypixel',
    text: 'Wofür steht „CPS“ im PvP Kontext auf Hypixel?',
    answers: [
      { id: 'h8-a', text: 'Clicks Per Second (Klicks pro Sekunde)' },
      { id: 'h8-b', text: 'Coins Per Server (Bilder Pro Sekunde)' },
      { id: 'h8-c', text: 'Combat Ping Speed (Kampf Geschwindigkeit)' },
      { id: 'h8-d', text: 'Critical Potion Stack (Trank Stapel)' },
    ],
    correctAnswerId: 'h8-a',
  },
  {
    id: 'hypixel-9',
    topicId: 'hypixel',
    text: 'Welche Währung bzw. welcher Wert wird in Hypixel Skyblock vor allem für Käufe im Bazaar oder Auction House genutzt?',
    answers: [
      { id: 'h9-a', text: 'Coins' },
      { id: 'h9-b', text: 'Gems' },
      { id: 'h9-c', text: 'Karma' },
      { id: 'h9-d', text: 'Mystery Dust' },
    ],
    correctAnswerId: 'h9-a',
  },
  {
    id: 'hypixel-10',
    topicId: 'hypixel',
    text: 'Welcher dieser Spielmodi gehört zum bekannten Angebot von Hypixel?',
    answers: [
      { id: 'h10-a', text: 'Murder Mystery' },
      { id: 'h10-b', text: 'Counter Strike 2' },
      { id: 'h10-c', text: 'Apex Legends' },
      { id: 'h10-d', text: 'League of Legends' },
    ],
    correctAnswerId: 'h10-a',
  },
];
