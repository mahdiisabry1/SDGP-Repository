import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import Candycrush from "./CSS/CandyCrush.css"

test('renders learn react link', () => {
  render(<Candycrush/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
export default {
  // other vite config options
  esbuild: {
    loader: {
      '.js': 'jsx'
    }
  }
}
