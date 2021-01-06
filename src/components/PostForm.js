import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

const PostForm = ({createPost}) => {
  const inputEl = useRef(null);
  const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');

  function submitBtn(e) {
    e.preventDefault();

    if(!title.length) {
      return;
    }
    
    const newPost = {
      title,
      date: Date.now().toString()
    }

    createPost(newPost);

    setTitle('');
  }

  return (
    <form>
      <input 
        value={title} 
        ref={inputEl} 
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        id="postTitle" 
        placeholder="enter your title"
        required
      />
      <button onClick={submitBtn}>Submit post</button>
    </form>
  )
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);