import React from "react";

class Comments extends React.Component {
  // componentDidMount=()=>{
  //   if(this.props.commentFlag) 
  // }

  render() {
    return (
      
      <div className={(this.props.commentFlag ? 'show' : 'hidden')}>
        <span>Comments</span>
        <hr />
      </div>
      // <div className="m-2">
      //   {this.props.list.map(i => {
      //     return (
      //       // <p key={i} className="mt-3">
      //       //   {i}
      //       //   <hr />
      //       // </p>

      //     );
      //     // GIt trial
      //   })}
      // </div>
    );
  }
}

export default Comments;
