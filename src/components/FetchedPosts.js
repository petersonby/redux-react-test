import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import { Loader } from './Loader';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if(loading) {
    return <Loader />;
  }

  if(!posts.length) {
    return <button
            onClick={() => dispatch(fetchPosts())}
          >Load Posts
    </button>
  }

  return posts.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts;