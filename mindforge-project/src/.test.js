import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quz from './components/Quz'; // Adjust the import path based on your file structure

describe('QuestionSurvey component', () => {
  test('renders QuestionSurvey component', () => {
    const { getByText } = render(<Quz />);
    expect(getByText('Web Design Preferences Questionnaire')).toBeInTheDocument();
  });

  test('allows user to select an option and move to the next question', () => {
    const { getByText, getByTestId } = render(<Quz />);
    const option = getByText('Aesthetics are crucial; I want my designs to be visually stunning and unique.');
    fireEvent.click(option);

    // Check if the selected option has the "selected" class
    expect(option).toHaveClass('selected');

    const nextButton = getByText('Next');
    fireEvent.click(nextButton);

    // Check if the next question is rendered
    expect(getByTestId('question-text')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
