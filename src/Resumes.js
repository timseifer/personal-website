import React, {Component, useState} from 'react';
import Pdf from './Assets/output.pdf';
import styled from 'styled-components';
import PDFViewer from 'pdf-viewer-reactjs';


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
    <div>
   <a onClick={onResumeClick}>
   <Button primary>
     Download my Resume
      </Button>
   </a>
   <br>
   </br>
   <br>
   </br>
   You can also view it below
   <PDFViewer document= {{url: 'https://timseifer.github.io/personal-website/static/media/output.7682a673.pdf'}} />
   </div>
  
   
);
}


// import TSResume from 'src/Assets/TSResume.pdf';