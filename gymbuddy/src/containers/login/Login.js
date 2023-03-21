import React from 'react'
import './login.css'
import axios from 'axios'
import jwt from 'jwt-decode'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { UserStore } from '../../Store/UserStore/userStore';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const userStore = UserStore;
    const history = useNavigate()
    console.log(userStore)
  return (
        <div id="container">
            <div id="log">
                <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleSubmit((data) => {
                  axios.post('https://localhost:7010/api/User/login',{...data},{
                    headers:{
                      'Content-Type': 'multipart/form-data'
                    }
                  })
                  .then(function (response) {
                    var token = response.data
                    localStorage.setItem("token", token);
                    var user = jwt(token)
                    userStore.addUser(user);
                    userStore.isAuth = true;
                    console.log(user)
                    history("/home");
                  })
                })}>
                <div id="userName">
                    <input {...register('username')} type="text" placeholder="Username"/>
                </div>
                <div id="password">
                    <input {...register('password')} type="password" placeholder="Password"/>
                </div>
                <div id="button">
                    <button id="btn">Login</button>
                </div>
            </form>

        </div>
  )
}