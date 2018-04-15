import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "react-materialize";

import AllPosts from "./AllPosts";

class CategoryPosts extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="teal-text lighten-2">
            <Icon small>list</Icon> Posts
          </h3>
          <h3 className="teal-text lighten-2">
            <Icon small>turned_in</Icon> {this.props.categoryName}
          </h3>
          <AllPosts
            dispatch={this.props.dispatch}
            posts={this.props.posts}
            comments={this.props.comments}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post, comment }, ownProps) {
  return {
    posts: post.filter(post => post.category === ownProps.categoryName),
    comments: comment,
    categoryName: ownProps.categoryName
  };
}

export default connect(mapStateToProps)(CategoryPosts);
