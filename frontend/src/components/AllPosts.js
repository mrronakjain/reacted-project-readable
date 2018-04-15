import React, { Component } from "react";
import { Button, Col, Dropdown, Icon, NavItem, Row } from "react-materialize";

import {
  onUpVotePost,
  onDownVotePost,
  onDeletePost
} from "../utils/api_thunk_wrapper.js";

import {
  sortByUpVotePosts,
  sortByDownVotePosts,
  sortByAscTimePosts,
  sortByDescTimePosts
} from "../actions";

import "./App.css";

class AllPosts extends Component {
  onDeletePostEvent = id => {
    this.props.dispatch(onDeletePost(id));
  };

  onUpVotePostEvent = id => {
    this.props.dispatch(onUpVotePost(id));
  };

  onDownVotePostEvent = id => {
    this.props.dispatch(onDownVotePost(id));
  };
  render() {
    return (
      <div>
        <hr />
        <Row>
          <Col s={6} m={6} l={9}>
            <a href={`/addPost`} className="btn btn-black" role="button">
              Add post{" "}
              <Icon right className="hide-on-small-only">
                add_box
              </Icon>
            </a>
          </Col>
          <div className="col s6 m6 l3 right-align">
            <Dropdown
              trigger={
                <Button>
                  Sort By{" "}
                  <Icon right className="hide-on-small-only">
                    arrow_drop_down
                  </Icon>
                </Button>
              }
            >
              <NavItem
                onClick={() =>
                  this.props.dispatch(sortByUpVotePosts(this.props.posts))
                }
              >
                UpVotes
              </NavItem>
              <NavItem
                onClick={() =>
                  this.props.dispatch(sortByDownVotePosts(this.props.posts))
                }
              >
                DownVotes
              </NavItem>
              <NavItem
                onClick={() =>
                  this.props.dispatch(sortByAscTimePosts(this.props.posts))
                }
              >
                Asc Time
              </NavItem>
              <NavItem
                onClick={() =>
                  this.props.dispatch(sortByDescTimePosts(this.props.posts))
                }
              >
                Desc Time
              </NavItem>
            </Dropdown>
          </div>
        </Row>
        <hr />
        <ul>
          {this.props.posts &&
            this.props.posts.map(post => {
              if (!post.deleted) {
                return (
                  <div key={post.id}>
                    <li>
                      <Row>
                        <Col s={12} m={9}>
                          <h4>
                            <a href={`/${post.category}/${post.id}`}>
                              {post.title}
                            </a>
                          </h4>
                        </Col>
                        <Col s={12} m={3}>
                          <button
                            className="btn btn-black btn-small pull-s2"
                            readOnly
                          >
                            Vote Score : {post.voteScore}
                          </button>
                        </Col>
                      </Row>
                      <p className="row">
                        <span className="left"><Icon left>person</Icon>
                        &nbsp;{post.author}&nbsp;&nbsp;</span>
                        <span className="left"><Icon left>access_time</Icon>
						&nbsp;{new Date(post.timestamp).toLocaleString()}
						</span>
                      </p>
                      <div className="row">
                        <button
                          type="button"
                          className="btn btn-black btn-small"
                          onClick={() => this.onUpVotePostEvent(post.id)}
                        >
                          Upvote
                          <Icon right>thumb_up</Icon>
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-black btn-small"
                          onClick={() => this.onDownVotePostEvent(post.id)}
                        >
                          Downvote
                          <Icon right>thumb_down</Icon>
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-black btn-small"
                        >
                          {this.props.comments.hasOwnProperty(post.id)
                            ? this.props.comments[post.id].length
                            : 0}
                          <Icon right>comment</Icon>
                        </button>
                        <button
                          type="button"
                          className="btn btn-black btn-small right"
                          onClick={() => this.onDeletePostEvent(post.id)}
                        >
                          Delete
                          <Icon right>delete</Icon>
                        </button>
                        <span className="right">&nbsp;</span>
                        <a
                          href={`/editPost/${post.id}`}
                          className="btn btn-black btn-small right"
                          role="button"
                        >
                          Edit
                          <Icon right>edit</Icon>
                        </a>
                      </div>
                    </li>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
        </ul>
      </div>
    );
  }
}

export default AllPosts;
