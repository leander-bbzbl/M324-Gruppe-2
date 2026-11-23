import { useState } from 'react';
import type { Question } from '../data/questions';

interface QuestionPageProps {
  question: Question;
  topicName: string;
  onBack: () => void;
}

function QuestionPage({ question, topicName, onBack }: QuestionPageProps) {
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

  return (
    <main>
      <h1>Larpometer</h1>
      <p>Beispiel-Frage zum Thema {topicName}</p>
      <section className="question" aria-label="Frage">
        <h2>{question.text}</h2>
        <div className="answer-list" role="group" aria-label="Antworten">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              type="button"
              className={
                answer.id === selectedAnswerId ? 'answer selected' : 'answer'
              }
              aria-pressed={answer.id === selectedAnswerId}
              onClick={() => setSelectedAnswerId(answer.id)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </section>
      {selectedAnswerId !== null && (
        <p className="answer-status" role="status">
          Antwort gewählt.
        </p>
      )}
      <button type="button" className="text-button" onClick={onBack}>
        Zur Startseite
      </button>
    </main>
  );
}

export default QuestionPage;
