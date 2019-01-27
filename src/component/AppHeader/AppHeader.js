import React, { Component } from "react";
import { connect } from "react-redux";
import "../AppHeader.css";
import AppAcount from "../AppAcount/AppAcount";
import { BrowserRouter, Route, Link } from 'react-router-dom';


class AppHeader extends Component {
  render() {
    if (this.props.name == "Guest") {
      return (
        <header className="header">
          <h2>Header</h2>
          <img
            src="http://www.vincegolangco.com/wp-content/uploads/2010/12/batman-for-facebook.jpg"
            alt="default"
          />
          <h3>Hello {this.props.name}</h3>

          <button>
            <Link to="/appacount">my account</Link>
          </button>
          <button type="button">products</button>
        </header>
      );
    } else {
      return (
        <header className="header">
          <h2>Header</h2>
          <img
            src="http://www.vincegolangco.com/wp-content/uploads/2010/12/batman-for-facebook.jpg"
            alt="default"
          />
          <h3>Hello {this.props.name}</h3>
          <button>
            <Link to="/appacount">my account</Link>
          </button>  
          <button type="button">products</button>
          <button type="button">my cart</button>
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

const reduxApp = connect(mapStateToProps)(AppHeader);
export default reduxApp;
