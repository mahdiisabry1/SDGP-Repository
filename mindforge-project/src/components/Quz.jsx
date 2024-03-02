import { Component } from 'react';
import '../components/CSS/Quz.css';

class Quz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      this.setState({ score: this.state.score + 1 });
    }

    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < questions.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ showScore: true });
    }
  };

  render() {
    const questions = [
      {
        questionText: 'What is the capital of France?',
        answerOptions: [
          { answerText: 'New York', isCorrect: false },
          { answerText: 'London', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Dublin', isCorrect: false },
        ],
      },
      {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
          { answerText: 'Jeff Bezos', isCorrect: false },
          { answerText: 'Elon Musk', isCorrect: true },
          { answerText: 'Bill Gates', isCorrect: false },
          { answerText: 'Tony Stark', isCorrect: false },
        ],
      },
      {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Intel', isCorrect: false },
          { answerText: 'Amazon', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
        ],
      },
      {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
          { answerText: '1', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '6', isCorrect: false },
          { answerText: '7', isCorrect: true },
        ],
      },
    ];

    const { currentQuestion, showScore, score } = this.state;

    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section flex gap-4'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => this.handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
            

          </>
        )}
      </div>
    );
  }
}

export default Quz;
