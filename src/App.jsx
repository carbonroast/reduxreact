// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Make sure to import the necessary hooks.
import { increment, decrement } from './features/counterSlice';
import { selectAllPosts } from './features/postSlice';
import AddPostForum from './AddPostForum';

function App() {

  const counterValue = useSelector((state) => state.counter.value); // Make sure to use the correct slice name here.
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const renderPost = posts.map(post => (
    <article key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </article>
  ))



  return (
    <div>
      <div>
        <h1>Counter: {counterValue}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <div>
        <AddPostForum/>
        <h2>Posts</h2>
        {renderPost}
      </div>
    </div>

  );
}

export default App;
