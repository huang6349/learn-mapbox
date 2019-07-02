import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './index.css';

const IndexPage = function() {
  const [viewport, setViewport] = React.useState({
    longitude: 114.3,
    latitude: 30.6,
    zoom: 12,
  });

  return (
    <div className={styles['wrapper']}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
      />
    </div>
  );
};

export default IndexPage;
