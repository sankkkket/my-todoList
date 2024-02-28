import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const placeHolder = "Add your Items 🖉 ";

  // const Imagess = <img src ="./icons8-delete-25.png"/>

  return (
    <div className="container">
      <h1 className="h1-div" >To-Do List 📝</h1> 
      <div className="innerContent">
            <input className="input"
              type="text" placeholder={placeHolder}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button className="btn" onClick={handleAddTodo}>➕</button>
      </div>
       <div className="listItem">
            <ul className="inputItems">
              {todos.map((todo, index) => (
                <li key={index}>
                <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleToggleTodo(index)}
                    />
                    <span
                      style={{
                        marginRight: "10px",
                        textDecoration: todo.checked ? "line-through" : "none",
                      }}
                    >
                    {todo.text}
                    </span>
                    <button className="delBtn"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    🗑️
                  </button>
                  </li>
                  
            ))}
          </ul>
        </div>
         
    </div>
  );
};

export default TodoList;
