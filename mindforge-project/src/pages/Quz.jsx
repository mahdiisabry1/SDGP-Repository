import React, { useState } from 'react';
import '../components/Quz.css'; // Import CSS file

const QuestionPage = () => {
  const [side, setSide] = useState('front-end');
  const [experience, setExperience] = useState('beginner');

  const submitAnswers = () => {
    // Implement your logic for submitting answers
    console.log('Selected Side:', side);
    console.log('Selected Experience:', experience);
    // Add more logic as needed
  };

  return (
    <div className="container">
      <h1>Quiz Corner</h1>
      <div className="question">
        <h2>What is the main side that you wish to learn from here?</h2>
        <select value={side} onChange={(e) => setSide(e.target.value)}>
          <option value="front-end">Front-end</option>
          <option value="back-end">Back-end</option>
          <option value="full-stack">Full-stack</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
      </div>
      <div className="question">
        <h2>What is your level of experience with this technology/field? (Select one)</h2>
        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="senior">senior</option>
        </select>
      </div>
      <button onClick={submitAnswers}>Submit Answers</button>
    </div>
  );
};

export default QuestionPage;
