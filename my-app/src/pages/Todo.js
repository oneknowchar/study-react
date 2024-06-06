import React, { useCallback, useRef, useState } from 'react';
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

  //React가 만든 전역 저장소에 저장되기 때문에 함수를 재 호출하더라도 마지막으로 업데이트한 current 값이 유지
  //일반 변수라면 호출될 때마다 4
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };

      setTodos([...todos, todo]);
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <div className="test">
      <a href="https://react-icons.github.io/react-icons/">
        react-icons.github.io
      </a>
      <div className="Todo">
        <div className="app-title">일정 관리</div>
        <div className="content">
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
