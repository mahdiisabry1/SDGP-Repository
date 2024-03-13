import { useState, useEffect } from 'react';
import './CSS/Quz.css';  // Import custom styling

const initialQuestions = [ // Define initial questions for the survey
  {
    question: 'How do you approach the balance between aesthetics and functionality in web design?',
    options: [
      { text: 'A -  Aesthetics are crucial; I want my designs to be visually stunning and unique.', rating: 3 },
      { text: 'B -  Functionality comes first; my designs prioritize usability and user experience.', rating: 1 },
      { text: 'C -  I strive for a balance, ensuring both aesthetics and functionality complement each other.', rating: 2 },
    ],
  },
  {
    question: 'What is your preferred method for gathering user feedback during the design process?',
    options: [
      { text: 'A -  Conducting user surveys and interviews to understand their emotional responses.', rating: 2 },
      { text: 'B -  Analyzing user behavior through heatmaps and analytics tools.', rating: 1 },
      { text: 'C -  Combining both qualitative and quantitative data to inform design decisions.', rating: 3 },
    ],
  },
  {
    question: 'How do you approach the use of white space in your designs?',
    options: [
      { text: 'A -  Embracing ample white space for a clean and minimalist look.', rating: 2 },
      { text: 'B -  Using white space strategically to guide the user\'s attention and enhance readability.', rating: 3 },
      { text: 'C -  Minimizing white space for a denser, content-rich design.', rating: 1 },
    ],
  },
  {
    question: 'What is your attitude towards responsive design and mobile optimization?',
    options: [
      { text: 'A -  Prioritizing mobile-first design to ensure a seamless experience on all devices.', rating: 3 },
      { text: 'B -  Designing for desktop first and adapting for smaller screens afterward.', rating: 1 },
      { text: 'C -  Considering various device sizes simultaneously during the entire design process.', rating: 2 },
    ],
  },
  {
    question: 'How do you choose color palettes for your web designs?',
    options: [
      { text: 'A -  Experimenting with bold and vibrant colors to evoke emotions.', rating: 3 },
      { text: 'B -  Selecting colors based on usability and accessibility principles.', rating: 2 },
      { text: 'C -  Striking a balance between aesthetics and color psychology.', rating: 1 },
    ],
  },
  {
    question: 'What role does storytelling play in your web designs?',
    options: [
      { text: 'A -  I integrate narratives and storytelling elements for a more engaging user experience.', rating: 3 },
      { text: 'B -  I focus more on delivering information efficiently rather than storytelling.', rating: 1 },
      { text: 'C -  I incorporate elements of storytelling when it enhances the overall design.', rating: 2 },
    ],
  },
  {
    question: 'How do you approach collaboration with developers during the implementation phase?',
    options: [
      { text: 'A -  Actively collaborate, ensuring the vision is translated into the final product.', rating: 3 },
      { text: 'B -  Provide design assets and guidelines, allowing developers more autonomy.', rating: 1 },
      { text: 'C -  Maintain open communication, adjusting the design based on technical constraints.', rating: 2 },
    ],
  },
  {
    question: 'What is your perspective on design trends in the industry?',
    options: [
      { text: 'A -  I actively seek out and embrace the latest design trends.', rating: 3 },
      { text: 'B -  I incorporate industry trends if they align with the project\'s goals and user needs.', rating: 2 },
      { text: 'C -  I prefer timeless design elements over following current trends.', rating: 1 },
    ],
  },
  {
    question: 'How do you handle revisions and feedback from clients?',
    options: [
      { text: 'A -  Embrace feedback as an opportunity for creative growth and improvement.', rating: 3 },
      { text: 'B -  Focus on meeting client requirements without prioritizing personal design preferences.', rating: 1 },
      { text: 'C -  Collaborate with clients, finding a middle ground between their vision and design principles.', rating: 2 },
    ],
  },
  {
    question: 'What is your approach to user interface (UI) animations and interactions?',
    options: [
      { text: 'A -  I use animations and interactions to create a memorable and dynamic user experience.', rating: 3 },
      { text: 'B -  I implement subtle animations to enhance usability without being distracting.', rating: 2 },
      { text: 'C -  I minimize the use of animations, prioritizing a clean and straightforward interface.', rating: 1 },
    ],
  },
];
const shuffleArray = (array) => { // Function to shuffle an array in place

  for (let i = array.length - 1; i > 0; i--) {  // Implementation of the Fisher-Yates shuffle algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};


const QuestionSurvey = () => { // QuestionSurvey component definition
  const [questions, setQuestions] = useState([]); // Array to hold shuffled questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Index of the current question
  const [selectedOption, setSelectedOption] = useState(null); // Index of the selected option
  const [submitted, setSubmitted] = useState(false); // Flag to indicate if the survey is submitted
  const [totalScore, setTotalScore] = useState(0); // Accumulated total score based on selected options



  useEffect(() => {  // useEffect hook to shuffle questions when the component mounts
    const shuffledQuestions = [...initialQuestions];
    shuffleArray(shuffledQuestions); // Shuffle the copied array
    setQuestions(shuffledQuestions); // Set shuffled questions as the state
  }, []);

  const handleSelectOption = (optionIndex) => {   // Function to handle option selection
    if (!submitted && selectedOption === null) {     // Allow selection if the survey is not submitted and no option is currently selected

      setSelectedOption(optionIndex);
    }
  };

  // Function to handle moving to the next question or submitting the survey

  const handleNextQuestion = () => {
    if (selectedOption !== null) {     // Calculate total score if an option is selected
      const question = questions[currentQuestion];
      const selectedRating = question.options[selectedOption].rating;
      setTotalScore((prevTotalScore) => prevTotalScore + selectedRating);
    }

    if (currentQuestion < questions.length - 1) {     // Move to the next question if not the last question, reset state, or submit the survey
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  const handleSubmit = () => {   // Function to handle submitting the survey
        // Call handleNextQuestion to finalize the last question and set the submitted flag

    if (selectedOption !== null) {
      handleNextQuestion();
    }
    setSubmitted(true);
  };

  // Function to get the recommendation based on the total score

  const getRecommendation = () => {
    if (totalScore >= 10 && totalScore <= 18) {     // Determine recommendation based on the total score range

      return 'Functionality-Oriented Designer';
    } else if (totalScore >= 19 && totalScore <= 27) {
      return 'Balanced Designer';
    } else {
      return 'Aesthetics-Driven Designer';
    }
  };

  return (
    <div className="Quzapp-container">
      <h1>Web Design Preferences Questionnaire</h1>
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
             // Handle option selection onClick, disable if survey is submitted

              onClick={() => handleSelectOption(index)}
              style={{ cursor: submitted ? "not-allowed" : "pointer" }}
            >
              {option.text}
            </li>
          ))}
        </ul>
       {/* Display result or next/submit button */}

        {submitted ? (
          <div className="result-container">
            <p>Your total score: {totalScore}</p>
          </div>
        ) : (
          <button
            className="action-button"
           // Handle click event based on current question status

            onClick={
              currentQuestion === questions.length - 1
                ? handleSubmit
                : handleNextQuestion
            }
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        )}
       {/* Display recommendation after submission */}

        {submitted && (
          <div className="result-container">
            <p>Recommendation: {getRecommendation()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionSurvey;