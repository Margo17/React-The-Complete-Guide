import useInput from '../hooks/useInput';

const Input = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		isInvalid: nameInputHasError,
		valueHandler: nameChangeHandler,
		blurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		isInvalid: emailInputHasError,
		valueHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes('@'));

	const formIsValid = enteredNameIsValid && enteredEmailIsValid;

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) return;

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>E-Mail</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className='error-text'>Please enter a valid email.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default Input;
