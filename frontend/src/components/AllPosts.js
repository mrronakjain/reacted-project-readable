import React, { Component } from "react";
import { Button, Col, Dropdown, Icon, NavItem, Row } from "react-materialize";

import {
  sortByUpVotePosts,
  sortByDownVotePosts,
  sortByAscTimePosts,
  sortByDescTimePosts
} from "../actions";

import "./App.css";

class AllPosts extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="btn-group pull-right">
          <Dropdown
            trigger={
              <Button>
                Sort By <Icon right>arrow_drop_down</Icon>
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
                      <p className="small">
                        <Icon>person</Icon>
                        &nbsp;{post.author}&nbsp;&nbsp;
                        <Icon>access_time</Icon>
                        &nbsp;{new Date(post.timestamp).toLocaleString()}
                      </p>
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
