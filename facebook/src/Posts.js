import React from "react";
import Post from "./Post";


class Posts extends React.Component {
  render() {
    // console.log(this.props.posts[0]);
    return (
      <div>
        <Post post={this.props.posts[0]} className="post" />
        {/* <Comments list={this.props.post.list} /> */}
        
      </div>
    );
  }
}

export default Posts;
