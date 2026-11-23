import { useState } from 'react';
import './App.css';
import QuestionPage from './components/QuestionPage';
import TopicCard from './components/TopicCard';
import { exampleQuestion } from './data/questions';
import { topics } from './data/topics';

function App() {
  const [page, setPage] = useState<'start' | 'questions'>('start');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const exampleTopic = topics.find(
    (topic) => topic.id === exampleQuestion.topicId
  );

  if (page === 'questions') {
    return (
      <QuestionPage
        question={exampleQuestion}
        topicName={exampleTopic?.name ?? exampleQuestion.topicId}
        onBack={() => setPage('start')}
      />
    );
  }

  return (
    <main>
      <h1>Larpometer</h1>
      <p>Vier Themen. Zehn Fragen. Wie viel Larp steckt in dir?</p>
      <section className="topic-grid" aria-label="Themen">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            selected={topic.id === selectedTopicId}
            onSelect={setSelectedTopicId}
          />
        ))}
      </section>
      <button
        type="button"
        className="text-button"
        onClick={() => setPage('questions')}
      >
        Zur Fragen-Seite
      </button>
    </main>
  );
}

export default App;
