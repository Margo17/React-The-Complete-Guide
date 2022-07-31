import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Martynas',
		text: 'Learning React is fun!',
	},
	{
		id: 'q2',
		author: 'Goberis',
		text: 'Learning React is great!',
	},
];

const Quotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
