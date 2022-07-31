import { Route, useParams, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${params.quoteId}`} exact>
				<div className='centered'>
					<Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
						Show Comments
					</Link>
				</div>
			</Route>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
