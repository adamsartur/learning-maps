// I suppose there is a better way to do
// this, by declaring once and exporting instead of
// redeclaring.. will look into that

import { Topic } from "./Topic";

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
    <>
      <h1>
        <strong>{id} - </strong>
        {levelName}
      </h1>

      {subjects.map((subject) => (
        <div>
          <h2>{subject.subjectName}</h2>
          <Topic
            key={subject.id}
            id={subject.id}
            subjectName={subject.subjectName}
            topics={subject.topics}
          />
        </div>
      ))}
    </>
  );
}
