import { useState, useEffect } from 'react';
import './CSS/Quz.css'; // You can customize the styling in App.css

const initialQuestions = [
  {
    question: 'How do you approach the balance between aesthetics and functionality in web design?',
    options: [
      { text: 'A. Aesthetics are crucial; I want my designs to be visually stunning and unique.', rating: 3 },
      { text: 'B. Functionality comes first; my designs prioritize usability and user experience.', rating: 1 },
      { text: 'C. I strive for a balance, ensuring both aesthetics and functionality complement each other.', rating: 2 },
    ],
  },
  {
    question: 'What is your preferred method for gathering user feedback during the design process?',
    options: [
      { text: 'A. Conducting user surveys and interviews to understand their emotional responses.', rating: 2 },
      { text: 'B. Analyzing user behavior through heatmaps and analytics tools.', rating: 1 },
      { text: 'C. Combining both qualitative and quantitative data to inform design decisions.', rating: 3 },
    ],
  },
  {
    question: 'How do you approach the use of white space in your designs?',
    options: [
      { text: 'A. Embracing ample white space for a clean and minimalist look.', rating: 2 },
      { text: 'B. Using white space strategically to guide the user\'s attention and enhance readability.', rating: 3 },
      { text: 'C. Minimizing white space for a denser, content-rich design.', rating: 1 },
    ],
  },
  {
    question: 'What is your attitude towards responsive design and mobile optimization?',
    options: [
      { text: 'A. Prioritizing mobile-first design to ensure a seamless experience on all devices.', rating: 3 },
      { text: 'B. Designing for desktop first and adapting for smaller screens afterward.', rating: 1 },
      { text: 'C. Considering various device sizes simultaneously during the entire design process.', rating: 2 },
    ],
  },
  {
    question: 'How do you choose color palettes for your web designs?',
    options: [
      { text: 'A. Experimenting with bold and vibrant colors to evoke emotions.', rating: 3 },
      { text: 'B. Selecting colors based on usability and accessibility principles.', rating: 2 },
      { text: 'C. Striking a balance between aesthetics and color psychology.', rating: 1 },
    ],
  },
  {
    question: 'What role does storytelling play in your web designs?',
    options: [
      { text: 'A. I integrate narratives and storytelling elements for a more engaging user experience.', rating: 3 },
      { text: 'B. I focus more on delivering information efficiently rather than storytelling.', rating: 1 },
      { text: 'C. I incorporate elements of storytelling when it enhances the overall design.', rating: 2 },
    ],
  },
  {
    question: 'How do you approach collaboration with developers during the implementation phase?',
    options: [
      { text: 'A. Actively collaborate, ensuring the vision is translated into the final product.', rating: 3 },
      { text: 'B. Provide design assets and guidelines, allowing developers more autonomy.', rating: 1 },
      { text: 'C. Maintain open communication, adjusting the design based on technical constraints.', rating: 2 },
    ],
  },
  {
    question: 'What is your perspective on design trends in the industry?',
    options: [
      { text: 'A. I actively seek out and embrace the latest design trends.', rating: 3 },
      { text: 'B. I incorporate industry trends if they align with the project\'s goals and user needs.', rating: 2 },
      { text: 'C. I prefer timeless design elements over following current trends.', rating: 1 },
    ],
  },
  {
    question: 'How do you handle revisions and feedback from clients?',
    options: [
      { text: 'A. Embrace feedback as an opportunity for creative growth and improvement.', rating: 3 },
      { text: 'B. Focus on meeting client requirements without prioritizing personal design preferences.', rating: 1 },
      { text: 'C. Collaborate with clients, finding a middle ground between their vision and design principles.', rating: 2 },
    ],
  },
  {
    question: 'What is your approach to user interface (UI) animations and interactions?',
    options: [
      { text: 'A. I use animations and interactions to create a memorable and dynamic user experience.', rating: 3 },
      { text: 'B. I implement subtle animations to enhance usability without being distracting.', rating: 2 },
      { text: 'C. I minimize the use of animations, prioritizing a clean and straightforward interface.', rating: 1 },
    ],
  },
];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};


const QuestionSurvey = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);


  useEffect(() => {
    const shuffledQuestions = [...initialQuestions];
    shuffleArray(shuffledQuestions);
    setQuestions(shuffledQuestions);
  }, []);

  const handleSelectOption = (optionIndex) => {
    if (!submitted && selectedOption === null) {
      setSelectedOption(optionIndex);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const question = questions[currentQuestion];
      const selectedRating = question.options[selectedOption].rating;
      setTotalScore((prevTotalScore) => prevTotalScore + selectedRating);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  const handleSubmit = () => {
    
    if (selectedOption !== null) {
      handleNextQuestion();
    }
    setSubmitted(true);
  };
  const calculateTotalScore = () => {
    return Object.values(answers).reduce((total, rating) => total + rating, 0);
  };

  const getRecommendation = () => {
    if (totalScore >= 10 && totalScore <= 18) {
      return 'Functionality-Oriented Designer';
    } else if (totalScore >= 19 && totalScore <= 27) {
      return 'Balanced Designer';
    } else {
      return 'Aesthetics-Driven Designer';
    }
  };
  return (
    <div className="app-container">
      <h1>Web Design Preferences Questionnaire</h1>
      <div className="result-container">
        {submitted && (
          <>
            <p>Your total score: {totalScore}</p>
            <p>Recommendation: {getRecommendation()}</p>
          </>
        )}
        {submitted ? (
          <p>Submitted</p>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>

      {/* <div className="questions-container">
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{`${index + 1}. ${q.question}`}</p>
            <div className="options-container">
              {q.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleSelectOption(optionIndex)}
                >
                  {`${option.text} (Rating: ${option.rating})`}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="result-container">
        <p>Total Score: {totalScore}</p>
        {submitted ? (
          <p>Submitted</p>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div> */}

      <div className="question-container">
        <h2 className="question-text">
          {questions[currentQuestion]?.question}
        </h2>
        <ul className="options-list">
          {questions[currentQuestion]?.options?.map((option, index) => (
            <li
              key={index}
              className={`option-item ${
                selectedOption === index ? "selected" : ""
              }`}
              onClick={() => handleSelectOption(index)}
              style={{ cursor: submitted ? "not-allowed" : "pointer" }}
            >
              {option.text}
            </li>
          ))}
        </ul>
        {submitted ? (
          <div>
            <p>Your total score: {totalScore}</p>
            {currentQuestion < questions.length - 1 && (
              <button className="action-button" onClick={handleNextQuestion}>
                Next
              </button>
            )}
          </div>
        ) : (
          <button
            className="action-button"
            onClick={
              currentQuestion === questions.length - 1
                ? handleSubmit
                : handleNextQuestion
            }
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};


export default QuestionSurvey;