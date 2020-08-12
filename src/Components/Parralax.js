import React, { Component ,render } from 'react';
import ReactDOM from 'react-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import ReactTerminal from 'react-terminal-component';
import Styles from './Parralax.css';
import Splendor from '../Assets/Splendor.png';
import Comp15_1 from '../Assets/Comp15_1.png';
import Comp15_2 from '../Assets/Comp15_2.png';
import comp15_3 from '../Assets/Comp15_3.png';

export default class Parralax extends React.Component {
    render() {
  return (
      <Parallax pages={3} ref={ref => (this.parallax = ref)} class = "parr" style = {{ width: '80%' ,
    height: '100%'}}>

    <ParallaxLayer offset = {0} speed = {0} factor = {3} style={{ backgroundColor: '#99d6ff' }} />
    <ParallaxLayer offset = {1.2} speed = {1} style={{ backgroundColor: '#89c0e5' }} />
    <ParallaxLayer offset = {1.9} speed = {.5} style={{ backgroundColor: '#7aabcc' }} />
    <ParallaxLayer offset = {2.3} speed = {.5} style={{ backgroundColor: '#6b95b2' }} />
    
        <ParallaxLayer offset = {.1} speed = {-.8}>
        <span style = {{ marginLeft: '60%' }}>
            <figure class = "circle"></figure>
        </span>
        </ParallaxLayer>
        <ParallaxLayer offset = {.05} speed = {-.85}>
        <span style = {{ marginLeft: '60%' }}>
            <figure class = "small_circle"></figure>
        </span>
        </ParallaxLayer>
        <ParallaxLayer offset = {.05} speed = {-1.2}>
        <span>
            <figure class = "smaller_circle"></figure>
        </span>
        </ParallaxLayer>
        
        <ParallaxLayer offset = {1.43} speed = {-.89}>
        <span>
            <figure class = "small_circle_r"></figure>
        </span>
        </ParallaxLayer>
        <ParallaxLayer offset = {1.4} speed = {-1.2}>
        <span>
            <figure class = "smaller_circle_r"></figure>
        </span>
        </ParallaxLayer>


        <ParallaxLayer offset = {.2} speed = {-.5}>
        <span style = {{ marginLeft: '70%' }}>
            This is coded with spring.io and css
        </span>
        </ParallaxLayer>
        
        
        <ParallaxLayer offset = {.2} speed = {-.1}>
        <span style = {{ marginRight: '40%' }}>
            <img src = {Splendor} style  = {{width: '40%'}} />
        </span>
        </ParallaxLayer>
        <ParallaxLayer offset = {.2} speed = {-.2}>
        <span style = {{ marginLeft: '20%' , display: 'inline-block',
  width: '200px',
  height: '200px',
  padding: '5px'}}>
            This is the final project from comp11, using object oriented program a game called splendor appears
            where the player picks cards and collects point. Can be played from terminal and is coded in pure c++.
        </span>
        </ParallaxLayer>
        
        
        
        <ParallaxLayer offset = {1} speed = {-.1}>
        <span style = {{ marginLeft: '40%' }}>
            <img src = {Comp15_1} style  = {{width: '40%', height: '50%'}} />
        </span>
        </ParallaxLayer>
        <ParallaxLayer offset = {1.2} speed = {-.05}>
        <span style = {{ marginRight: '45%' }}>
            <img src = {Comp15_2} style  = {{width: '350px', height: '350px'}} />
        </span>
        </ParallaxLayer>
        <ParallaxLayer offset = {1.6} speed = {-.1}>
        <sml style = {{ marginLeft: '50%' , display: 'inline-block',
  width: '300px',
  height: '200px',
  padding: '5px',
  
}}>
            This is the final project from comp15. Using pointers and graphs, as well as search
            algorithms, I was able to find paths that could lead from my other classmates houses given a specified distance.
            This taught me the most major search algorithms. Hashtables, mergesort, quicksort, etc.
        </sml>
        </ParallaxLayer>
        
        
        <ParallaxLayer offset = {2.5} speed = {-.3}>
        <sml style = {{ marginLeft: '15%' , display: 'inline-block',
  width: '300px',
  height: '200px',
  padding: '5px',
  color: 'white'
  
 }}>
            This Website is 50% html and 50% javaScript. Using react.js, which uses javaScript and jsx in conjuction,
            I am able to build versatile 21st century UI's. I'm interested in making interactive UI's which you're currently
            using if you read this. 
        </sml>
        </ParallaxLayer>

    
    <ParallaxLayer
             offset={0}
             speed={0.1}
             style={{ display: 'block', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
             <span1 onClick={() => this.parallax.scrollTo(1)}>
             You Can Scroll or Click Me!
         </span1>
           </ParallaxLayer>

           <ParallaxLayer
             offset={1}
             speed={0.1}     
             style={{ display: 'block', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span onClick={() => this.parallax.scrollTo(2)}>
                This is a glimpse into some of the code I can do
             </span>

           </ParallaxLayer>
            
           <ParallaxLayer
             offset={1}
             speed={.1}
             style={{ display: 'block', alignItems: 'center', justifyContent: 'center', position: 'relative', color: 'white' }}>
             <span onClick={() => this.parallax.scrollTo(0)}>
                 You're at bedrock, click here to reset
             </span>
           </ParallaxLayer>
           
           
           

</Parallax>
)}

}


ReactDOM.render(<Parralax />, document.getElementById('root'))
    