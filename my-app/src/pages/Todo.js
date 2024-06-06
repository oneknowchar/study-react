import React from 'react';
import './Todo.css';
const Todo = ({ children }) => {
  console.log(children);
  return (
    <div className="test">
      <a href="https://react-icons.github.io/react-icons/">
        react-icons.github.io
      </a>
      <div className="Todo">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Todo;
