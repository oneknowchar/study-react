import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbars = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => navigate('/average')}
              className={location.pathname === '/average' ? 'active' : ''}
            >
              Average
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate('/board')}
              className={location.pathname === '/board' ? 'active' : ''}
            >
              board
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
