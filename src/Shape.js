import React from 'react';

function Shape (props) {
  const {
    color = 'Blue',
    type = 'Square'
  } = props;

  const style = {
    height: '50px',
    width: '50px',
    backgroundColor: color,
    borderRadius: type === 'Circle' ? '9999999px' : '0px'
  }
  return <div style={style} className="shape"></div>
}

export default Shape;
