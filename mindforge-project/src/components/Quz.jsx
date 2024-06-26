import { useState, useEffect } from "react";
import "./CSS/Quz.css"; // Import custom styling
import NavBar from "./NavBar";


const initialQuestions = [
  // Define initial questions for the survey
  {
    question:
      "How do you approach the balance between aesthetics and functionality in web design?",
    options: [
      {
        text: "  Aesthetics are crucial; I want my designs to be visually stunning and unique.",
        rating: 3,
      },
      {
        text: "  Functionality comes first; my designs prioritize usability and user experience.",
        rating: 1,
      },
      {
        text: "  I strive for a balance, ensuring both aesthetics and functionality complement each other.",
        rating: 2,
      },
    ],
  },
  {
    question:
      "What is your preferred method for gathering user feedback during the design process?",
    options: [
      {
        text: "  Conducting user surveys and interviews to understand their emotional responses.",
        rating: 2,
      },
      {
        text: "  Analyzing user behavior through heatmaps and analytics tools.",
        rating: 1,
      },
      {
        text: "  Combining both qualitative and quantitative data to inform design decisions.",
        rating: 3,
      },
    ],
  },
  {
    question: "How do you approach the use of white space in your designs?",
    options: [
      {
        text: "  Embracing ample white space for a clean and minimalist look.",
        rating: 2,
      },
      {
        text: "  Using white space strategically to guide the user's attention and enhance readability.",
        rating: 3,
      },
      {
        text: "  Minimizing white space for a denser, content-rich design.",
        rating: 1,
      },
    ],
  },
  {
    question:
      "What is your attitude towards responsive design and mobile optimization?",
    options: [
      {
        text: "  Prioritizing mobile-first design to ensure a seamless experience on all devices.",
        rating: 3,
      },
      {
        text: " Designing for desktop first and adapting for smaller screens afterward.",
        rating: 1,
      },
      {
        text: " Considering various device sizes simultaneously during the entire design process.",
        rating: 2,
      },
    ],
  },
  {
    question: "How do you choose color palettes for your web designs?",
    options: [
      {
        text: "  Experimenting with bold and vibrant colors to evoke emotions.",
        rating: 3,
      },
      {
        text: "  Selecting colors based on usability and accessibility principles.",
        rating: 2,
      },
      {
        text: " Striking a balance between aesthetics and color psychology.",
        rating: 1,
      },
    ],
  },
  {
    question: "What role does storytelling play in your web designs?",
    options: [
      {
        text: "  I integrate narratives and storytelling elements for a more engaging user experience.",
        rating: 3,
      },
      {
        text: "  I focus more on delivering information efficiently rather than storytelling.",
        rating: 1,
      },
      {
        text: "  I incorporate elements of storytelling when it enhances the overall design.",
        rating: 2,
      },
    ],
  },
  {
    question:
      "How do you approach collaboration with developers during the implementation phase?",
    options: [
      {
        text: "  Actively collaborate, ensuring the vision is translated into the final product.",
        rating: 3,
      },
      {
        text: "  Provide design assets and guidelines, allowing developers more autonomy.",
        rating: 1,
      },
      {
        text: "  Maintain open communication, adjusting the design based on technical constraints.",
        rating: 2,
      },
    ],
  },
  {
    question: "What is your perspective on design trends in the industry?",
    options: [
      {
        text: "  I actively seek out and embrace the latest design trends.",
        rating: 3,
      },
      {
        text: "  I incorporate industry trends if they align with the project's goals and user needs.",
        rating: 2,
      },
      {
        text: "  I prefer timeless design elements over following current trends.",
        rating: 1,
      },
    ],
  },
  {
    question: "How do you handle revisions and feedback from clients?",
    options: [
      {
        text: "  Embrace feedback as an opportunity for creative growth and improvement.",
        rating: 3,
      },
      {
        text: "  Focus on meeting client requirements without prioritizing personal design preferences.",
        rating: 1,
      },
      {
        text: "  Collaborate with clients, finding a middle ground between their vision and design principles.",
        rating: 2,
      },
    ],
  },
  {
    question:
      "What is your approach to user interface (UI) animations and interactions?",
    options: [
      {
        text: "  I use animations and interactions to create a memorable and dynamic user experience.",
        rating: 3,
      },
      {
        text: "  I implement subtle animations to enhance usability without being distracting.",
        rating: 2,
      },
      {
        text: "  I minimize the use of animations, prioritizing a clean and straightforward interface.",
        rating: 1,
      },
    ],
  },
];
const shuffleArray = (array) => {
  // Function that shuffle an array

  for (let i = array.length - 1; i > 0; i--) {
    // Implementation of the Fisher-Yates shuffle algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const QuestionSurvey = () => {
  const [questions, setQuestions] = useState([]); // Array to hold shuffled questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Index of the current question
  const [selectedOption, setSelectedOption] = useState(null); // Index of the selected option
  const [submitted, setSubmitted] = useState(false); // Flag to indicate if the survey is submitted
  const [totalScore, setTotalScore] = useState(0); // Accumulated total score based on selected options
  const [recommendation, setRecommendation] = useState(""); // Recommendation based on total score
  const [showTab, setShowTab] = useState(false); // State variable to control tab visibility

 const handleShowTab = () => {
  // Function to show the tab content and generate recommendation
  const generatedRecommendation = generateRecommendation(); // Generate recommendation dynamically
  setRecommendation(generatedRecommendation); // Set the recommendation text
  setShowTab(true); // Show the tab content
};
const generateRecommendation = () => {
  // Function to generate recommendation dynamically (replace this with your logic)
  return "Your recommendation text goes here.";
};

  useEffect(() => {
    // useEffect hook to shuffle questions when the component mounts
    const shuffledQuestions = [...initialQuestions];
    shuffleArray(shuffledQuestions); // Shuffle the copied array
    setQuestions(shuffledQuestions); // Set shuffled questions as the state
  }, []);

  const handleSelectOption = (optionIndex) => {
    // Function to handle option selection
    if (!submitted) {
      // Allow selection if the survey is not submitted
      setSelectedOption(optionIndex);
    }
  };

  // Function to handle moving to the next question or submitting the survey

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      // Calculate total score if an option is selected
      const question = questions[currentQuestion];
      const selectedRating = question.options[selectedOption].rating;
      setTotalScore((prevTotalScore) => prevTotalScore + selectedRating);
    }

    if (currentQuestion < questions.length - 1) {
      // Move to the next question if not the last question, reset state, or submit the survey
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      //setSubmitted(false);
    } else {
      setSubmitted(true);
      getRecommendation();
    }
  };

  // Function to handle the submission of the survey
  const handleSubmit = () => {
    if (selectedOption !== null) {
      // Calculate total score if an option is selected
      const question = questions[currentQuestion];
      const selectedRating = question.options[selectedOption].rating;
      setTotalScore((prevTotalScore) => prevTotalScore + selectedRating);
    }
    // Set the submitted flag to true after handling the current question
    setSubmitted(true);
    getRecommendation();
    setShowTab(true); // Show the tab content after submission
  };

  // Function to generate recommendation based on total score
  const getRecommendation = (score) => {
    let recommendation = "";
    if (score >= 1 && score <= 9) {
      recommendation = "Aesthetics Driven Designer -- Visualist --";
    } else if (score >= 10 && score <= 18) {
      recommendation = "Functionality Oriented Designer -- Pragmatist --";
    } else if (score >= 19 && score <= 27) {
      recommendation = "Balanced Designer -- Harmonizer --";
    } else {
      recommendation =
        "Stay inspired with us. Explore the latest trends and tips to fuel your web design journey.";
    }
    return recommendation;
  };

  // useEffect to load recommendation from local storage on component mount
  useEffect(() => {
    const savedRecommendation = localStorage.getItem("recommendation");
    if (savedRecommendation) {
      setRecommendation(savedRecommendation);
      console.log("Recommendation loaded from local storage:", savedRecommendation);
    }
  }, []);


  return (
    <>
      <NavBar />
      <div className="Quzapp-container">
        <h1>Web Design Preferences Questionnaire</h1>
        {!submitted ? (
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
            <button
              className="action-button"
              onClick={
                selectedOption !== null
                  ? currentQuestion === questions.length - 1
                    ? handleSubmit
                    : handleNextQuestion
                  : null
              }
              disabled={selectedOption === null}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        ) : (
          <div className="result-container">
  <h2>Thank you for completing the questionnaire!</h2>
  <p>Your total score: {totalScore}</p>
  <p>Click below to view your recommendation.</p>
  <button
    className="action-button"
    onClick={handleShowTab}
  >
    Here is our Recommendation for you!
  </button>
  {showTab && (
    <div className="Quztab-content">
      {/* Render the tab content with the dynamically generated recommendation */}
      <h2>Our Recommendation deppend on your design preferences :</h2>
      <div></div> {/* Empty div for line space */}
      <p>{getRecommendation(totalScore)}</p> {/* Invoke getRecommendation function with totalScore */}
    </div>
  )}
</div>
        )}
      </div>
    </>
  );
};

export default QuestionSurvey;