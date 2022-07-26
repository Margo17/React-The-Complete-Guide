import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Form = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		isInvalid: nameInputHasError,
		valueHandler: nameChangeHandler,
		blurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput(isNotEmpty);

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		isInvalid: lastNameInputHasError,
		valueHandler: lastNameChangeHandler,
		blurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput(isNotEmpty);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		isInvalid: emailInputHasError,
		valueHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput(isEmail);

	const formIsValid =
		enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

	const submitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) return;

		console.log('Submitted!');
		console.log(enteredName, enteredLastName, enteredEmail);

		resetNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const lastNameInputClasses = lastNameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={nameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						value={enteredName}
						onChange={nameChangeHandler}
						onBlur={nameBlurHandler}
					/>
					{nameInputHasError && (
						<p className='error-text'>Please enter a name.</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameInputHasError && (
						<p className='error-text'>Please enter a last name.</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailInputHasError && (
					<p className='error-text'>Please enter a valid email address.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default Form;
