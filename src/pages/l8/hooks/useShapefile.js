import * as React from 'react';
import ShapefilesWorkerize from '@/worker/shapefiles.workerize';

const useShapefile = (file) => {
  const [shapefiles, setShapefiles] = React.useState({});
  const [loading, setLoading] = React.useState(!1);

  React.useEffect(() => {
    setLoading(!0);
    const instance = ShapefilesWorkerize();
    console.log('1', new Date());
    instance.fetch(file).then((shapefiles) => {
      console.log('3', new Date());
      instance.terminate();
      if (!shapefiles) return;
      setLoading(!1);
      setShapefiles(shapefiles);
    });
    return () => instance.terminate();
  }, [file]);

  return [shapefiles, loading];
};

export default useShapefile;
