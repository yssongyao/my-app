import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Components/Header/Header';
import UpcomingImg from './Components/Main/UpcomingImg';
import FormInfo from './Components/Aside/FormInfo';
import HideScore from './Components/Main/HideScore';

/* Test script 1 - Render text in header*/
describe ('Header', () => {
  test('Header is rendered', () => {
    render(<Header />);
    const linkElement = screen.getByText("Welcome");
    expect(linkElement).toBeInTheDocument();
  });
})
 
/* Test script 2 - Render image in Upcoming section*/ 
describe ('Upcoming Image', () => {
  test('image is rendered', () => {
    render(<UpcomingImg />);
    const testImg = screen.getByAltText("Torino Logo");
    expect(testImg).toBeInTheDocument();
    expect(testImg.src).toContain ('Torino_Logo.png')
  });
})

/* Test script 3 - Test input change in Contact section*/
describe ('Contact', () => {
  test('Input change rendered for First Name', () => {
    const { getByLabelText } = render(<FormInfo />);
    const input = getByLabelText("firstname");    
    expect(input.value).toBe("");    
    fireEvent.change(input, { target: { value: "John" }});  
    expect(input.value).toBe("John");    
  });
})

/* Test script 4 - Hide/Show Score function by click checkbox in Highlights section */ 
describe ('Highlights', () => {
  test('checkbox checked/unchecked to hide/show score', () => {
    const { getByLabelText } = render(<HideScore />);
    const checkbox = getByLabelText("HideScore");    
    expect(checkbox.checked).toEqual(true);
    const textChecked = screen.getByText("Inter Milan vs AC Milan");
    expect(textChecked).toBeInTheDocument();    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);  
    const textUnChecked = screen.getByText("Inter Milan vs AC Milan 2:1");
    expect(textUnChecked).toBeInTheDocument();       
  });
})



//import Navigation from './Components/Navigation/Navigation';

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