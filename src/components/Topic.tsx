interface TopicProps {
  id: number;
  topicName: string;
  link: string;
  requirement: string;
}
export function Topic(props: TopicProps) {
  return <h1>Topic</h1>;
}
