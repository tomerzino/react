import React, { Component } from "react";
import AppFooter from "./AppFooter/AppFooter";
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import AppAcount from "./AppAcount/AppAcount";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppHeader />
          <AppMain/>
          <AppFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
