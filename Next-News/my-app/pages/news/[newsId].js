// my-domain.com/news/detail
import { useRouter } from 'next/router';

function DetailPage() {
	const router = useRouter();

	const newsId = router.query.newsId;

	// send a request to a backend API to fetch news item

	return <h1>The Detail Page</h1>;
}

export default DetailPage;
