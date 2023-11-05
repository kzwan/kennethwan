import React from "react";
import Typing from "./components/typing";
import CircleText from "./components/circleText";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="App">
        <Typing/>
        {/* <CircleText /> */}
      </div>
      <div style={{ position: 'absolute', marginTop: '50vh' }}>
        <CircleText/>
      </div>
      <p>hello</p>
    </div>
  );
}


export default App;
