import { render, screen } from '@testing-library/react';
import Header from './Components/Header/Header';
import UpcomingImg from './Components/Main/UpcomingImg';



/* Test script 1 - check for text in header */
describe ('Header', () => {
  test('Header is rendered', () => {
    render(<Header />);
    const linkElement = screen.getByText("Welcome");
    expect(linkElement).toBeInTheDocument();
  });
})


/* Test script 2 - check for image in Upcoming section */ 
describe ('Upcoming Image', () => {
  test('image is rendered', () => {
    render(<UpcomingImg />);
    const testImg = screen.getByAltText("Torino Logo");
    expect(testImg).toBeInTheDocument();
    expect(testImg.src).toContain ('Torino_Logo.png')
  });
})