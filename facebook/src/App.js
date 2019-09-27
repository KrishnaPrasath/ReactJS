import React from "react";
import Nav from "./Nav";

import Posts from "./Posts";
// import Post from "./Post";
const axios = require("axios");
const navData = "NewsFeed";

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>
        this.setState({ posts: [...this.state.posts, response.data] })
      )
      // .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    // console.log("app", this.state.posts);
    return (
      <div className="container px-5">
        <Nav name={navData} />
        {this.state.posts.map(i => (
          <Posts posts={this.state.posts} />
        ))}
      </div>
    );
  }
}

export default App;
