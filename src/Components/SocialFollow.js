import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialFollow';

export default function SocialFollow(){
    
    return(
        <div className = "social-container">
        <a href = "https://www.linkedin.com/in/timothy-seifert-a7277919b/">
        <FontAwesomeIcon icon = {faLinkedin} size = "2x" />
        </a>
        </div>        
    )
    
}