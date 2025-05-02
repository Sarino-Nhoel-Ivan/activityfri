import React from 'react';

function Result({ score, total, onRetake }) {
  const percentage = ((score / total) * 100).toFixed(2);

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>You got {score} out of {total} correct.</p>
      <p>Score: {percentage}%</p>
      <button className="result-btn" onClick={onRetake}>Retake Quiz</button>
    </div>
  );
}

export default Result;
