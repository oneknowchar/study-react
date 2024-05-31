import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Detail from './pages/Detail.js';
import Event from './pages/Event.js';
import Cart from './pages/Cart.js'
import axios from 'axios';
function App() {

  let [shoes, shoesFunc] = useState(data);
  let [axiosdata, axiosdataFunc] = useState(2);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="" onClick={()=>{ navigate('/')}}>Shopping</Navbar.Brand>
          <Nav className="me-auto">
            {/* 
              //use <Link/> for Out going URL Such as Google or Naver

              <Link to="/" className='nav-link'>홈</Link> 
              <Link to="/detail" className='nav-link'>상세페이지</Link> 

              //else onClick(()=>{navigate('/url')}); 
              //to prevet Re-rendering html
            */}
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link> 
            <Nav.Link onClick={()=>{ navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>

            <Button variant="light" onClick={()=>{
              let copy = [...shoes];
              copy.sort((a, b) => b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 1);
              shoesFunc(copy);
            }}>가나다 정렬
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ 
          <div>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {
                  shoes ? shoes.map((shoes, i)=>{
                    return (
                      <Card shoes={shoes} key={i}></Card>
                    )
                  }) : null
                }
              </div>
              {
                axiosdata > 3 ? null :
                  <button onClick={()=>{
                    axios.get(`https://codingapple1.github.io/shop/data${axiosdata}.json`)
                    .then((res)=>{
                      console.log(res.data);
                      let copy = [ ...shoes, ...res.data];

                      axiosdataFunc(axiosdata+1);

                      shoesFunc(copy);
                    })
                    .catch(()=>{
                      alert('no more items')
                    })
                    .finally(()=>{
                      console.log('finally')
                    })
                  }}>아이템 추가</button>
            }
            </div>
          </div>
        } /> 
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
        <Route path='/event' element={<Event/>}>
          <Route index element={<Navigate to='one' />} /> {/* 기본 설정으로 'one'으로 리다이렉트 */}
          <Route path='one' element={<div>양배추 즙</div>} />
          <Route path='two' element={<div>호박 즙</div>} />
        </Route>
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='*' element={<div>404 Error</div>} />
      </Routes>

    </div>
  );
}

//
function Card(props){
  let navigate = useNavigate();
  
  return (
    <div className="col-md-4 pointer" onClick={()=>{navigate(`/detail/${props.shoes.id}`)}}>
      <img alt={props.shoes.id} src={props.shoes.image} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default App;
