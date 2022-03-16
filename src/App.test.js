import { render, screen } from '@testing-library/react';
import App from './App';
import handlePlayerSelect from './App';

test('Renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rock, Paper, Scissors Game/i);
  expect(linkElement).toBeInTheDocument();

  
});


