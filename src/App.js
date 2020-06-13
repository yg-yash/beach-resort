import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./components/Rooms/Rooms";
import SingleRoom from "./components/Rooms/SingleRoom";
import Error from "./components/Error";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />

        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
