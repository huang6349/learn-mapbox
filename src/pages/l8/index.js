import * as React from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { useShapefile } from './hooks';
import { Spin } from './components';

const initialViewState = {
  latitude: 30.6,
  longitude: 114.3,
  zoom: 12,
  bearing: 0,
  pitch: 45,
};

const IndexPage = function() {
  const [shapefiles, loading] = useShapefile('shapefile.zip');

  const layers = [
    new GeoJsonLayer({
      id: 'water',
      data: shapefiles['water'],
      stroked: false,
      filled: true,
      extruded: false,
      getFillColor: [10, 20, 35],
      getRadius: 100,
      getLineWidth: 1,
    }),
    new GeoJsonLayer({
      id: 'road',
      data: shapefiles['road'],
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 0.5,
      getLineColor: [18, 35, 48],
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 10,
    }),
    new GeoJsonLayer({
      id: 'building',
      data: shapefiles['building'],
      extruded: true,
      wireframe: false,
      opacity: 0.5,
      getElevation: ({ properties: { floor } = {} } = {}) => floor * 3,
      getFillColor: ({ properties: { floor } = {} } = {}) => {
        return floor * 4 > 50 ? [255, 255, 255] : [60, 140, 200];
      },
    }),
  ];

  return (
    <DeckGL initialViewState={initialViewState} controller={!0} layers={layers}>
      <Spin loading={loading} />
      <StaticMap reuseMap={!0} mapStyle={require('@/assets/mapbox.json')} />
    </DeckGL>
  );
};

export default IndexPage;
