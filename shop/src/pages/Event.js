import { Link, Outlet } from "react-router-dom";

function Detail(props) {
  return (
    <div className="container">
      <Link to='one'>이벤트 1</Link>
      <Link to='two'>이벤트 2</Link>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div> 
  );
}

export default Detail;