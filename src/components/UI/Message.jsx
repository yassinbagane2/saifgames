import React from 'react'
import './Message.css'
const Message = (props) => {
 
  return (
    <div className='error-modal'>
      <p>{props.message}</p>
      <button className='btn' onClick={props.closeHandler}>Okay!</button>
    </div> 
  )
}

export default Message