import React from 'react';
import '../../../src/pages/Todo.css';
import ListItem from './ListItem';

const List = () => {
  return (
    <div className="TodoList">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default List;
