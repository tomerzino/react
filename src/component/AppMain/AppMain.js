import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home";
import AppAcount from "../AppAcount/AppAcount";

class AppMain extends Component {
  render() {
    return (
      <div>
        {/*HEDER - START*/}
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/appacount" component={AppAcount} />
          </div>
        </nav>
        {/*HEDER - END*/}

        <hr />
      </div>
    );
  }
}


export default AppMain                                                                                                                                                                                                                                                                                                                                          ;
