import React from 'react';

function Question({ question, onAnswer }) {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)} className="option-btn">
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
