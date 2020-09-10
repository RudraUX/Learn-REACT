//import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = () => {
  const buttonText = { text: 'Click Me!' };
  const btnStyle = { backgroundColor: 'blue', color: '#fff' };
  const labelText = 'Enter Name :';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={btnStyle}>{buttonText.text}</button>
    </div>
  );
};
//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
