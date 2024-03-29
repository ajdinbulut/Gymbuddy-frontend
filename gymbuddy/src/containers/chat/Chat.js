import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import ChatService from '../../services/ChatService';
import { UserStore } from '../../Store/UserStore/userStore';
import './chat.css'
import { useForm } from "react-hook-form";
import { HubConnectionBuilder} from '@microsoft/signalr'

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
      var obj = {
        userSender:userStore.user.Id,
        userReceiver:state.id,
        message:data.chat
      }
      const SendMessage = await ChatService.add(obj)
      console.log(SendMessage);
      const connection = new HubConnectionBuilder()
    .withUrl("https://gymbuddy-backend.azurewebsites.net/hub/chatHub");
    connection.invoke("SendToUser", SendMessage.connectionId, obj.message).then(function () {
    }).catch(function (err) {
        return console.error(err.toString());
    });
      setChat(prev=>{
        return[
          ...prev,
          SendMessage.chat
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

