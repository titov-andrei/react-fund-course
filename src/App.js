import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <form>
        <MyInput value={"sdfsdfsfsdfsdf"}placeholder={"Название поста"} />
        <MyInput />
        <MyInput value={"123"} placeholderText="sdlkfjsldfkj6546546sdlfjsdlf" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
