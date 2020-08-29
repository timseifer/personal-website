import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'
import SocialFollow from './SocialFollow.js';

const Styles = styled.div`
    .navbar {
        background-color: #d3d3d3;
    }
    
    
        .navbar-brand, .navbar-nav .nav-link {
            color: #000033;
            
            &:hover {
                color: white;
            }
            
        }
        
.center-navbar {
  width:30%;
  margin-left: 35%;
}

.button-right{
    margin-left;
}
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar expand="lg">
        <Navbar.Brand href="/personal-website/#/">Tim Seifert</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar">
                <Nav.Item><Nav.Link href="/personal-website/#/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/personal-website/#/about/">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/personal-website/#/contact/">Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/personal-website/#/resume/">Resume</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/personal-website/#/code/">Code</Nav.Link></Nav.Item>
            </Nav>             
    </Navbar.Collapse>
    <Nav className = "button-right">
    <SocialFollow />  
    </Nav> 
    </Navbar>
    </Styles>
)