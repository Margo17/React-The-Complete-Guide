import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2021, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 94.67,
		date: new Date(2022, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 4, 2),
	},
	{ id: 'e5', title: 'Sim Rig', amount: 299, date: new Date(2022, 6, 12) },
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => [expense, ...prevExpenses]);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses}></Expenses>
		</div>
	);
};

export default App;
