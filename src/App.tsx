import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { LearningMap } from "./components/LearningMap";

const learning = [
  {
    id: 1,
    learningName: "Frontend",
    levels: [
      {
        id: 1,
        levelName: "Basic Concepts",
        subjects: [
          {
            id: 1,
            subjectName: "Internet",
            dependencies: [0],
            topics: [
              {
                id: 1,
                topicName: "How does the internet Work",
                link: "",
                requirement: "required",
              },
              {
                id: 2,
                topicName: "What is HTTP",
                link: "",
                requirement: "required",
              },
              {
                id: 3,
                topicName: "History of the Internet",
                link: "",
                requirement: "optional",
              },
            ],
          },
          {
            id: 2,
            subjectName: "HTML",
            dependencies: [1],
            topics: [
              {
                id: 1,
                topicName: "Learn the basics",
                link: "",
                requirement: "required",
              },
              {
                id: 2,
                topicName: "Writing Semantic HTML",
                link: "",
                requirement: "recommended",
              },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  const [learningMap, setLearningMap] = useState(learning[0]);

  return (
    <div className="App">
      <h1>
        Welcome to <strong>{learningMap.learningName}</strong> Learning Map
      </h1>
      <div className="card">
        <p>
          Edit <code>{learningMap.learningName}</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LearningMap
        learningName={learningMap.learningName}
        id={learningMap.id}
        levels={learningMap.levels}
      />
    </div>
  );
}

export default App;
