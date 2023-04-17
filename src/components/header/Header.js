import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/img1/logo.jpg"
import "./header.css"

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" >
                <NavLink to="/" className="p-0 text-decoration-none text-light mx-2" >
                    <img className='logo_png' src={logo} alt='/' />
                </NavLink>
                <Container className='items_1'>
                <NavLink to="/" className=" text-decoration-none text-light mx-5">Home</NavLink>
                    <NavLink to="/" className=" text-decoration-none text-light">About</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-blue mx-5">Login</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Features</NavLink>
                    </Nav>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header
