import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("Hi!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
};

const Cat = () => <div>Meow!</div>;

export default App;
