import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

  let {id} = useParams();
  let item = props.shoes.find((x)=> x.id === Number(id));
  let [count, countFunc] = useState(0);
  let [alert, alertFunc] = useState(true)
  let [priceAlert, priceAlertFunc] = useState(false)
  let [price, setPrice] = useState(0);
  //It works after rendering HTML, Use it when some works take long time
  //Goal : Show HTML first, Rapid service experience for user
  useEffect(()=>{
    let a = setTimeout(()=>{alertFunc(false)}, 1000 * 60 * 10);

    return ()=>{ clearTimeout(a); }
  },[]);

  useEffect(()=>{
    if(isNaN(price))  priceAlertFunc(true);
    
    return ()=>{ priceAlertFunc(false); }
  },[price]);


  return (
    <div className="container">
      {
        alert === true ? <div className="alert alert-warning"> <Timer></Timer> 이내 구매시 할인 </div>  : null
      }

      <div className="row">
        <div className="col-md-6">
          <img alt="1" src={item.image} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <div className="m-1">
            <input type="text" onChange={(e)=>{ setPrice(e.target.value)}} placeholder="input price..." value={price}/>
            <span onClick={()=>{countFunc(++count)}}  className="pointer">👍</span> {count}
            { 
              priceAlert === true ? <div className="alert alert-danger m-2"> 경고 : 숫자만 입력하세요. </div>  : null
            }
          </div>
          <button className="btn btn-danger">주문하기</button>
          
        </div>
      </div>
    </div> 
  )
}

function Timer(props){
  const [timer, setTimer] = useState('00:00:00');

  const getCurrentTime = () =>{
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, 0);
    const min = String(date.getMinutes()).padStart(2, 0);
    const sec = String(date.getSeconds()).padStart(2, 0);

    setTimer(`${hour}:${min}:${sec}`);
  };
  
    setInterval(() => {
      getCurrentTime();
    }, 1000);
  
  return (
    <span>{timer}</span>
  )
}

export default Detail;