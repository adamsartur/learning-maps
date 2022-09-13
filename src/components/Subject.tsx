import { Topic } from "./Topic";
import styles from "./Subject.module.css";
interface Topic {
  id: number;
  topicName: string;
  link: string;
  requirement: string;
}

interface SubjectProps {
  id: number;
  subjectName: string;
  dependencies: number[];
  topics: Topic[];
}

export function Subject({ topics, id, subjectName }: SubjectProps) {
  return (
    <>
      <div className={styles.subjectCard}>
        <h3>{subjectName}</h3>
      </div>

      <div className={styles.subjectList}>
        {topics.map((topic) => (
          <Topic
            key={topic.id}
            id={topic.id}
            topicName={topic.topicName}
            link={topic.link}
            requirement={topic.requirement}
          />
        ))}
      </div>
    </>
  );
}
