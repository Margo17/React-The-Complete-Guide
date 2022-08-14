class Todo {
	id: number;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = Math.floor(Math.random() * 1000);
	}
}

export default Todo;
