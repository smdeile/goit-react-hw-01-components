import React, { Fragment } from 'react';

const Controls = ({ step, handleIncrement, handleDecrement }) => (
  <Fragment>
    <button type="button" onClick={handleIncrement}>
      Increment by {step}
    </button>
    <button type="button" onClick={handleDecrement}>
      Decrement by {step}
    </button>
  </Fragment>
);
export default Controls;
