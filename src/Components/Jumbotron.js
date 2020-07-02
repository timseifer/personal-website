import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../Assets/waves.gif';
import Typing from 'react-typing-animation';

const Styles = styled.div`

.Jumbo{
    background: url(${Logo}) no-repeat fixed bottom;
    background-size cover;
    color: #efefef;
    height: 275px;
    position: relative;
    z-index: -2;    
}

.overlay{
    margin: auto;
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

`;


export const Jumbotron = () => (
    
    <Styles>
    <Jumbo fluid className="Jumbo">
        <div className="overlay"></div>
        <Container>
        <h1><Typing>
    <span>Welcome</span>
  </Typing></h1>
        <div> <Typing>
    <span>Hello, my name is Tim Seifert</span>
    <Typing.Delay ms={1000} />
    <Typing.Backspace count={29} />
    <Typing.Delay ms={1000} />
    <span>I'm a student at Tufts University</span>
    <Typing.Delay ms={1000} />
    <Typing.Backspace count={33} />
    <span>this was made using React-typing-animation</span>
    <Typing.Delay ms={1000} />
    <Typing.Backspace count={42} />
    <Typing.Delay ms={1000} />
    <span>Okay I'll stop annoying you</span>
    <Typing.Backspace count={27} />
    <Typing.Delay ms={1000} />
    <span>Hello, my name is Tim Seifert</span>
  </Typing></div>
        </Container>    
    </Jumbo>    
    </Styles>
    
)

