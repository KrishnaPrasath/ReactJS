import React from "react";
import Nav from "./Nav";
import Button from "./Button";
import Comments from "./Comments";
// const user = "Krishna Prasath";

class Post extends React.Component {
  state = {
    commentFlag: false
  };
  handleComment = () => {
    // console.log("comment button clicked"); //button get clicked and method swithces the commentFlag value
    if (this.state.commentFlag) {
      this.setState({ commentFlag: false });
      console.log(this.state.commentFlag);
    } else {
      this.setState({ commentFlag: true });
      console.log(this.state.commentFlag);
    }
  };
  render() {
    // console.log(this.props.post);
    return (
      <div className="card-body card">
        {this.props.post.map(i => {
          return (
            <div className="card card-body post">
              <Nav name={i.title} />
              <p key={i.id} className="input-group card-text">
                {i.body}
              </p>
              <Button handleComment={this.handleComment} />
              <Comments commentFlag={this.state.commentFlag} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
