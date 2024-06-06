import React from 'react';
import './Todo.css';
import TodoInsert from '../components/todo/TodoInsert.js';
import TodoList from '../components/todo/TodoList.js';
const Todo = ({ children }) => {
  console.log(children);
  return (
    <div className="test">
      <a href="https://react-icons.github.io/react-icons/">
        react-icons.github.io
      </a>
      <div className="Todo">
        <div className="app-title">일정 관리</div>
        <div className="content">
          <TodoInsert />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
