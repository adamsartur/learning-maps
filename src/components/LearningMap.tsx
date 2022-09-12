import { Level } from "./Level";

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

export function LearningMap({ levels }: LearningMapProps) {
  return (
    <>
      <h1>LearningMap</h1>

      {levels.map((level) => (
        <div>
          <h2>{level.levelName}</h2>
          <Level
            key={level.id}
            id={level.id}
            levelName={level.levelName}
            subjects={level.subjects}
          />
        </div>
      ))}

      {/* {levels.map((level) => {
        return (
          <Level
            key={level.id}
            id={level.id}
            name={level.name}
            subjects={level.subjects}
          />
        );
      })} */}
    </>
  );
}
