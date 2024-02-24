import React, { useState } from 'react';
import './Quz.css'; // Import CSS file


const QuestionPage = () => {
  const [side, setSide] = useState('front-end');
  const [experience, setExperience] = useState('beginner');
  const [experienceLevel, setExperienceLevel] = useState('');

  const submitAnswers = () => {
    // Implement your logic for submitting answers
    console.log('Selected Side:', side);
    console.log('Selected Experience:', experience);
    console.log('Selected Experience Level:', experienceLevel);
    // Add more logic as needed
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
    if (e.target.value === 'no') {
      // Reset experience level if user selects 'No'
      setExperienceLevel('');
    }
  };

  const handleExperienceLevelChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  return (
    <div className="container">
      <h1>Quiz Corner</h1>
      <div className="question">
        <h2>What is the main side that you wish to learn from here? (Select one)</h2>
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
        <select value={experience} onChange={handleExperienceChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      {experience === 'yes' && (
        <div className="question">
          <h2>What kind of experience do you have with React and Angular? (Select one)</h2>
          <select value={experienceLevel} onChange={handleExperienceLevelChange}>
            <option value="">Select</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      )}
      <div>
        <button onClick={submitAnswers}>Submit Answers</button>
      </div>
    </div>
  );
};

export default QuestionPage;
