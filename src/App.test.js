import { render, screen } from '@testing-library/react';
import Header from './Components/Header/Header';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText("Welcome");
  expect(linkElement).toBeInTheDocument();
});
