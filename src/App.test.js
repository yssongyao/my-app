import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Components/Header/Header';
import UpcomingImg from './Components/Main/UpcomingImg';
import FormInfo from './Components/Aside/FormInfo';
//import Navigation from './Components/Navigation/Navigation';




/* Test script 1 - check for text in header*/ 
describe ('Header', () => {
  test('Header is rendered', () => {
    render(<Header />);
    const linkElement = screen.getByText("Welcome");
    expect(linkElement).toBeInTheDocument();
  });
})



/* Test script 2 - check for image in Upcoming section*/  
describe ('Upcoming Image', () => {
  test('image is rendered', () => {
    render(<UpcomingImg />);
    const testImg = screen.getByAltText("Torino Logo");
    expect(testImg).toBeInTheDocument();
    expect(testImg.src).toContain ('Torino_Logo.png')
  });
})


/* Test script 3 - check input change */
describe ('Contact', () => {
  test('Input change rendered for First Name', () => {
    const { getByLabelText } = render(<FormInfo />);
    const input = getByLabelText("firstname");    
    expect(input.value).toBe("");    
    fireEvent.change(input, { target: { value: "John" }});  
    expect(input.value).toBe("John");    
  });
})




/* Test script 6 - check Navigation  
describe ('Navigation', () => {
  test('Navigation is functional', () => { 
    render(<Navigation />);  
    const testLink = screen.getByRole('link', { name: 'Articles' });
    fireEvent.click(testLink);    
    expect(document.querySelector("a").getAttribute("href")).toBe('#Articles');
  });
})
*/