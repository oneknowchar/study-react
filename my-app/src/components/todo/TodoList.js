import React from 'react';
import '../../../src/pages/Todo.css';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos && todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)}
    </div>
  );
};

export default TodoList;
