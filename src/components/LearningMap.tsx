import { Level } from "./Level";
import styles from "./LearningMap.module.css";
interface Topic {
  id: number;
  topicName: string;
  link: string;
  requirement: string;
}

interface Subject {
  id: number;
  subjectName: string;
  dependencies: number[];
  topics: Topic[];
}

interface Level {
  id: number;
  levelName: string;
  subjects: Subject[];
}

interface LearningMapProps {
  id: number;
  learningName: string;
  levels: Level[];
}

export function LearningMap({ levels, learningName }: LearningMapProps) {
  return (
    <div className={styles.learningMap}>
      <h1>{learningName}</h1>

      {levels.map((level) => (
        <Level
          key={level.id}
          id={level.id}
          levelName={level.levelName}
          subjects={level.subjects}
        />
      ))}
    </div>
  );
}
