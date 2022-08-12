import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
	// Arange
	render(<Greeting />);

	// Act
	// ... nothing

	// Assert
	const textElement = screen.getByText('Hello World!');
	expect(textElement).toBeInTheDocment();
});
