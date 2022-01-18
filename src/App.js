import React from "react";
import { Route } from "react-router-dom";
import Home from "./component/Home/Home";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Home />} />
      </div>
    );
  }
}

export default App;
