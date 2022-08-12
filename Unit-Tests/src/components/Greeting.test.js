import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders "Hello World!"', () => {
		// Arange
		render(<Greeting />);

		// Act
		// ... nothing

		// Assert
		const textElement = screen.getByText('Hello World!');
		expect(textElement).toBeInTheDocument();
	});

	test('renders "good to see you" if the button was NOT clicked', () => {
		render(<Greeting />);

		const textElement = screen.getByText('good to see you', { exact: false });
		expect(textElement).toBeInTheDocument();
	});

	test('renders "Changed!" if the button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const textElement = screen.getByText('Changed!');
		expect(textElement).toBeInTheDocument();
	});

	test('does NOT render "good to see you" if the button was clicked', () => {
		render(<Greeting />);

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const textElement = screen.queryByText('good to see you', { exact: false });
		expect(textElement).toBeNull();
	});
});
