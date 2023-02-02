import React from 'react'
import {  Container, Form, Navbar } from 'react-bootstrap'
import logo from "../images/logo.png"
const Navs = ({getSearch}) => {
  const onSearch = (word)=>{
    getSearch(word)
  }
  return (

      <Navbar expand="lg" className='nav-style mb-4'>
      <Container>
        <Navbar.Brand href="#">
  <a href="/">
  <img style={{width:"45%"}} src={logo}/>
  </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Form  className="d-flex nav-form">
            <Form.Control style={{borderRadius:"20px"}}
              type="search"
              placeholder="ابحث"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{onSearch(e.target.value)}}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}

export default Navs
