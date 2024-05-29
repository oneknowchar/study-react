import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, titleFunc] = useState(['남자코트 추천', '강남 우동 맛집', '고양이와 강아지']);
  let [likeNum, likeNumFunc] = useState([0,5,0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputVal, inputValFunc] = useState('');
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

      {
        title.map(function(obj, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(modal = !modal)
                setModalTitle(i)
                console.log(modalTitle)
              }}>
                {title[i]} 
                <span onClick={(e)=>{
                  e.stopPropagation(); 
                  let copy = [...likeNum];
                  copy[i] = copy[i]+1;
                  likeNumFunc(copy);
                }}>👍</span> {likeNum[i]} 
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <input type='text' onChange={ (e)=>{inputValFunc(e.target.value); console.log(inputVal)}} />

      {
        modal ? <Modal 
        color="gold" 
        title={title}
        modalTitle={modalTitle}
        setTitle={()=>{
          let copy  = [...title];
          copy[0] = '여자 코트 추천12';
          titleFunc(copy);
        }} /> : null
      }

    </div>
  );
}

function Modal(props ) {
  return (
    <div className="modal" style={{background : props.color}}  >
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.setTitle}>글수정</button>
    </div>
  )
}

export default App;
