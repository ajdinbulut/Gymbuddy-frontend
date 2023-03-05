import React from 'react'
import { UserStore } from '../../Store/UserStore/userStore'
import './home.css'
import LGHome from './LoggedInHome'
export default function Home() {
  const userStore = UserStore;
  return (
    userStore.isAuth === false ? <div className='div2'><h1>Home</h1></div> : 
    <LGHome/>
  )
}

