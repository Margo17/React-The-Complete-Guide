import UserFinder from './components/UserFinder';
import UsersContext from './store/usersContext';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Martynas' },
	{ id: 'u2', name: 'Petras' },
	{ id: 'u3', name: 'Jonas' },
];

function App() {
	const usersContext = {
		users: DUMMY_USERS,
	};

	return (
		<UsersContext.Provider value={usersContext}>
			<UserFinder />
		</UsersContext.Provider>
	);
}

export default App;
