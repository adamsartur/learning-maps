import styles from "./Topic.module.css";
interface TopicProps {
  id: number;
  topicName: string;
  link: string;
  requirement: string;
}
export function Topic({ topicName }: TopicProps) {
  return (
    <div className={styles.topic}>
      <div className={styles.topicCard}>
        <h4>{topicName}</h4>
      </div>
    </div>
  );
}
