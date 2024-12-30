import { useEffect, useState } from "react";
import Task from "../module/Task";

function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    if (data.status === "success") setTodos(data.data.todos);
  };

  return (
    <div className="home-page">
      <div className="home-page--todo">
        <p>Todo</p>
        <Task data={todos.todo} />
      </div>
      <div className="home-page--inProgress">
        <p>In Progress</p>
        <Task data={todos.inProgress} />
      </div>
      <div className="home-page--review">
        <p>Review</p>
        <Task data={todos.review} />
      </div>
      <div className="home-page--done">
        <p>Done</p>
        <Task data={todos.done} />
      </div>
    </div>
  );
}

export default HomePage;
