import { render, screen } from '@testing-library/react';
import GameRoom from './GameRoom';

test('renders learn react link', () => {
  render(<GameRoom />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});