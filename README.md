# Visualising Large Datasets with DeckGL and Mapbox

A simple demonstration of how you can use DeckGL to visualise a large-scale datasets for mapping libraries such as MapboxJS.

Using DeckGL, you can efficiently render large datasets. As an example, this repository visualises all the pubs in the UK, totalling over 50,000 data points.

## Technologies used

- **Mapbox**: A powerful mapping library for mobile and web applications. We are using it here to render the base map.
- **DeckGL**: A WebGL-powered framework specifically designed for exploring and visualising data sets at scale. In this project, we use DeckGL to render the data points (pubs) on top of the Mapbox map. DeckGL makes use of GPU acceleration to efficiently handle large amounts of data.
- **React**: A JavaScript library for building user interfaces.

## Installation and Setup

1. Clone this repository

   ```bash
   git clone https://github.com/james-buzz/ukpubsmap.git
   ```

2. Install dependencies

   ```bash
   cd ukpubsmap
   npm install
   ```

3. Create an .env.local file in the root directory of the project and add your Mapbox API Token to it. You can get an API token by signing up on the [Mapbox website](https://www.mapbox.com/).

   ```bash
   touch .env.local
   echo 'NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<Your Mapbox Access Token>' >> .env.local
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to view the app.

## Data

The data used in this project represents over 50,000 pubs in the UK. The details include the pub name, address, latitude, and longitude.
The data is publicly available at https://www.kaggle.com/datasets/rtatman/every-pub-in-england
