import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Navibar = () => {
    return (
        <nav>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </Nav>
          </Navbar>          
         
        </nav>
        
    )
}

export default Navibar;