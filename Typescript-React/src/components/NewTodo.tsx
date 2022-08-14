import { FormEvent, useRef, useContext } from 'react';

import { TodosContext } from '../store/TodosContext';
import classes from './NewTodo.module.css';

const NewTodo = () => {
	const todosCtx = useContext(TodosContext);
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

		const enteredText = inputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw an error
			return;
		}

		todosCtx.addTodo(enteredText);
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
