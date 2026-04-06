import { useState } from 'react'
import './App.css'

const initialItems = [
  { id: 1, todo: "Complete Lab 11", status: "incomplete" },
  { id: 2, todo: "Review JSX Events and State", status: "incomplete" }
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [newTodo, setNewTodo] = useState("");

  const handleClick = (id) => {
    setItems(items.map(item => {
      if (item.id == id) {
        return { ...item, status: "complete"};
      } else {
        return item;
      }
    }))
  }

  const handleAddTask = () => {
    if (newTodo.trim() === "") return;

    const newItem = {
      id: items.length + 1,
      todo: newTodo,
      status: "incomplete"
    };

    setItems([...items, newItem]);
    setNewTodo("");
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input type="text" placeholder='Enter a task' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/><button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {
          items.map(
            function (item) {
              return <li key={item.id} style={{ textDecoration: item.status === "complete" ? "line-through" : "none" }}>{item.todo} <button style={{fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer"}} onClick={() => handleClick(item.id)}>X</button></li>
            }
          )
        }
      </ul>
    </div>
  )
}

export default App
