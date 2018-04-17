import React, { Component } from "react";
import serializeForm from "form-serialize";
import { showSnack } from "react-redux-snackbar";
import { Button, Dropdown, Icon, NavItem } from "react-materialize";

import {
  getComments,
  onUpVotePost,
  onDownVotePost,
  onDeletePost,
  onAddComment,
  onUpVoteComment,
  onDownVoteComment,
  onDeleteComment
} from "../utils/api_thunk_wrapper.js";

import {
  sortByUpVoteComments,
  sortByDownVoteComments,
  sortByAscTimeComments,
  sortByDescTimeComments
} from "../actions";

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

  onSubmitComment = postId => e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    const comment = {
      id: Math.random()
        .toString(36)
        .substr(-8),
      parentId: postId,
      timestamp: Date.now(),
      body: values.comment,
      author: values.author,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    };
    this.props.dispatch(onAddComment(comment));
    this.showSnackBar(
      Math.random()
        .toString(36)
        .substr(-8),
      "Comment added!"
    );
    e.target.comment.value = "";
    e.target.author.value = "";
  };

  onUpVoteCommentEvent = (id, parentId) => {
    this.props.dispatch(onUpVoteComment(id, parentId));
  };

  onDownVoteCommentEvent = (id, parentId) => {
    this.props.dispatch(onDownVoteComment(id, parentId));
  };

  onDeleteCommentEvent = (id, parentId) => {
    this.props.dispatch(onDeleteComment(id, parentId));
    this.showSnackBar(
      Math.random()
        .toString(36)
        .substr(-8),
      "Comment deleted!"
    );
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
                    <div className="col m12">
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
                      <div className="card grey lighten-3">
                        <div className="card-content">
                          <h4 className="card-title">Leave a Comment:</h4>
                          <form onSubmit={this.onSubmitComment(postId)}>
                            <div className="row">
                              <div className="input-field col s12">
                                <input
                                  id="author"
                                  type="text"
                                  className="validate"
                                  name="author"
                                  required
                                />
                                <label htmlFor="author">Author</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <textarea
                                  id="comment"
                                  className="materialize-textarea"
                                  name="comment"
                                />
                                <label htmlFor="comment">Comment</label>
                              </div>
                            </div>
                            <button className="btn btn-black">SUBMIT</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    {this.props.comment.hasOwnProperty(postId) && (
                      <div className="col m12">
                        <hr />
                        <div className="row">
                          <div className="col s12 m8 l8">
                            <h5 className="teal-text lighten-2">Comments</h5>
                          </div>
                          <div className="col s12 m4 l4 right-align">
                            <Dropdown
                              trigger={
                                <Button>
                                  Sort By
                                  <Icon right className="hide-on-small-only">
                                    arrow_drop_down
                                  </Icon>
                                </Button>
                              }
                            >
                              <NavItem
                                onClick={() =>
                                  this.props.dispatch(
                                    sortByUpVoteComments({ parentId: post.id })
                                  )
                                }
                              >
                                UpVotes
                              </NavItem>
                              <NavItem
                                onClick={() =>
                                  this.props.dispatch(
                                    sortByDownVoteComments({
                                      parentId: post.id
                                    })
                                  )
                                }
                              >
                                DownVotes
                              </NavItem>
                              <NavItem
                                onClick={() =>
                                  this.props.dispatch(
                                    sortByAscTimeComments({ parentId: post.id })
                                  )
                                }
                              >
                                Asc Time
                              </NavItem>
                              <NavItem
                                onClick={() =>
                                  this.props.dispatch(
                                    sortByDescTimeComments({
                                      parentId: post.id
                                    })
                                  )
                                }
                              >
                                Desc Time
                              </NavItem>
                            </Dropdown>
                          </div>
                        </div>
                        <hr />
                        <div>
                          {this.props.comment[postId] &&
                            this.props.comment[postId].map(comment => {
                              if (!comment.deleted) {
                                return (
                                  <div className="media" key={comment.id}>
                                    <a className="left" href="">
                                      <img
                                        className="media-object circle"
                                        src="http://placehold.it/64x64"
                                        alt=""
                                      />
                                    </a>
                                    <div className="media-body">
                                      <h5 className="media-heading">
                                        {comment.author}
                                        <small className="right">
                                          {new Date(
                                            comment.timestamp
                                          ).toLocaleString()}
                                        </small>
                                      </h5>
                                      <p>{comment.body}</p>
                                      <div className="row">
                                        <div className="col m12">
                                          <button
                                            className="btn btn-black btn-small pull-s2"
                                            disabled={true}
                                          >
                                            Vote Score : {comment.voteScore}
                                          </button>
                                          <span>&nbsp;</span>
                                          <button
                                            type="button"
                                            className="btn btn-black btn-small"
                                            onClick={() =>
                                              this.onUpVoteCommentEvent(
                                                comment.id,
                                                postId
                                              )
                                            }
                                          >
                                            <Icon>thumb_up</Icon>
                                          </button>
                                          <span>&nbsp;</span>
                                          <button
                                            type="button"
                                            className="btn btn-black btn-small"
                                            onClick={() =>
                                              this.onDownVoteCommentEvent(
                                                comment.id,
                                                postId
                                              )
                                            }
                                          >
                                            <Icon>thumb_down</Icon>
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-black btn-small right"
                                            onClick={() =>
                                              this.onDeleteCommentEvent(
                                                comment.id,
                                                postId
                                              )
                                            }
                                          >
                                            <Icon>delete</Icon>
                                          </button>
                                          <span className="right">&nbsp;</span>
                                          <a
                                            href={`/editComment/${comment.id}`}
                                            className="btn btn-black btn-small right"
                                            role="button"
                                          >
                                            <Icon>edit</Icon>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <hr />
                                  </div>
                                );
                              }
                              return null;
                            })}
                        </div>
                      </div>
                    )}
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
