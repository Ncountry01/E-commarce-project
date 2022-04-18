import { Link, useNavigate } from "react-router-dom";
import {Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import './navbar.css';
import React from "react";


const NavbarApp =() => {
  
const navigate = useNavigate();

  const user=(localStorage.getItem('user-info'));

  const logout =() => {
  localStorage.clear();
  navigate('/register')
  }


return (
  <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand to="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/">Home</Link>
      {
        localStorage.getItem("user-info") ?
        <>
      <Link to="/add">ADD PRODUCTS</Link>
      <Link to="/product">PRODUCT LIST</Link>
      </>
      :
      <>
      <Link to="/login">SignIn</Link>
      <Link to="/register">SignUp</Link>
     </>
}
    </Nav>

    { 
localStorage.getItem('user-info') ?
 <Nav>     
    <NavDropdown title={user.name}  >

      <NavDropdown.Item >Profile</NavDropdown.Item>
       <NavDropdown.Item onClick={logout} >LogOut</NavDropdown.Item>
     </NavDropdown>
    </Nav>
    : 
    null
}
    </Container>
  </Navbar>
  </>
)
}

export default NavbarApp;