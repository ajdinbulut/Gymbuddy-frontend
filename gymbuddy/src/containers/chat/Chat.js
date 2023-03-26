import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import ChatService from '../../services/ChatService';
import { UserStore } from '../../Store/UserStore/userStore';
import './chat.css'
export default function Chat() {
    const data = useLocation();
    const userStore = UserStore;
    const [chat,setChat] = React.useState();
    React.useEffect(()=>{
      const apiCall = ChatService.getChat(userStore.user.Id,data.state.id)
    },[])
  return (
    <div className='chatBox'>

    </div>
  )
}

