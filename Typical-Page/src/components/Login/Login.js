import React, {
	useEffect,
	useState,
	useReducer,
	useContext,
	useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/authContext';

const loginReducer = (state, action) => {
	if (action.type === 'USERNAME_INPUT') {
		return {
			...state,
			username: { value: action.val, isValid: action.val.includes('@') },
		};
	}
	if (action.type === 'USERNAME_BLUR') {
		return {
			...state,
			username: {
				value: state.username.value,
				isValid: state.username.value.includes('@'),
			},
		};
	}
	if (action.type === 'PASSWORD_INPUT') {
		return {
			...state,
			password: { value: action.val, isValid: action.val.trim().length > 6 },
		};
	}
	if (action.type === 'PASSWORD_BLUR') {
		return {
			...state,
			password: {
				value: state.password.value,
				isValid: state.password.value.trim().length > 6,
			},
		};
	}
	return {
		username: { value: '', isValid: null },
		password: { value: '', isValid: null },
	};
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);
	const authCtx = useContext(AuthContext);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [loginState, dispatchLogin] = useReducer(loginReducer, {
		username: { value: '', isValid: null },
		password: { value: '', isValid: null },
	});

	const { isValid: emailIsValid } = loginState.username;
	const { isValid: passwordIsValid } = loginState.password;

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchLogin({ type: 'USERNAME_INPUT', val: event.target.value });

		// setFormIsValid(
		// 	event.target.value.includes('@') && loginState.password.isValid
		// );
	};

	const passwordChangeHandler = (event) => {
		dispatchLogin({ type: 'PASSWORD_INPUT', val: event.target.value });

		// setFormIsValid(
		// 	loginState.username.isValid && event.target.value.trim().length > 6
		// );
	};

	const validateEmailHandler = () => {
		dispatchLogin({ type: 'USERNAME_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchLogin({ type: 'PASSWORD_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.onLogin(loginState.username.value, loginState.password.value);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id='email'
					label='E-Mail'
					type='email'
					isValid={emailIsValid}
					value={loginState.username.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					id='password'
					label='Password'
					type='password'
					isValid={passwordIsValid}
					value={loginState.password.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
