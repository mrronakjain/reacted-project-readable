import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Snackbar } from "react-redux-snackbar";

import { fetchCategories } from "../utils/api_thunk_wrapper.js";

import "./App.css";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div className="App">
        <Snackbar />
        <Nav category={this.props.category} />
        <Route exact path="/" render={() => <div></div>} />
      </div>
    );
  }
}

function mapStateToProps({ category, post, comment }) {
  return {
    category: Object.keys(category).map(name => ({
      ...category[name]
    }))
  };
}

export default connect(mapStateToProps)(App);
