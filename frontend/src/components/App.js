import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Snackbar } from "react-redux-snackbar";

import {
  getCategories,
  getPostsAndComments
} from "../utils/api_thunk_wrapper.js";

import "./App.css";
import Nav from "./Nav";
import HomeView from "./HomeView";
import AddPost from "./AddPost";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
    this.props.dispatch(getPostsAndComments());
  }

  render() {
    return (
      <div className="App">
        <Snackbar />
        <Nav category={this.props.category} />
        <Route
          exact
          path="/"
          render={() => (
            <HomeView
              dispatch={this.props.dispatch}
              categories={this.props.category}
              posts={this.props.post}
              comments={this.props.comment}
            />
          )}
        />
        <Route
          path="/addPost"
          render={({ match }) => (
            <AddPost
              dispatch={this.props.dispatch}
              categories={this.props.category}
            />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps({ category, post, comment }) {
  return {
    category: Object.keys(category).map(name => ({
      ...category[name]
    })),
    post,
    comment
  };
}

export default connect(mapStateToProps)(App);
