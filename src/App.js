import React from "react";

// function App() {
//   return (
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("click");
//         }}
//       />
//     </div>
//   );
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
