import React, { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";

const App = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  // Edit functionality
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // Load data from local storage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const savedCompletedTodos = JSON.parse(localStorage.getItem("completedTodos")) || [];
    setTodos(savedTodos);
    setCompletedTodos(savedCompletedTodos);
  }, []);

  // Save todos and completedTodos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  // Add Todo
  const handleAddTodo = () => {
    if (title !== "" && description !== "") {
      const newTodo = {
        title,
        description,
      };
      setTodos((prev) => [...prev, newTodo]);
      setTitle("");
      setDescription("");
    } else {
      alert("Title/Description cannot be empty");
    }
  };

  // Delete Todo
  const handleDeleteTodo = (delete_index) => {
    const updatedTodos = todos.filter((_item, index) => index !== delete_index);
    setTodos(updatedTodos);
  };

  // Mark Todo as Completed
  const handleCompletedTodos = (index) => {
    const date = new Date();
    const completedOn = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

    const completedTodo = {
      ...todos[index],
      completedOn,
    };

    setCompletedTodos((prev) => [...prev, completedTodo]);
    handleDeleteTodo(index); // Remove from active todos
  };

  // Delete Completed Todo
  const handleCompletedDelete = (index) => {
    const updatedCompletedTodos = completedTodos.filter(
      (item, idx) => idx !== index
    );
    setCompletedTodos(updatedCompletedTodos);
  };

  // Update Todo
  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === currentEditItem
        ? { ...todo, title: updatedTitle, description: updatedDescription }
        : todo
    );

    setTodos(updatedTodos);
    setCurrentEditItem(null); // Exit edit mode
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  return (
    <div className="app">
      <h1>My To-Do</h1>
      <div className="todo-wrapper">
        {/* Add Todo */}
        <div className="todo-inputs">
          <div className="todo-input-item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter your Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Enter Task Description ..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              className="primaryBtn"
              onClick={handleAddTodo}
            >
              Add Todo
            </button>
          </div>
        </div>

        <hr />

       
        <div className="btn-area">
          <button
            className={`secondaryBtn ${!isCompleted && "active"}`}
            onClick={() => setIsCompleted(false)}
          >
            Todos
          </button>
          <button
            className={`secondaryBtn ${isCompleted && "active"}`}
            onClick={() => setIsCompleted(true)}
          >
            Completed
          </button>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {!isCompleted
            ? todos.map((item, idx) => {
                if (currentEditItem === idx) {
                  return (
                    <div className="edit-wrapper" key={idx}>
                      <input
                        type="text"
                        placeholder="Update Title"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                      />
                      <textarea
                        placeholder="Update Description"
                        rows={4}
                        value={updatedDescription}
                        onChange={(e) =>
                          setUpdatedDescription(e.target.value)
                        }
                      ></textarea>
                      <button
                        className="primaryBtn"
                        onClick={handleUpdateTodo}
                      >
                        Update
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <div className="todo-list-item" key={idx}>
                      <div className="task">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="icons">
                        <AiOutlineDelete
                          className="icon delete"
                          onClick={() => handleDeleteTodo(idx)}
                        />
                        <GiCheckMark
                          className="icon check"
                          onClick={() => handleCompletedTodos(idx)}
                        />
                        <AiOutlineEdit
                          className="icon edit"
                          onClick={() => {
                            setCurrentEditItem(idx);
                            setUpdatedTitle(item.title);
                            setUpdatedDescription(item.description);
                          }}
                        />
                      </div>
                    </div>
                  );
                }
              })
            : completedTodos.map((item, idx) => (
                <div className="todo-list-item" key={idx}>
                  <div className="task">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <i>Completed On: {item.completedOn}</i>
                  </div>
                  <div className="icons">
                    <AiOutlineDelete
                      className="icon delete"
                      onClick={() => handleCompletedDelete(idx)}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default App;
