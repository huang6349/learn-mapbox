import * as React from 'react';
import * as PropTypes from 'prop-types';
import lottie from 'lottie-web';
import classnames from 'classnames';
import styles from './index.css';

const SpinView = function({ loading }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (el === null) return;
    const anim = lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: !0,
      autoplay: !0,
      animationData: require('@/assets/animation.json'),
    });
    return () => anim.destroy();
  }, [ref]);

  return (
    <div className={classnames(styles['spin'], { [`${styles['hidden']}`]: !loading })}>
      <div className={styles['animation']} ref={ref} />
      <span className={styles['text']}>正在加载地图资源，请稍等</span>
    </div>
  );
};

SpinView.propTypes = {
  loading: PropTypes.bool.isRequired,
};

SpinView.defaultProps = {
  loading: !1,
};

export default SpinView;
