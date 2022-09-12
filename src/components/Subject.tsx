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

export function Subject({ topics }: SubjectProps) {
  return (
    <>
      <h1>Subjecta</h1>
    </>
  );
}
