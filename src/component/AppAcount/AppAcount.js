import React, { Component } from "react";
import { connect } from "react-redux";
import "../AppHeader.css";
import AppLogin from "../AppLogin/AppLogin";
import { BrowserRouter, Route, Link } from "react-router-dom";


class AppAcount extends Component {
  render() {
    if (this.props.name == "Guest") {
      return (
          <div>
        <header className="header">
          <button type="button">register</button>
          {/* <button type="button">login</button> */}
          <button>
            <Link to="/appacount/login">login</Link>
          </button>
        </header>
        <Route path="/appacount/login" component={AppLogin} />
        </div>
      );
    } else {
      return (
        <header className="header">
          <button type="button">logout</button>
        </header>
      );
    }
  }
}

const mapStateToProps = state => {
  // filter only the reqiered props that we will use in the App component
  // then we can access them inside the class as: this.props.count & this.props.name
  return {
    //   count: state.bookReducer.count,
    name: state.userReducer.user.userName
  };
};

const reduxApp = connect(mapStateToProps)(AppAcount);
export default reduxApp;
