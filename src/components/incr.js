import React from 'react';
import { connect } from 'react-redux';

let Incr = ({ value, increment, storeKey }) => {
  return (
    <div>
      <button onClick={() => { increment(); }}>Increment</button><span>{value}</span>
    </div>
  );
};

Incr = connect(
  (state, props) => {
    return {
      value: state.incrValues['incrValue'+props.storeKey]
    };
  },
  (dispatch, props) => {
    return {
      increment: () => {
        dispatch({type: 'INCREMENT'+props.storeKey});
      }
    };
  }
)(Incr);

export default Incr;
