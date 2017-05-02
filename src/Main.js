// Whenever you write jsx in your file, you must
// import the react package, because jsx is converted
// to React.createElement function calls
import React from 'react';
import HelloWorld from './HelloWorld';
// if the import that is without braces will get the value that is on the right
// hand side of 'export default'
import Square, { BlueSquare } from './Square';
import OrangeRectangle from './OrangeRectangle';

function Main (props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

// for example below we could create a component that renders a font awesome icon
// then we could render that icon wherever we want
  return (
    <div style={style} className="main">
      <BlueSquare />
      <HelloWorld name="Jon Snow" />
      <HelloWorld name="Daenerys Targaryan" />
      <HelloWorld name="Cersei Lannister" />
      <OrangeRectangle />
      <Square color="LimeGreen" />
      <Square color="Lavender" />

    </div>
  );
}

export default Main;
