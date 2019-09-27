import React from "react";

class Nav extends React.Component {
  render() {
    return <h5 className="card-title my-4">{this.props.name}</h5>;
  }
}
export default Nav;
