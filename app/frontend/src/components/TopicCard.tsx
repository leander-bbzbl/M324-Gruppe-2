import type { Topic } from '../data/topics';

interface TopicCardProps {
  topic: Topic;
  selected: boolean;
  onSelect: (id: string) => void;
}

function TopicCard({ topic, selected, onSelect }: TopicCardProps) {
  return (
    <button
      type="button"
      className={selected ? 'topic-card selected' : 'topic-card'}
      aria-pressed={selected}
      onClick={() => onSelect(topic.id)}
    >
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
    </button>
  );
}

export default TopicCard;
