import classes from './TodoItem.module.css';

type todoItemProps = {
	key: number;
	text: string;
	onRemoveTodo: () => void;
};

const TodoItem = (props: todoItemProps) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};

export default TodoItem;
