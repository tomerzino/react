import React, { Component } from "react";
import { connect } from "react-redux";

class AppLogin extends Component {
login = () => {};

validuser = userName=>{
    let valid_user=True;
        // check if input is bigger than 3
        if (userName.length > 3) {
          valid_user=False;
        }
        return valid_user

};

validpassword = password=>{
    let valid_pass=True;

};

  render() {
    return (
      <div>
          <script>
              
          </script>
      </div>
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

const reduxApp = connect(mapStateToProps)(AppLogin);
export default reduxApp;
