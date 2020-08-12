import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './Stylez.css'
import { img1 } from '../Assets/IMG_0013.jpg'
import { img2 } from '../Assets/IMG_0016.jpg'
import { img3 } from '../Assets/IMG_0195.jpg'
import { img4 } from '../Assets/IMG_0298.JPG'


const slides = [
  { id: 0, url: 'img1'},
  { id: 1, url: 'img2'},
  { id: 2, url: 'img3'},
  { id: 3, url: 'img4'},
]

export default function Slideshow() {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.9)' },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  return transitions.map(({item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{...props, backgroundImage: `url(${item.url})`}}
    />
  ))
}


