import { CREATE_POST } from './types';

const initialState = {
  posts: [
    {title: 'post 1', date: '1609132789560'}, 
    {title: 'post 2', date: '1609932789699'}
  ],
  fetchedPosts: []
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state, 
        posts: [...state.posts, action.payload]
      };
  
    default:
      return state;
  }
}