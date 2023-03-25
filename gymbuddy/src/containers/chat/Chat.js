import React from 'react'
import { Link, useLocation} from 'react-router-dom';

export default function Chat() {
    var location = useLocation();
    console.log(location.state)
  return (
    <div>Chat</div>
  )
}

