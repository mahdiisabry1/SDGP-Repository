import { useState, useEffect } from 'react';
import '../components/CSS/Quz.css';

const QuestionSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'How do you approach the balance between aesthetics and functionality in web design?',
      rating: 1,
      options: ['Central Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
      correctIndex: 1, // 'Cascading Style  Sheets' is the correct answer
    },
    {
      id: 2,
      text: 'What is your preferred method for gathering user feedback during the design process?',
      options: ['Java', 'JavaScript', 'Python', 'C++'],
      correctIndex: 1, // 'JavaScript' is the correct answer
      rating: 1,
    },
    {
      id: 3,
      text: 'How do you approach the use of white space in your designs?',
      rating: 1,
      options: ['JavaScript XML', 'Java XML', 'JavaScript Extension', 'Java Extension'],
      correctIndex: 0, // 'JavaScript XML' is the correct answer
    },
    {
      id: 4,
      text: 'What is your attitude towards responsive design and mobile optimization?',
      options: [
        'A JavaScript library',
        'A representation of the UI in memory',
        'A way to style components',
        'A React component',
      ],
      correctIndex: 1, // 'A representation of the UI in memory' is the correct answer
      rating: 1,
    },
    {
      id: 5,
      text: 'How do you choose color palettes for your web designs?',
      options: ['State management', 'Routing', 'Styling', 'Server communication'],
      correctIndex: 0, // 'State management' is the correct answer
      rating: 1,
    },
    {
      id: 6,
      text: 'What role does storytelling play in your web designs?',
      options: ['Props', 'State', 'Context', 'Ref'],
      correctIndex: 0, // 'Props' is the correct answer
      rating: 1,
    },
    {
      id: 7,
      text: 'How do you approach collaboration with developers during the implementation phase?',
      options: ['Handling form events', 'Fetching data', 'Lifecycle methods', 'Conditional rendering'],
      correctIndex: 1, // 'Fetching data' is the correct answer
      rating: 1,
    },
    {
      id: 8,
      text: 'What is your perspective on design trends in the industry?',
      options: ['A component with controlled access', 'A component with internal state', 'A component with no state', 'A functional component'],
      correctIndex: 1, // 'A component with internal state' is the correct answer
      rating: 1,
    },
    {
      id: 9,
      text: 'How do you handle revisions and feedback from clients?',
      options: ['Assigning a unique identifier to each list item', 'Styling list items', 'Handling click events', 'Creating nested lists'],
      correctIndex: 0, // 'Assigning a unique identifier to each list item' is the correct answer
      rating: 1,
    },
    {
      id: 10,
      text: 'What is your approach to user interface (UI) animations and interactions?',
      options: ['Installing dependencies', 'Starting the development server', 'Building the production bundle', 'Running tests'],
      correctIndex: 1, // 'Starting the development server' is the correct answer
      rating: 1,
    },
  ]);

  useEffect(() => {
    const shuffledQuestions = [...questions];
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
      const isCorrect = selectedOption === questions[currentQuestion].correctIndex;
  
      // Only add marks if the answer is correct
      setTotalMarks((prevTotalMarks) => prevTotalMarks + (isCorrect ? 10 : 0));
    }
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Reset selected option for the new question
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      // Last question, display final result
      setSubmitted(true);
    }
  };

  const handleSubmit = () => {
    // Check if an option is selected before allowing submission
    if (selectedOption !== null) {
      handleNextQuestion();
    }
    setSubmitted(true);
    // Display grading message or any additional messages
    displayGradingMessage(totalMarks);
  };

  const displayGradingMessage = (marks) => {
    let message = '';

    if (marks < 50) {
      message = "You need to study more. Your marking is low.";
    } else if (marks < 70) {
      message = "You've passed, but there's room for improvement.";
    } else if (marks < 90) {
      message = "Great job! You did well.";
    } else {
      message = "Excellent! You've scored exceptionally.";
    }

    alert(message);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{questions[currentQuestion].text}</h2>
      <ul className="options-list">
        {questions[currentQuestion].options.map((option, index) => {
          const isCorrect = index === questions[currentQuestion].correctIndex;
          const isSelected = selectedOption === index;
          const optionClass = isSelected
            ? isCorrect
              ? 'correct'
              : 'wrong'
            : '';

          return (
            <li
              key={index}
              className={`option-item ${optionClass}`}
              onClick={() => handleSelectOption(index)}
              style={{ cursor: 'pointer', pointerEvents: submitted ? 'none' : 'auto' }}
            >
              {option}
              <span className="rating-star">{Array(questions[currentQuestion].rating + 1).join('')}</span>
            </li>
          );
        })}
      </ul>
      {submitted ? (
        <div>
          <p>Your marks: {totalMarks}</p>
          {currentQuestion < questions.length - 1 && (
            <button className="action-button" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>
      ) : (
        <button className="action-button" onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNextQuestion}>
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      )}
    </div>
  );
};

export default QuestionSurvey;