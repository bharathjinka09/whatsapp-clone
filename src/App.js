import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* <h1>Whatsapp Clone</h1> */}
      <div className="app__body">
          {/* sidebar */}
          <Sidebar />
          {/* chat */}
      </div>
    </div>
  );
}

export default App;
