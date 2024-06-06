import React from 'react';
import '../../../src/pages/Todo.css';
import { MdAdd } from 'react-icons/md';

const Insert = () => {
  return (
    <form className="TodoInsert">
      <input type="text" placeholder="할 일을 입력하세요." />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default Insert;
