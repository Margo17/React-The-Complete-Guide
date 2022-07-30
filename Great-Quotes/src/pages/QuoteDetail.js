import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const NewQuote = () => {
	const params = useParams();

	return (
		<>
			<h1>QUOTE DETAIL</h1>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default NewQuote;
