import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, useTransition } from 'react-spring'
import range from 'lodash-es/range'
import clamp from 'lodash-es/clamp'
import ReactDOM from 'react-dom'
import { useGesture } from 'react-use-gesture'
import {Transition} from 'react-spring/renderprops'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight + 300]
const trans0 = (x, y) => `translate3d(${x / 2 + 350}px,${y / 3}px,0)`
const trans1 = (x, y) => `translate3d(${x / 3 + 450}px,${y / 2}px,0)`
const trans2 = (x, y) => `translate3d(${x / 4 + 550}px,${y / 4}px,0)`
const trans3 = (x, y) => `translate3d(${x / 3 + 650}px,${y / 2}px,0)`
const trans4 = (x, y) => `translate3d(${x / 2 + 750}px,${y / 3}px,0)`
const textrans = (x, y) => `translate3d(${x / 2 + 750}px,${y / 3}px,0)`

let items = range(1)
let items2 = range(1)
const interp = i => r => `translate3d(${36 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px,125px, 0)`
const res = `translate3d(0px,125px, 0)`

export default function Card() {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 30, tension: 300, friction: 30 } }))
  const { radians } = useSpring({
   to: async next => {
     while (1) await next({ radians: 2 * Math.PI}, 
)
   },
   from: { radians: 0 },
   config: { duration: 3600 },
   reset: false,
  
 })
return (
    // <animated.div {...bind()} onMouseLeave={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>
    items.map(i => <animated.div key={i} style={{ transform: radians.interpolate(interp(i)) }} >
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div onMouseLeave={({ clientX: x, clientY: y }) => set({xy: [0,0]})}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans0) }} />
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card5" style={{ transform: props.xy.interpolate(trans4) }} />
            </div>
            
    </div>
    </animated.div>


    
)
  
   
)
}
