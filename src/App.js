import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState(
    [
      {id: 1, title: 'Javascript', body: 'Description'},
      {id: 2, title: 'Javascript 2', body: 'Description'},
      {id: 3, title: 'Javascript 3', body: 'Description'}
    ]
  )
  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
