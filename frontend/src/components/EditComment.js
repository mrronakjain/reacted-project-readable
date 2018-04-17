import React, { Component } from "react";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import { showSnack } from "react-redux-snackbar";

import { editBodyComment } from "../actions";
import { onGetSingleComment, editComment } from "../utils/api_thunk_wrapper";

class EditComment extends Component {
  componentDidMount() {
    this.props.dispatch(onGetSingleComment(this.props.commentId));
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

  onEditComment = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    const commentEdit = {
      timeStamp: Date.now(),
      body: values.comment
    };
    this.props.dispatch(editComment(this.props.commentId, commentEdit));
    this.showSnackBar(
      Math.random()
        .toString(36)
        .substr(-8),
      "Comment Updated!"
    );
  };

  setEditBodyComment = e => {
    const body = e.target.value;
    this.props.dispatch(editBodyComment({ body }));
  };

  render() {
    return (
      <div className="container row">
        <div className="col m6">
          <p className="lead">Edit Comment</p>
          <form onSubmit={this.onEditComment}>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="comment"
                  className="materialize-textarea"
                  name="comment"
                  value={this.props.comment.body}
                  onChange={this.setEditBodyComment}
                  placeholder="Comment"
                />
                <label htmlFor="comment" className="active">
                  Comment
                </label>
              </div>
            </div>
            <button className="btn btn-black">Save Changes!</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ onGetComment }, ownProps) {
  return {
    comment: onGetComment,
    commentId: ownProps.commentId
  };
}

export default connect(mapStateToProps)(EditComment);
