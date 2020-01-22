import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ top, left, right }) => {
  return (
    <React.Fragment>
      <div className='col-md-12'>
        <h2>{top}</h2>
      </div>
      <div className='row mb2'>
        <div className='col-md-3'>{left}</div>
        <div className='col-md-9'>{right}</div>
      </div>
    </React.Fragment>
  );
};

Row.propTypes = {
  top: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
