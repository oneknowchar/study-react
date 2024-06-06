import React from 'react';
import '../../../src/pages/Todo.css';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
