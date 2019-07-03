import * as React from 'react';
import { Tooltip, Tag } from 'antd';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './index.css';

const list = [];

for (let i = 0; i <= 10; i++) {
  list.push(i + 1);
}

const IndexPage = function() {
  const [viewport, setViewport] = React.useState({
    longitude: 114.3,
    latitude: 30.6,
    zoom: 12,
    bearing: 0,
    pitch: 50, // 设置倾斜角度，使地图有 3D 的效果
  });

  return (
    <div className={styles['wrapper']}>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker longitude={114.3} latitude={30.6} offsetLeft={-40}>
          <Tag color="#108ee9" style={{ cursor: 'pointer' }}>
            自定义弹出层
          </Tag>
        </Marker>
        <Marker longitude={114.2} latitude={30.6} offsetLeft={-40}>
          <Tooltip title={`用户位置标记`}>
            <Tag color="#2db7f5" style={{ cursor: 'pointer' }}>
              Tooltip&nbsp;提示信息
            </Tag>
          </Tooltip>
        </Marker>
        <Popup longitude={114.3} latitude={30.6} offsetTop={-10} closeButton={!1}>
          <br />
          <video width={240} controls>
            <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4" />
            <source src="https://www.runoob.com/try/demo_source/movie.ogg" type="video/ogg" />
            您的浏览器不支持 HTML5 video 标签。
          </video>
        </Popup>
      </ReactMapGL>
    </div>
  );
};

export default IndexPage;
