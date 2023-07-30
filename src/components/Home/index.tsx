import dynamic from 'next/dynamic';

const DATA_SOURCE_URL = 'https://www.kaggle.com/datasets/rtatman/every-pub-in-england';
const GITHUB_URL = 'https://github.com/James-buzz/ukpubsmap';

const InfoBox: React.FC = () => (
	<aside className="absolute top-0 left-0 z-30 m-3">
		<div className="p-4 text-sm text-black bg-white rounded-sm">
			<div className="font-medium">Example of Mapbox & Deck.GL</div>
			<div className="mt-2">dataset of 51,566 UK pubs</div>
			<div className="mt-2">
				data source:{' '}
				<a className="underline" href={DATA_SOURCE_URL}>
					link
				</a>
			</div>
			<div className="mt-2">
				github:{' '}
				<a className="underline" href={GITHUB_URL}>
					repo link
				</a>
			</div>
		</div>
	</aside>
);

const Home: React.FC = () => {
	const Map = dynamic(() => import('./Map'), {
		ssr: false,
	});

	return (
		<>
			<Map />
			<InfoBox />
		</>
	);
};

export default Home;
