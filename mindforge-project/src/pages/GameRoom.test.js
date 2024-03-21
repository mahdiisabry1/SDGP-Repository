import { render, screen } from '@testing-library/react';
import Candycrush from './Candycrush';

test('renders learn react link', () => {
  render(<Candycrush />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});