import { useState, useEffect } from 'react';
import '../components/CSS/Quz.css';

const QuestionSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

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
      options: [
        'A. Aesthetics are crucial; I want my designs to be visually stunning and unique. (Rating: 3)',
        'B. Functionality comes first; my designs prioritize usability and user experience. (Rating: 1)',
        'C. I strive for a balance, ensuring both aesthetics and functionality complement each other. (Rating: 2)',
      ],
      correctIndex: 0,
    },
    {
      id: 2,
      text: 'What is your preferred method for gathering user feedback during the design process?',
      options: [
        'A. Conducting user surveys and interviews to understand their emotional responses. (Rating: 2)',
        'B. Analyzing user behavior through heatmaps and analytics tools. (Rating: 1)',
        'C. Combining both qualitative and quantitative data to inform design decisions. (Rating: 3)',
      ],
      correctIndex: 2,
    },
    {
      id: 3,
      text: 'How do you approach the use of white space in your designs?',
      options: [
        'A. Embracing ample white space for a clean and minimalist look. (Rating: 2)',
        'B. Using white space strategically to guide the user\'s attention and enhance readability. (Rating: 3)',
        'C. Minimizing white space for a denser, content-rich design. (Rating: 1)',
      ],
      correctIndex: 1,
    },
    {
      id: 4,
      text: 'What is your attitude towards responsive design and mobile optimization?',
      options: [
        'A. Prioritizing mobile-first design to ensure a seamless experience on all devices. (Rating: 3)',
        'B. Designing for desktop first and adapting for smaller screens afterward. (Rating: 1)',
        'C. Considering various device sizes simultaneously during the entire design process. (Rating: 2)',
      ],
      correctIndex: 0,
    },
    {
      id: 5,
      text: 'How do you choose color palettes for your web designs?',
      options: [
        'A. Experimenting with bold and vibrant colors to evoke emotions. (Rating: 3)',
        'B. Selecting colors based on usability and accessibility principles. (Rating: 2)',
        'C. Striking a balance between aesthetics and color psychology. (Rating: 1)',
      ],
      correctIndex: 2,
    },
    {
      id: 6,
      text: 'What role does storytelling play in your web designs?',
      options: [
        'A. I integrate narratives and storytelling elements for a more engaging user experience. (Rating: 3)',
        'B. I focus more on delivering information efficiently rather than storytelling. (Rating: 1)',
        'C. I incorporate elements of storytelling when it enhances the overall design. (Rating: 2)',
      ],
      correctIndex: 0,
    },
    {
      id: 7,
      text: 'How do you approach collaboration with developers during the implementation phase?',
      options: [
        'A. Actively collaborate, ensuring the vision is translated into the final product. (Rating: 3)',
        'B. Provide design assets and guidelines, allowing developers more autonomy. (Rating: 1)',
        'C. Maintain open communication, adjusting the design based on technical constraints. (Rating: 2)',
      ],
      correctIndex: 0,
    },
    {
      id: 8,
      text: 'What is your perspective on design trends in the industry?',
      options: [
        'A. I actively seek out and embrace the latest design trends. (Rating: 3)',
        'B. I incorporate industry trends if they align with the project\'s goals and user needs. (Rating: 2)',
        'C. I prefer timeless design elements over following current trends. (Rating: 1)',
      ],
      correctIndex: 0,
    },
    {
      id: 9,
      text: 'How do you handle revisions and feedback from clients?',
      options: [
        'A. Embrace feedback as an opportunity for creative growth and improvement. (Rating: 3)',
        'B. Focus on meeting client requirements without prioritizing personal design preferences. (Rating: 1)',
        'C. Collaborate with clients, finding a middle ground between their vision and design principles. (Rating: 2)',
      ],
      correctIndex: 0,
    },
    {
      id: 10,
      text: 'What is your approach to user interface (UI) animations and interactions?',
      options: [
        'A. I use animations and interactions to create a memorable and dynamic user experience. (Rating: 3)',
        'B. I implement subtle animations to enhance usability without being distracting. (Rating: 2)',
        'C. I minimize the use of animations, prioritizing a clean and straightforward interface. (Rating: 1)',
      ],
      correctIndex: 0,
    },
    // Add the remaining questions here
    {
      id: 11,
      text: 'How do you typically handle stress or challenging situations?',
      options: [
        'A. Stay calm and analyze the situation before taking action. (Rating: 3)',
        'B. Seek support and advice from others. (Rating: 2)',
        'C. Take immediate action to address the issue. (Rating: 1)',
        'D. Feel overwhelmed and struggle to find a solution. (Rating: 1)',
      ],
      correctIndex: 0,
    },
    {
      id: 12,
      text: 'When faced with a decision, do you rely more on logic and analysis or intuition and gut feelings?',
      options: [
        'A. Logic and analysis. (Rating: 2)',
        'B. Intuition and gut feelings. (Rating: 3)',
        'C. A combination of both. (Rating: 1)',
        'D. Depends on the situation. (Rating: 1)',
      ],
      correctIndex: 2,
    },
    {
      id: 13,
      text: 'Describe your ideal weekend. What activities would you choose to do?',
      options: [
        'A. Socializing with friends and attending events. (Rating: 3)',
        'B. Relaxing at home with a good book or movie. (Rating: 1)',
        'C. Engaging in outdoor activities and sports. (Rating: 2)',
        'D. Exploring new places and trying new things. (Rating: 1)',
      ],
      correctIndex: 1,
    },
    {
      id: 14,
      text: 'In a group setting, are you more likely to be the center of attention or prefer to observe from the sidelines?',
      options: [
        'A. Center of attention. (Rating: 2)',
        'B. Prefer to observe. (Rating: 3)',
        'C. Depends on the situation. (Rating: 1)',
        'D. Not sure. (Rating: 1)',
      ],
      correctIndex: 2,
    },
    {
      id: 15,
      text: 'What motivates and drives you in your personal and professional life?',
      options: [
        'A. Achieving personal goals and success. (Rating: 3)',
        'B. Making a positive impact on others. (Rating: 2)',
        'C. Continuous learning and self-improvement. (Rating: 1)',
        'D. Financial stability and material rewards. (Rating: 1)',
      ],
      correctIndex: 2,
    },
    {
      id: 16,
      text: 'How do you approach forming new relationships and connections with others?',
      options: [
        'A. Initiate conversations and build connections proactively. (Rating: 3)',
        'B. Wait for others to approach you first. (Rating: 1)',
        'C. A mix of both, depending on the situation. (Rating: 2)',
        'D. Find it challenging to form new connections. (Rating: 2)',
      ],
      correctIndex: 2,
    },
    {
      id: 17,
      text: 'When working on a project, do you prefer to collaborate with a team or work independently?',
      options: [
        'A. Prefer to collaborate with a team. (Rating: 3)',
        'B. Enjoy working independently. (Rating: 1)',
        'C. Depends on the nature of the project. (Rating: 2)',
        'D. Not sure. (Rating: 2)',
      ],
      correctIndex: 2,
    },
    {
      id: 18,
      text: 'Are you more of a planner, carefully organizing and scheduling, or do you prefer to go with the flow and adapt as things unfold?',
      options: [
        'A. Carefully organize and schedule. (Rating: 3)',
        'B. Go with the flow and adapt. (Rating: 1)',
        'C. Find a balance between planning and flexibility. (Rating: 2)',
        'D. Not sure. (Rating: 2)',
      ],
      correctIndex: 2,
    },
    {
      id: 19,
      text: 'What role does creativity play in your life? How do you express your creative side?',
      options: [
        'A. Creativity is a significant part of my life, and I express it through various artistic pursuits. (Rating: 3)',
        'B. I appreciate creativity but don’t actively express it. (Rating: 1)',
        'C. Express creativity through problem-solving and innovation. (Rating: 2)',
        'D. Not sure. (Rating: 2)',
      ],
      correctIndex: 0,
    },
    {
      id: 20,
      text: 'Imagine you have a free day with no obligations. What would you choose to do?',
      options: [
        'A. Explore a new city or travel to a new destination. (Rating: 3)',
        'B. Spend the day relaxing and indulging in self-care. (Rating: 1)',
        'C. Engage in outdoor activities or sports. (Rating: 2)',
        'D. Work on personal projects or pursue hobbies. (Rating: 1)',
      ],
      correctIndex: 1,
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
      const question = questions[currentQuestion];
      const selectedRating = parseInt(question.options[selectedOption].match(/\d+/)[0], 10);
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
    displayResult(totalScore);
  };

  const displayResult = (score) => {
    let message = '';
    if (score >= 10 && score <= 18) {
      message = 'Functionality-Oriented Designer';
    } else if (score >= 19 && score <= 27) {
      message = 'Balanced Designer';
    } else {
      message = 'Aesthetics-Driven Designer';
    }

    alert(`Your result: ${message}`);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{questions[currentQuestion].text}</h2>
      <ul className="options-list">
        {questions[currentQuestion].options.map((option, index) => (
          <li
            key={index}
            className={`option-item ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleSelectOption(index)}
            style={{ cursor: submitted ? 'not-allowed' : 'pointer' }}
          >
            {option}
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
        <button className="action-button" onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNextQuestion}>
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      )}
    </div>
  );
};

export default QuestionSurvey;
