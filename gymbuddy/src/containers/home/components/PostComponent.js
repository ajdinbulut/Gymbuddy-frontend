import React from 'react'
import './post.css'
export default function PostComponent(props) {
  return (
    <div className='post'>
        <h2>{props.data.description}</h2>
        <img src={props.data.imageUrl} alt="Picture" />
    </div>
  )
}

