import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiMdbook } from 'react-icons/si';
import {BsFillCartFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import { ChangeEvent } from 'react';
import { useState } from 'react';

interface NavbarProps {
  tuKhoaTimKiem:string ;
  setTuKhoaTimKiem:(tuKhoa:string)=> void;
}
function NavBar({tuKhoaTimKiem, setTuKhoaTimKiem}:NavbarProps) {
  
  const [tuKhoaTamThoi, setTuKhoaTamThoi]= useState('');

  const onSearchInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setTuKhoaTamThoi (e.target.value);   
   
  }

  const handleSearch =()=>{
      setTuKhoaTimKiem(tuKhoaTamThoi);
  }
  
  
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><SiMdbook></SiMdbook></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Form.Control
              value={tuKhoaTamThoi}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onSearchInputChange}
            />
            <Button variant="outline-success" type='button' onClick={handleSearch}>Search</Button>
          </div>
 
          <BsFillCartFill/>
          <BsFillPersonFill/>
          
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default NavBar;