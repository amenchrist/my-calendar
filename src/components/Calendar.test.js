import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

const date = `4/11/2022`

it('renders without crashing', () => {
  render(<Calendar date={date} />);
});

it('renders month and year in calendar', () => {
	render(<Calendar date={date} />);
	const linkElement = screen.getByText(/November 2022/i);
	expect(linkElement).toBeInTheDocument();
});
  
