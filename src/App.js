import React, { Component } from "react";

// class App extends Component() {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onChange={() => {
//             console.log("click");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Neko />
      <Neko />
      <Neko />
    </div>
  );
};

const Neko = () => {
  return <div>nyan</div>;
};

export default App;
