import React from 'react'
import './login.css'
import axios from 'axios'
import jwt from 'jwt-decode'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { UserStore } from '../../Store/UserStore/userStore';
import { observer } from "mobx-react";

const Login = observer(() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const userStore = UserStore;
    const history = useNavigate()
  return (
        <div id="container">
            <div id="log">
                <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleSubmit((data) => {
                  axios.post('https://gymbuddy-backend.azurewebsites.net/api/User/login',{...data},{
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
})
export default Login;