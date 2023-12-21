import './App.css';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HttpTransportType, HubConnectionBuilder,LogLevel} from '@microsoft/signalr'
import React from 'react'
export default function App() {
  const token = localStorage.getItem('token');
  React.useEffect(()=>{
    try{
      const connection = new HubConnectionBuilder()
    .withUrl("https://gymbuddy-backend.azurewebsites.net/hub/chatHub",{
      skipNegotiation:true,
      transport:HttpTransportType.WebSockets,
      accessTokenFactory:() => token,})
    .configureLogging(LogLevel.Information)
    .build();
    connection.start();
    }
    catch (e){
      console.log(e);
    }
  },[])
  return (
        <main className='main'>
          <Layout/>
        </main>
  )
}

 
