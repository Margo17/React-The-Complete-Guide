import { FormEvent, useRef } from 'react';

import classes from './NewTodo.module.css';

type newTodoProps = {
	onAddTodo: (enteredText: string) => void;
};

const NewTodo = (props: newTodoProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		const enteredText = inputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={inputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
