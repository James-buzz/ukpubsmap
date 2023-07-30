import { Pub } from '@/types/Pub';
import { useEffect, useState } from 'react';

const useVisiblePubs = (data, viewPort, zoomLevel) => {
	const [visibleData, setVisibleData] = useState([]);

	useEffect(() => {
		if (zoomLevel >= 14) {
			const visiblePubs = data.filter((d: Pub) => {
				// Convert string coordinates to number
				const lat = Number(d.latitude);
				const lon = Number(d.longitude);

				return (
					lat <= viewPort.latitude + (180 / Math.PI) * (0.5 / viewPort.zoom) &&
					lat >= viewPort.latitude - (180 / Math.PI) * (0.5 / viewPort.zoom) &&
					lon <= viewPort.longitude + ((180 / Math.PI) * (0.5 / viewPort.zoom)) / Math.cos(viewPort.latitude) &&
					lon >= viewPort.longitude - ((180 / Math.PI) * (0.5 / viewPort.zoom)) / Math.cos(viewPort.latitude)
				);
			});

			setVisibleData(visiblePubs);
			console.log(`Visible pub data points: ${visiblePubs.length}`);
		} else {
			setVisibleData([]);
		}
	}, [zoomLevel, viewPort, data]);

	return visibleData;
};

export default useVisiblePubs;
