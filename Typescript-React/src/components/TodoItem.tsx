import classes from './TodoItem.module.css';

type TodoItemProps = {
	key: number;
	text: string;
	onRemoveTodo: () => void;
};

const TodoItem = (props: TodoItemProps) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};

export default TodoItem;
