import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type todosProps = {
	items: Todo[];
	onRemoveTodo: (id: number) => void;
};

const Todos = (props: todosProps) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={() => props.onRemoveTodo(item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
