import React, {Component} from 'react';
import Pdf from './Assets/output.pdf';
import styled from 'styled-components'

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

export const Download = (props) => {

const onResumeClick = () => {
  window.open(Pdf);
}

return(
   <a onClick={onResumeClick}>
   <Button primary>
     Click here for Resume
      </Button>
   </a>
);
}