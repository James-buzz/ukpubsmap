import DeckGL from '@deck.gl/react/typed';
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import MapBox, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoIosRefreshCircle } from 'react-icons/io'; // Loading icon
import useFetchPubs from '@/hooks/useFetchPubs';
import { Pub } from '@/types/Pub';

const INITIAL_VIEW_STATE = {
	longitude: -2.2426,
	latitude: 53.4808,
	zoom: 6,
	pitch: 0,
	bearing: 0,
};

const Map: React.FC = () => {
	const [data, loading, error] = useFetchPubs();

	if (error) return <p>Error: {error.message}</p>;

	const layers = [
		new ScatterplotLayer({
			id: 'scatterplot-layer',
			getRadius: 300,
			data,
			getPosition: (d: Pub) => [Number(d.longitude), Number(d.latitude)],
			getFillColor: () => [0, 140, 255, 255],
		}),
	];

	return (
		<DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers}>
			<MapBox
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
				mapStyle="mapbox://styles/mapbox/dark-v11"
			>
				<NavigationControl />
			</MapBox>
			{loading && (
				<div className="absolute top-0 right-0 m-3">
					<IoIosRefreshCircle className="text-4xl text-blue-500 animate-spin" />
				</div>
			)}
		</DeckGL>
	);
};

export default Map;
