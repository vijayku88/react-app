import React from 'react';
import '../App.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function Header() {
    return (
        <Navbar color="light" light expand="md">
            Header Works
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;
