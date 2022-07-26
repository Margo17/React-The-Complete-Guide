import { useState } from 'react';

const useInput = (validateValue) => {
	const [value, setValue] = useState('');
	const [touched, setTouched] = useState(false);

	const isValid = validateValue(value);
	const isInvalid = !isValid && touched;

	const valueHandler = (event) => {
		setValue(event.target.value);
	};

	const blurHandler = (event) => {
		setTouched(true);
	};

	const reset = () => {
		setValue('');
		setTouched(false);
	};

	return {
		value,
		isValid,
		isInvalid,
		valueHandler,
		blurHandler,
		reset,
	};
};

export default useInput;
