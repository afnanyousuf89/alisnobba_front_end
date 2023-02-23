import { render, screen } from '@testing-library/react';
import App from './App';
import Qty from './components/Qty';

test("Checking Logo to be Exist",()=>{
  render(<App/>);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
})

test("Checking Quantity Box to be Exist",()=>{
  render(<Qty/>);
  const logo = screen.getByTestId('qtyBox');
  expect(logo).toBeInTheDocument();
})
