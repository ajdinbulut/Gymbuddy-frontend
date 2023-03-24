import './App.css';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr'
import React from 'react'
export default function App() {
  React.useEffect(()=>{
    try{
      const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7010/chatHub")
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

 
