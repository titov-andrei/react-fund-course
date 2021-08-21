import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  function inc() {
    setLikes(likes + 1);
  }
  function dec() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}

export default App;
