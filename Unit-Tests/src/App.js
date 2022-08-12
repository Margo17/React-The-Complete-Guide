import Greeting from './components/Greeting';
import Async from './components/Async';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Async />
			<Greeting />
		</div>
	);
};

export default App;
