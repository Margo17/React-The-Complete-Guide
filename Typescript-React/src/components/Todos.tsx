import { useContext } from 'react';

import { TodosContext } from '../store/TodosContext';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={() => todosCtx.removeTodo(item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
