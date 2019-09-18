import React from 'react';
//import '../App.css';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;
