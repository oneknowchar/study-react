import { Button, Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import './App.css';
import { useState, useEffect } from 'react';
import data from './data.js'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Detail from './pages/Detail.js';
import Event from './pages/Event.js';
import Cart from './pages/Cart.js'
import axios from 'axios';
import { useQuery } from 'react-query';
function App() {
  //react-bootstrap offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //router
  let navigate = useNavigate();

  let [shoes, shoesFunc] = useState(data);
  let [axiosdata, axiosdataFunc] = useState(2);
  let [watched, setWatched] = useState([]);
  
  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
  )

  console.log('se', result);

  useEffect(()=>{
    let watched = JSON.parse(localStorage.getItem('watched'));
    
    if(!watched){
      watched = [];
      localStorage.setItem('watched', JSON.stringify(watched));
    }

    setWatched(watched);
  }, []);

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
            }}>Order by Name
            </Button>
            
            <>
              <Button className='btn-dark ml-2' onClick={handleShow}>
                Recent view
              </Button>

              <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Recent view items </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {
                    watched.length === 0 
                    ? <div className="alert alert-warning"> no watched item </div> 
                    :watched.map((item, i) =>{
                      return (
                        <div key={i}>{item.title}</div>
                      )
                    })
                    
                  }
                </Offcanvas.Body>
                {
                  watched.length > 0 
                  ? <button className="btn btn-danger" onClick={()=>{
                    setWatched([]);
                    localStorage.setItem('watched', JSON.stringify([]));
                  }}>Reset</button>
                  : null
                }
              </Offcanvas>
            </>
          </Nav>
          <Nav className='ms-auto'>
            { 
              result.isLoading ? '로딩중' : result.data.name
            }
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
        <Route path="/detail/:id" element={ <Detail shoes={shoes} watched={watched} setWatched={setWatched}/> } />
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
