import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const homePage = screen.getByText(/rewatchables/i);
  expect(homePage).toBeInTheDocument();
});
