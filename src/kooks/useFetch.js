import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setTodos] = useState([]);

  useEffect(() => {
    update();
  }, []);

  function update() {
    fetch("http://localhost:1337/api/posts")
      .then((res) => res.json())
      .then((todo) => {
        setTodos(todo.data);
      });
  }

  return { data };
};

export default useFetch;
