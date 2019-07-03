import * as React from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { PhongMaterial } from '@luma.gl/core';
import { PolygonLayer } from '@deck.gl/layers';
import { TripsLayer } from '@deck.gl/geo-layers';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [-74.05, 40.7, 8000],
});

const lightingEffect = new LightingEffect({ ambientLight, pointLight });

const material = new PhongMaterial({
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [60, 64, 70],
});

const initialViewState = {
  longitude: -74,
  latitude: 40.72,
  zoom: 13,
  pitch: 45,
  bearing: 0,
};

const IndexPage = function() {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    function animate() {
      const loopLength = 1800;
      const animationSpeed = 30;
      const timestamp = Date.now() / 1000;
      const loopTime = loopLength / animationSpeed;
      setTime(((timestamp % loopTime) / loopTime) * loopLength);
      animate.prototype.animationFrame = window.requestAnimationFrame(animate);
    }
    animate();
    return () => window.cancelAnimationFrame(animate.prototype.animationFrame);
  }, []);

  const layers = [
    new TripsLayer({
      id: 'trips',
      data: require('@/assets/data/trips.json'),
      getPath: (d) => d.segments,
      getColor: (d) => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]),
      opacity: 0.3,
      widthMinPixels: 2,
      rounded: true,
      trailLength: 180,
      currentTime: time,
    }),
    new PolygonLayer({
      id: 'buildings',
      data: require('@/assets/data/buildings.json'),
      extruded: true,
      wireframe: false,
      opacity: 0.5,
      getPolygon: (f) => f.polygon,
      getElevation: (f) => f.height,
      getFillColor: [74, 80, 87],
      material,
    }),
  ];

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
      effects={[lightingEffect]}
    >
      <StaticMap reuseMaps mapStyle="mapbox://styles/mapbox/dark-v9" preventStyleDiffing={!0} />
    </DeckGL>
  );
};

export default IndexPage;
