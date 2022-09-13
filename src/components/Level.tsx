// I suppose there is a better way to do
// this, by declaring once and exporting instead of
// redeclaring.. will look into that

import { Subject } from "./Subject";
import styles from "./Level.module.css";

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

interface LevelProps {
  id: number;
  levelName: string;
  subjects: Subject[];
}

export function Level({ subjects, levelName, id }: LevelProps) {
  return (
    <div className={styles.level}>
      <h2>
        <strong>{id}</strong>
        {levelName}
      </h2>

      {subjects.map((subject) => (
        <div>
          <Subject
            key={subject.id}
            id={subject.id}
            subjectName={subject.subjectName}
            topics={subject.topics}
            dependencies={subject.dependencies}
          />
        </div>
      ))}
    </div>
  );
}
