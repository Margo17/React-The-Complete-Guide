import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: number) => void;
};

type ContextProviderProps = {
	children?: React.ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id) => {},
});

export const TodosContextProvider = (props: ContextProviderProps) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prevState) => prevState.concat(newTodo));
	};

	const removeTodoHandler = (id: number) => {
		setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
	};

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};
