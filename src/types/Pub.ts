interface Pub {
  fas_id: string;
  name: string;
  address: string;
  postcode: string;
  easting: string;
  northing: string;
  latitude: string;
  longitude: string;
  local_authority: string;
}

interface Pubs {
  data: Pub[];
}

export type {Pub, Pubs};