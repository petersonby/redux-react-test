import React from 'react';

const Post = ({post}) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      {/* <time>{new Date(+post.date).toString()}</time> */}
    </div>
  )
};

export default Post;