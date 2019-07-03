import * as React from 'react';
import DeckGL, { GeoJsonLayer, ArcLayer } from 'deck.gl';
import { StaticMap } from 'react-map-gl';

const initialViewState = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0,
  pitch: 30,
};

const IndexPage = function() {
  const layers = [
    new GeoJsonLayer({
      id: 'airports',
      data: require('@/assets/data/ne_10m_airports.geojson'),
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      opacity: 1,
      pointRadiusScale: 2000,
      getRadius: (f) => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      // onClick: this._onClick,
    }),
    new ArcLayer({
      id: 'arcs',
      data: require('@/assets/data/ne_10m_airports.geojson'),
      dataTransform: (d) => d.features.filter((f) => f.properties.scalerank < 4),
      // Styles
      getSourcePosition: (f) => [-0.4531566, 51.4709959], // London
      getTargetPosition: (f) => f.geometry.coordinates,
      getSourceColor: [0, 128, 200],
      getTargetColor: [200, 0, 80],
      getWidth: 1,
    }),
  ];

  return (
    <DeckGL initialViewState={initialViewState} controller={true} layers={layers}>
      <StaticMap mapStyle="mapbox://styles/mapbox/light-v9" />
    </DeckGL>
  );
};

export default IndexPage;
