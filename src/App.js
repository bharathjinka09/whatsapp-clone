import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
      {/* <h1>Whatsapp Clone</h1> */}
      <div className="app__body">
      <Router>
        <Sidebar />
      <Switch>
      <Route path="/rooms/:roomId">
        <Chat />
      </Route>
      <Route path="/">
        <Chat />
      </Route>
      </Switch>
      </Router>

      </div>
    </div>
  );
}

export default App;
