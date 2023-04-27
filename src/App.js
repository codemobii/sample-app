import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "" || description === "") {
      alert("Please enter todo item");
      return;
    }

    setTodos([
      {
        title: text,
        description: description,
      },
      ...todos,
    ]);
    setText("");
    setDescription("");
  };

  function handleSetIndex(index, todoItem) {
    setActiveIndex(index);
    setText(todoItem.title);
    setDescription(todoItem.description);
  }

  const handleEdit = (e) => {
    e.preventDefault();

    if (text === "" || description === "") {
      alert("Please enter todo item");
      return;
    }

    const newTodos = [...todos];
    newTodos[activeIndex].title = text;
    newTodos[activeIndex].description = description;

    setTodos(newTodos);
    setText("");
    setDescription("");
    setActiveIndex(null);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos].filter((item, i) => i !== index);

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="app-containter">
        <h2>My TODO</h2>
        <form onSubmit={activeIndex === null ? handleSubmit : handleEdit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Todo title"
          />
          <br />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Todo description"
          />
          <br />
          <button type="submit" className="submit-button">
            {activeIndex === null ? "Add todo" : "Edit todo"}
          </button>
        </form>

        <div className="todo-list">
          {todos.map((item, index) => {
            return (
              <div className="todo-item">
                <p>
                  {item.title} - {item.description}
                </p>

                <div className="list-buttons">
                  <button
                    onClick={() => {
                      handleSetIndex(index, item);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
