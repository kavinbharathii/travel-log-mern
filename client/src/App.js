import React from 'react';
import Map from 'react-map-gl';

const App = () => {
	return (
		<Map
			mapboxAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
			initialViewState={{
				latitude: 11.0772,
				longitude: 76.9888,
				zoom: 5
			}}
			style={{ width: '100vw', height: '100vh' }}
			mapStyle="mapbox://styles/cipherdot/clmq0e0of024v01r76cvz4626"
		/>
	);
}

export default App
