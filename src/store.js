// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // Import the counter reducer.
import postReducer from './features/postSlice';

const initialState = {}; // You can set your initial state here if needed.

const reducer = (state = initialState, action) => {
  // Your reducers will be added here when you create slices using createSlice function.
  return state;
};

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store.
    post: postReducer,
  },
});


export default store;
