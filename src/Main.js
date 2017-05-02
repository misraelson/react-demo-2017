// Whenever you write jsx in your file, you must
// import the react package, because jsx is converted
// to React.createElement function calls
  import React from 'react';
  import HelloWorld from './HelloWorld';

  function Main (props) {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

    return (
      <div style={style} className="main">
        <HelloWorld name="Kippy" />
        <HelloWorld name="Jon Snow" />
        <HelloWorld name="Turin" />
      </div>
    );
  }

  export default Main;
