import React, { Component } from "react";
import { Col, Icon, Row } from "react-materialize";

import "./App.css";

class AllPosts extends Component {
  render() {
    return (
      <div>
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
