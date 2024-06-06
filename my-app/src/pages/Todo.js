import React, { useState } from 'react';
import './Todo.css';
import TodoInsert from '../components/todo/TodoInsert.js';
import TodoList from '../components/todo/TodoList.js';

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: false,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: false,
    },
    {
      id: 3,
      text: '일정관리 앱 제작',
      checked: true,
    },
  ]);

  return (
    <div className="test">
      <a href="https://react-icons.github.io/react-icons/">
        react-icons.github.io
      </a>
      <div className="Todo">
        <div className="app-title">일정 관리</div>
        <div className="content">
          <TodoInsert />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
