import React from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { islogin } from "../Login/LoginForm";
import { link } from "../Login/LoginForm";
import { user } from "../Login/LoginForm";

function Navs2() {
    return (
        <Navbar style={{ backgroundColor: '#0c0b19' }} expand="lg" className="navBar">
            <Container fluid>
                <Navbar.Brand className="text-main">School Management System </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: 'gold' }} />

            </Container>
        </Navbar>
    );
}

export default Navs2;
