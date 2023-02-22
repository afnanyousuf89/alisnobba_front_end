import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';



test("Checking Logo to be Exist",()=>{
  render(<App/>);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
})


