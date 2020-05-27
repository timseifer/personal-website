import React from 'react';
import styled from 'styled-components'
import './Layout.css'
import {Spring, useSpring, animated, config} from 'react-spring/renderprops'


export const Layout = (value) => {
    return(
    <Spring
        from = {{opacity: 0, marginTop: -100}}
        to = {{opacity: 1, marginTop: 0}} >
    { props => (
        <div style = {props}>
            <div
                class ="centering-text"
                 >
                  {value.children}
             </div>
        
        </div>        
    )}
    </Spring>
)

}
