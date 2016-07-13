import React from 'react';
import { connect } from 'react-redux';

let Dncr = ({ value, decrement }) => {
  return (
    <div>
      <button onClick={() => { decrement(); }}>Decrement</button><span>{value}</span>
    </div>
  );
};

Dncr = connect(
  (state) => {
    return {
      value: state.decrValue
    };
  },
  (dispatch) => {
    return {
      decrement: () => {
        dispatch({type: 'DECREMENT'});
      }
    };
  }
)(Dncr);

export default Dncr;
