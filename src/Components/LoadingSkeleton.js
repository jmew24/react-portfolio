import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = ({ type = 'text', count = 1, width, height }) => {
  const getSkeletonStyle = () => {
    switch (type) {
      case 'text':
        return { width: width || '100%', height: height || '20px' };
      case 'circle':
        return { width: width || '50px', height: height || '50px', borderRadius: '50%' };
      case 'image':
        return { width: width || '100%', height: height || '200px' };
      default:
        return { width: width || '100%', height: height || '20px' };
    }
  };

  return (
    <Skeleton
      count={count}
      style={getSkeletonStyle()}
      baseColor="#e0e0e0"
      highlightColor="#f5f5f5"
    />
  );
};

LoadingSkeleton.propTypes = {
  type: PropTypes.oneOf(['text', 'circle', 'image']),
  count: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LoadingSkeleton; 