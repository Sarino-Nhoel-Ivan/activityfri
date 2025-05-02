import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';


const questions = [
  {
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    questionText: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    questionText: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    correctAnswer: "4"
  },
  {
    questionText: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: "CSS"
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default App;
