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
