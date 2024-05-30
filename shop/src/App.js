import { Button, Navbar, Container, Nav } from 'react-bootstrap';

import './App.css';
import { useState } from 'react';
import data from './data.js'
function App() {
  let [shoese] = useState(data);
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
