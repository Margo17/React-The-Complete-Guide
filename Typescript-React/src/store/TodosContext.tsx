import React, { useState } from 'react';
import Todo from '../models/todo';

type todosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: number) => void;
};

type contextProviderProps = {
	children?: React.ReactNode;
};

export const TodosContext = React.createContext<todosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id) => {},
});

export const TodosContextProvider = (props: contextProviderProps) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prevState) => prevState.concat(newTodo));
	};

	const removeTodoHandler = (id: number) => {
		setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
	};

	const contextValue: todosContextObj = {
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
