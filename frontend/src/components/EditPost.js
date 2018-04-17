import React, { Component } from "react";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import { showSnack } from "react-redux-snackbar";

import { editBodyPost, editTitlePost } from "../actions";
import { editPost } from "../utils/api_thunk_wrapper.js";

class EditPost extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.post.length !== nextProps.post.length) {
      this.props.dispatch(
        editTitlePost({
          title: nextProps.post[0] ? nextProps.post[0].title : "loading"
        })
      );
      this.props.dispatch(
        editBodyPost({
          body: nextProps.post[0] ? nextProps.post[0].body : "loading"
        })
      );
    }
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

  onEditPost = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    const postEdit = {
      title: values.title,
      body: values.body
    };
    this.props.dispatch(editPost(this.props.post[0].id, postEdit));
    this.showSnackBar(
      Math.random()
        .toString(36)
        .substr(-8),
      "Post Updated!"
    );
  };

  setEditBodyPost = e => {
    const body = e.target.value;
    this.props.dispatch(editBodyPost({ body }));
  };

  setEditTitlePost = e => {
    const title = e.target.value;
    this.props.dispatch(editTitlePost({ title }));
  };

  render() {
    return (
      <div className="container row">
        <div className="col m6">
          <h4>Edit Post</h4>
          <form onSubmit={this.onEditPost}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  name="title"
                  placeholder="Title"
                  required
                  value={
                    this.props.editTitlePost
                      ? this.props.editTitlePost.title
                      : "loading..."
                  }
                  onChange={this.setEditTitlePost}
                />
                <label htmlFor="title" className="active">
                  Title
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="body"
                  className="materialize-textarea"
                  name="body"
                  placeholder="Body"
                  value={
                    this.props.editBodyPost
                      ? this.props.editBodyPost.body
                      : "loading..."
                  }
                  onChange={this.setEditBodyPost}
                />
                <label htmlFor="body" className="active">
                  Body
                </label>
              </div>
            </div>
            <button className="btn btn-black">Save Chages!</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post, editBodyPost, editTitlePost }, ownProps) {
  return {
    post: post.filter(post => post.id === ownProps.postId),
    editBodyPost,
    editTitlePost
  };
}

export default connect(mapStateToProps)(EditPost);
