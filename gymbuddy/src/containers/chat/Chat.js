import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import ChatService from '../../services/ChatService';
import { UserStore } from '../../Store/UserStore/userStore';
import './chat.css'
import { useForm } from "react-hook-form";

export default function Chat() {
    const {state} = useLocation();
    const userStore = UserStore;
    console.log(state.id);
    const [chat,setChat] = React.useState();
    React.useEffect(()=>{
      const apiCall = ChatService.getChat(userStore.user.Id,state.id)
      setChat(apiCall);
    },[])
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = async (data) =>{
      const SendMessage = await ChatService.add({
        userSender:userStore.user.Id,
        userReceiver:state.id,
        message:data.chat
      })
    }
  return (
    <div className='chatBox'>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("chat")} type="text" />
        <button>Comment</button>
      </form>
    </div>
  )
}

