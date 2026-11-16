import { useState } from 'react'
import './App.css'
import TopicCard from './components/TopicCard'
import { topics } from './data/topics'

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)

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
    </main>
  )
}

export default App
