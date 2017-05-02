import React from 'react';

function Square (props) {
  // having a default color
  const { color = 'Blue'} = props;

  const style = {
    height: '50px',
    width: '50px',
    backgroundColor: props.color
  }
  return <div style={style} className="blue square"></div>
}

export function BlueSquare (props) {
  // using {...props} inside a JSX element will pass all the properties
  // of props as props of that element PHEW!
  return <Square color="blue" {...props} />
}

export default Square;
