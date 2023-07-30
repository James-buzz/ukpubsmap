import useFetchPubs from '@/hooks/useFetchPubs';
import { Pub } from '@/types/Pub';
import { IconLayer } from '@deck.gl/layers/typed';
import DeckGL from '@deck.gl/react/typed';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import { IoIosRefreshCircle } from 'react-icons/io'; // Loading icon
import MapBox, { NavigationControl, ScaleControl } from 'react-map-gl';
import PubIcon from '../../../public/assets/pub.png';

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
		new IconLayer({
			id: 'icon-layer',
			data,
			pickable: false,
			getIcon: (d) => ({
				url: PubIcon.src,
				width: 30,
				height: 30,
				anchorY: 15,
			}),
			getSize: () => 10,
			sizeScale: 0.8,
			getPosition: (d: Pub) => [Number(d.longitude), Number(d.latitude)],
			getColor: () => [255, 173, 0, 255],
			sizeMinPixels: 8,
		}),
	];

	return (
		<DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers}>
			<MapBox
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
				mapStyle="mapbox://styles/mapbox/light-v11"
			>
				<NavigationControl />
				<ScaleControl />
			</MapBox>
			{loading && (
				<div className="absolute top-0 right-0 m-3">
					<IoIosRefreshCircle className="text-4xl text-orange-500 animate-spin" />
				</div>
			)}
		</DeckGL>
	);
};

export default Map;
