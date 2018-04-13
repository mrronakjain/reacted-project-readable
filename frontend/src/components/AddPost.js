import React, { Component } from "react";

import serializeForm from "form-serialize";
import { showSnack } from "react-redux-snackbar";

import { addPost } from "../utils/api_thunk_wrapper.js";

class AddPost extends Component {
  showSnackBar = (id, label) => {
    this.props.dispatch(
      showSnack(id, {
        label: label,
        timeout: 3000,
        button: { label: "OK" }
      })
    );
  };

  handleSubmitPost = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    const post = {
      id: Math.random()
        .toString(36)
        .substr(-8),
      timestamp: Date.now(),
      title: values.title,
      body: values.body,
      author: values.author,
      category: values.category,
      voteScore: 1,
      deleted: false
    };
    this.props.dispatch(addPost(post));
    window.location.href = "/";
    this.showSnackBar(
      Math.random()
        .toString(36)
        .substr(-8),
      "Post added!"
    );
  };

  render() {
    return (
      <div className="container row">
        <div className="col m6">
          <form onSubmit={this.handleSubmitPost}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  name="title"
                  required
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
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
                <select
                  name="category"
                  className="browser-default validate"
                  required
                >
                  <option value="" disabled selected>
                    Choose a category
                  </option>
                  {this.props.categories.map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="author"
                  className="materialize-textarea"
                  name="body"
                />
                <label htmlFor="body">Body</label>
              </div>
            </div>
            <button className="btn btn-black">Add Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;
