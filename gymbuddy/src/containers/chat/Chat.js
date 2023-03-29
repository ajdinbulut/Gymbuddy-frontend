import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import ChatService from '../../services/ChatService';
import { UserStore } from '../../Store/UserStore/userStore';
import './chat.css'
import { useForm } from "react-hook-form";

export default function Chat() {
    const {state} = useLocation();
    const userStore = UserStore;
    const [chat,setChat] = React.useState([]);
    React.useEffect(()=>{
      const fetchData = async () =>{
        const apiCall = await ChatService.getChat(userStore.user.Id,state.id);
      setChat(apiCall);
      }
      fetchData();
    },[])
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    console.log(chat)
    const onSubmit = async (data) =>{
      const SendMessage = await ChatService.add({
        userSender:userStore.user.Id,
        userReceiver:state.id,
        message:data.chat
      })
      console.log(SendMessage)
      setChat(prev=>{
        return[
          ...prev,
          SendMessage
          ]
      })
    }
  return (
    <div className='chatBox'>
      {chat != undefined && chat.map(x=>{
        return(
          <div className='message'>
            <h5>{x.userSender.firstName + " " + x.userSender.lastName}</h5>
            <hr/>
            <span>{x.message}</span>
          </div>
        )
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("chat")} type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

