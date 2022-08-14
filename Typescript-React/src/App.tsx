import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodos((prevState) => prevState.concat(newTodo));
	};

	const removeTodoHandler = (id: number) => {
		setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos onRemoveTodo={removeTodoHandler} items={todos} />
		</div>
	);
};

export default App;
