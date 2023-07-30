import { useEffect, useState } from 'react';
import { Pub } from '@/types/Pub';
import { csv } from 'd3-fetch';

const CSV_URL = './assets/open_pubs.csv';

const useFetchData = (): [Pub[], boolean, Error | null] => {
	const [data, setData] = useState<Pub[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		setLoading(true);
		csv(CSV_URL)
			.then((rawData) => {
				// Cast each item in rawData to Pub
				const data = rawData.map((item) => item as unknown as Pub);
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	return [data as Pub[], loading, error];
};

export default useFetchData;
