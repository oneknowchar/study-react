import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Detail from './pages/Detail.js';
import Event from './pages/Event.js';
function App() {

  let [shoese] = useState(data);
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
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event')}}>Event</Nav.Link>
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
                  shoese ? shoese.map((shoese, i)=>{
                    return (
                      <Card shoese={shoese}></Card>
                    )
                  }) : null
                }
              </div>
            </div>
          </div>
        } /> 
        <Route path="/detail" element={ <Detail/> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
        <Route path='/event' element={<Event/>}>
          <Route index element={<Navigate to='one' />} /> {/* 기본 설정으로 'one'으로 리다이렉트 */}
          <Route path='one' element={<div>양배추 즙</div>} />
          <Route path='two' element={<div>호박 즙</div>} />
        </Route>
        <Route path='*' element={<div>404 Error</div>} />
      </Routes>

    </div>
  );
}

//
function Card(props){
  return (
    <div className="col-md-4">
      <img alt={props.shoese.id} src={props.shoese.image} width="80%" />
      <h4>{props.shoese.title}</h4>
      <p>{props.shoese.content}</p>
    </div>
  );
}

export default App;
