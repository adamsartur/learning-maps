import { useState } from "react";
import reactLogo from "./assets/react.svg";
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
                topicName: "Browsers and how they work",
                link: "",
                requirement: "required",
              },
              {
                id: 4,
                topicName: "DNS and how it works",
                link: "",
                requirement: "required",
              },
              {
                id: 5,
                topicName: "What is Domain Name",
                link: "",
                requirement: "required",
              },
              {
                id: 6,
                topicName: "What is Hosting",
                link: "",
                requirement: "required",
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
                requirement: "required",
              },
              {
                id: 3,
                topicName: "Forms and Validations",
                link: "",
                requirement: "required",
              },
              {
                id: 4,
                topicName: "Conventions and Best Practices",
                link: "",
                requirement: "required",
              },
              {
                id: 5,
                topicName: "Accessibility",
                link: "",
                requirement: "optional",
              },
              {
                id: 6,
                topicName: "SEO Basics",
                link: "",
                requirement: "optional",
              },
            ],
          },
          {
            id: 3,
            subjectName: "CSS",
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
                topicName: "Making Layouts",
                link: "",
                requirement: "required",
              },
              {
                id: 3,
                topicName: "Responsive design and Media Queries",
                link: "",
                requirement: "required",
              },
              {
                id: 4,
                topicName:
                  "Floats Positioning Display Box Model CSS Grid Flex Box",
                link: "",
                requirement: "required",
              },
            ],
          },
          {
            id: 4,
            subjectName: "Javascript",
            dependencies: [1],
            topics: [
              {
                id: 1,
                topicName: "Syntax and Basic Constructs",
                link: "",
                requirement: "required",
              },
              {
                id: 2,
                topicName: "Learn DOM Manipulation",
                link: "",
                requirement: "required",
              },
              {
                id: 3,
                topicName: "Learn Fetch API / Ajax (XHR)",
                link: "",
                requirement: "required",
              },
              {
                id: 4,
                topicName: "ES6+ and modular JavaScript",
                link: "",
                requirement: "required",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        levelName: "Web Development Tools",
        subjects: [
          {
            id: 1,
            subjectName: "Version Control Systems",
            dependencies: [0],
            topics: [
              {
                id: 1,
                topicName: "How does the internet Work",
                link: "",
                requirement: "required",
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
            ],
          },
          {
            id: 3,
            subjectName: "CSS",
            dependencies: [1],
            topics: [
              {
                id: 1,
                topicName: "Learn the basics",
                link: "",
                requirement: "required",
              },
            ],
          },
          {
            id: 4,
            subjectName: "Javascript",
            dependencies: [1],
            topics: [
              {
                id: 1,
                topicName: "Gi",
                link: "",
                requirement: "required",
              },
              {
                id: 2,
                topicName: "Learn DOM Manipulation",
                link: "",
                requirement: "required",
              },
              {
                id: 3,
                topicName: "Learn Fetch API / Ajax (XHR)",
                link: "",
                requirement: "required",
              },
              {
                id: 4,
                topicName: "ES6+ and modular JavaScript",
                link: "",
                requirement: "required",
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
    <div>
      <LearningMap
        learningName={learningMap.learningName}
        id={learningMap.id}
        key={learningMap.id}
        levels={learningMap.levels}
      />
    </div>
  );
}

export default App;
