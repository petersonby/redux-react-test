import { combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postReducer
})