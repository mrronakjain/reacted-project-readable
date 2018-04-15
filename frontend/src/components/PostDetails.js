import React, { Component } from "react";
import { showSnack } from "react-redux-snackbar";
import { Icon } from "react-materialize";

import {
  getComments,
  onUpVotePost,
  onDownVotePost,
  onDeletePost
} from "../utils/api_thunk_wrapper.js";

import "./App.css";

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(getComments(this.props.postId));
  }

  showSnackBar = (id, label) => {
    this.props.dispatch(
      showSnack(id, {
        label: label,
        timeout: 3000,
        button: { label: "OK" }
      })
    );
  };

  onUpVotePostEvent = id => {
    this.props.dispatch(onUpVotePost(id));
  };

  onDownVotePostEvent = id => {
    this.props.dispatch(onDownVotePost(id));
  };

  onDeletePostEvent = id => {
    this.props.dispatch(onDeletePost(id));
    this.showSnackBar(
      Math.random()
        .toString(36)
        .substr(-8),
      "Post deleted!"
    );
    window.location.href = "/";
  };

  render() {
    const postId = this.props.postId;
    return (
      <div>
        {this.props.post.map(post => {
          if (post.id === postId) {
            if (!post.deleted) {
              return (
                <div key={post.id}>
                  <div className="container row">
                    <div className="col m7">
                      <h3 className="teal-text lighten-2">{post.title}</h3>
                      <div className="row">
                        <div className="col m12">
                          <span className="teal-text lighten-2 right">
                            <Icon left>turned_in</Icon>
                            {post.category}
                          </span>
                          <span className="left teal-text lighten-2">
                            <Icon left>comment</Icon>
                            {this.props.comment.hasOwnProperty(postId)
                              ? this.props.comment[postId].length
                              : 0}
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col m12">
                          <span className="left">
                            <Icon left>person</Icon>
                            &nbsp;{post.author}&nbsp;&nbsp;
                          </span>
                          <span className="right">
                            <Icon left>access_time</Icon>
                            &nbsp;{new Date(post.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col m12">
                          <button
                            className="btn btn-black btn-small pull-s2"
                            disabled={true}
                          >
                            Vote Score : {post.voteScore}
                          </button>
                          <span>&nbsp;</span>
                          <button
                            type="button"
                            className="btn btn-black btn-small"
                            onClick={() => this.onUpVotePostEvent(post.id)}
                          >
                            <Icon>thumb_up</Icon>
                          </button>
                          <span>&nbsp;</span>
                          <button
                            type="button"
                            className="btn btn-black btn-small"
                            onClick={() => this.onDownVotePostEvent(post.id)}
                          >
                            <Icon>thumb_down</Icon>
                          </button>
                          <button
                            type="button"
                            className="btn btn-black btn-small right"
                            onClick={() => this.onDeletePostEvent(post.id)}
                          >
                            <Icon>delete</Icon>
                          </button>
                          <span className="right">&nbsp;</span>
                          <a
                            href={`/editPost/${post.id}`}
                            className="btn btn-black btn-small right"
                            role="button"
                          >
                            <Icon>edit</Icon>
                          </a>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col m12">{post.body}</div>
                      </div>
                      <hr />
                    </div>
                    <div className="col m5" />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="container row">
                  <div className="col m7">
                    <p className="red-text lighten-1">Post is Deleted!</p>
                  </div>
                </div>
              );
            }
          }
          return null;
        })}
      </div>
    );
  }
}

export default Post;
