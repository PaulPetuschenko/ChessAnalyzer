import React, { Component } from 'react'
import { Nav, Navbar, Form, InputGroup, Button } from 'react-bootstrap'
import './Navigation.scss';
import { NavLink } from 'react-router-dom'

export class Navigation extends Component {
    render() {
      return (
        <Navbar bg="dark" expand="lg" variant="dark" className="Navigation">
          <Navbar.Brand>ChessAnalysis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><NavLink to="/">Board</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/database">Database</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/info">Info</NavLink></Nav.Link>
            </Nav>
            <Form className="NavForm" inline>
              <Form.File
                id="pgnFile" 
                label="PGN"
                data-browse="Browse"
                custom
              />
            </Form>
            <InputGroup className="NavInput">
              <Form.Control type="text" placeholder="Chess.com Username" />
              <InputGroup.Append>
                <Button variant="light">Load</Button>
              </InputGroup.Append>
            </InputGroup>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }