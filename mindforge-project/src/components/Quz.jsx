import React, { Component } from 'react';
import './Quz.css';

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'front-end',
      experience: '',
      experienceLevel: '',
      welcomeMessage: '',
    };
  }

  componentDidMount() {
    if (this.state.side) {
      this.setState({ welcomeMessage: `Welcome to the ${this.state.side} learning corner!` });
    }
  }

  handleSideChange = (event) => {
    this.setState({ side: event.target.value });
  };

  handleExperienceChange = (event) => {
    this.setState({ experience: event.target.value });
    if (event.target.value === 'no') {
      this.setState({ experienceLevel: '' });
    }
  };

  handleExperienceLevelChange = (event) => {
    this.setState({ experienceLevel: event.target.value });
  };

  submitAnswers = () => {
    console.log('Selected Side:', this.state.side);
    console.log('Selected Experience:', this.state.experience);
    console.log('Selected Experience Level:', this.state.experienceLevel);
  };

  render() {
    return (
      <div className="container">
        <h1>Quiz Corner</h1>
        {this.state.welcomeMessage && <h2 className="welcome-message">{this.state.welcomeMessage}</h2>}
        <div className="question">
          <h2>What do you wish to learn from our website? (Select one)</h2>
          <select value={this.state.side} onChange={this.handleSideChange}>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="full-stack">Full-stack</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <div className="question">
          <h2>Do you have any experience in that side? (Select one)</h2>
          <select value={this.state.experience} onChange={this.handleExperienceChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {this.state.experience === 'yes' && (
          <div className="question">
            <h2>What kind of experience do you have in that field? (Select one)</h2>
            <select value={this.state.experienceLevel} onChange={this.handleExperienceLevelChange}>
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        )}
        <div className="submit-button">
          <button onClick={this.submitAnswers}>Submit Answers</button>
        </div>
      </div>
    );
  }
}

export default QuestionPage;