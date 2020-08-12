import React, {Component} from 'react';
import styled from 'styled-components';


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "grey" : "white"};
  color: ${props => props.primary ? "white" : "grey"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const onEmailClick = () => {
     window.open('mailto:timothy.seifert@tufts.edu');
}

export const Contact = () => (
<React.Fragment>
    <div>
        <h2>Contact Me</h2>
        <p>240-329-7141</p>
            <a onClick={onEmailClick}>
            <Button primary>
              email me!
               </Button>
            </a>    
    </div> 

</React.Fragment>
       
)    