import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div id="btnHolder">
        <button className="btn btn-primary m-1">Like</button>
        <button
          className="btn btn-primary m-1"
          onClick={this.props.handleComment}
        >
          Comment
        </button>
        <button className="btn btn-primary m-1">Share</button>
      </div>
    );
  }
}
export default Button;
