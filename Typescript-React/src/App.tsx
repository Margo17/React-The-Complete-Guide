import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { TodosContextProvider } from './store/TodosContext';

const App = () => {
	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
		</TodosContextProvider>
	);
};

export default App;
