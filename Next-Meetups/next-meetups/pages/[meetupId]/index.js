import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
			title='First meetup'
			address='Insert street 3, 12345 City'
			description='This is a frist meetup!'
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
				title: 'First meetup',
				address: 'Insert street 3, 12345 City',
				description: 'This is a frist meetup!',
			},
		},
	};
}

export default MeetupDetails;
