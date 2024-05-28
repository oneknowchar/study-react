import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, titleFunc] = useState(['남자코트 추천', '강남 우동 맛집', '고양이와 강아지']);
  let [likeNum, likeNumFunc] = useState(0);
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div>
        <h4 className="black-nav">ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        titleFunc(copy);
      }}>가나다순 정렬</button>
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자코트 추천';
        titleFunc(copy);
      }}>글 수정</button>
      <div className='list'>
        <h4>{title[0]} <span onClick={()=>{likeNumFunc(likeNum+1)}}>👍</span> {likeNum} </h4>
        <p>2월 17일 발행</p> 
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(modal = !modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal ? <Modal/> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
