import * as React from 'react';
import router from 'umi/router';

const IndexPage = function() {
  React.useEffect(() => {
    router.push({ pathname: '/l1', query: { k: new Date().getTime() } });
  }, []);

  return <React.Fragment />;
};

export default IndexPage;
