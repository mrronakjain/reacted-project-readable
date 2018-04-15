import React from "react";
import { Col, Card, Icon, Row } from "react-materialize";

export default function AllCategories(props) {
  return (
    <Row>
      <h3 className="teal-text lighten-2">
        <Icon small>apps</Icon> Categories
      </h3>
      <hr />
      {props.categories.map(category => (
        <Col l={4} m={6} s={12} key={category.name}>
          <Card
            className="teal lighten-3"
            textClassName="white-text"
            title={category.name}
          >
            <Row className="center-align">
              <Col m={6} s={6}>
                <a
                  href={`/${category.name}/posts`}
                  className="btn btn-black"
                  role="button"
                  title="View Posts"
                >
                  <Icon>visibility</Icon>
                </a>
              </Col>
              <Col m={6} s={6}>
                <a
                  href={`/addPost`}
                  className="btn btn-black"
                  role="button"
                  title="Add Post"
                >
                  <Icon>add_box</Icon>
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
