import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let num = 0;
function Detail(props) {

  //It works after rendering HTML, Use it when some works take long time
  //Goal : Show HTML first, Rapid service experience for user
  useEffect(function(){
    num++;
    console.log('hello', num)
  })
  let {id} = useParams();
  let [count, countFunc] = useState(0);
  let item = props.shoes.find((x)=> x.id === Number(id));
  
  return (
    <div className="container">
      <button onClick={()=>{countFunc(++count)}}>click</button> {count}
      <div className="row">
        <div className="col-md-6">
          <img alt="1" src={item.image} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;