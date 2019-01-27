import React, { Component } from "react";
import { connect } from "react-redux";
import "../AppHeader.css"

class AppFooter extends Component {
  render() {
      return (
        <footer>
  <p>{new Date().getFullYear()
} - all right reserved- ovner luvy</p>
</footer>        
      );

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

const reduxApp = connect(mapStateToProps)(AppFooter);
export default reduxApp;
