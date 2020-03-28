import React, { Component } from "react";
import propTypes from "prop-types";

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
  const profiles = [
    { name: "Taroaa", age: 10 },
    { name: "aaa", age: 1 }
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      name = {props.name}, and age={props.age}
    </div>
  );
};

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number
};

export default App;
