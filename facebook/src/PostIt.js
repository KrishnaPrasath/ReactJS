import React from "react";

const PostIt = () => {
  return (
    <div class="input-group my-3">
      <div class="input-group-prepend">
        <span class="input-group-text">With textarea</span>
      </div>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
  );
};

export default PostIt;
