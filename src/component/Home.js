import React, { Component } from "react";
import { connect } from "react-redux";
import "./AppHeader.css";
import Info from "./model/Info";

class Home extends Component {
  render() {
      return  (
          <div>
          <h1> Welcome to our book store </h1>
          <img src="https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="book" />
          <h2> {Info.address} {Info.country} </h2>
          
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

const reduxApp = connect(mapStateToProps)(Home);
export default Home;
