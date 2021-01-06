import React from 'react';

const Post = ({post}) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <time>{new Date(+post.date).toString()}</time>
    </div>
  )
};

export default Post;