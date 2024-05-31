import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAge} from "./../store/userSlice.js";
import { addCount, minusCount} from "./../store/cartSlice.js";

function Cart(){
  let cart = useSelector( state => state.cart);
  let user = useSelector( state => state.user);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>{user.name}의 장바구니</h1>
      <button onClick={()=>{dispatch(updateAge(1))}}>age up : {user.age}</button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((obj, i)=>
              <tr key={i}>
                <td>{i}</td>
                <td>{obj.name}</td>
                <td>{obj.count}</td>
                <td>
                  <button onClick={()=>{ dispatch(addCount(obj.id))}}>🔺</button>
                  <button onClick={()=>{ dispatch(minusCount(obj.id))}}>🔻</button>
                </td>
              </tr>
          )

        }
      </tbody>
    </Table>
    </div>
  );
}

export default Cart;

