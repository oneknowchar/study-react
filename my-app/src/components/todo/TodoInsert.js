import React, { useCallback, useState } from 'react';
import '../../../src/pages/Todo.css';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  //useCallback : 자식 컴포넌트의 props로 전달해주는 함수들은 useCallback을 사용해주면 재실행이 일어나는 횟수가 줄어들기 때문에 더 효율적인 앱을 만들 수 있다
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
