import React from "react";
import { Icon } from "react-materialize";

import AllCategories from "./AllCategories";
import AllPosts from "./AllPosts";

export default function HomeView(props) {
  return (
    <div className="container">
      <AllCategories categories={props.categories} posts={props.posts} />
      <h3 className="teal-text lighten-2">
        <Icon small>list</Icon> Posts
      </h3>
      <AllPosts
        dispatch={props.dispatch}
        posts={props.posts}
        comments={props.comments}
      />
    </div>
  );
}
