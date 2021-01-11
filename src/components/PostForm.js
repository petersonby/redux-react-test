import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import { Alert } from './Alert';

const PostForm = ({createPost, alert, showAlert}) => {
  const inputEl = useRef(null);
  const [title, setTitle] = useState('');

  function submitBtn(e) {
    e.preventDefault();

    if(!title.length) {
      return showAlert('Empty post title!');
    }
    
    const newPost = {
      title,
      date: Date.now().toString()
    }

    createPost(newPost);

    setTitle('');
  }

  return (
    <>
    {alert && <Alert text={alert}/>}

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
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    alert: state.app.alert
  };
}

const mapDispatchToProps = {
  createPost,
  showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);