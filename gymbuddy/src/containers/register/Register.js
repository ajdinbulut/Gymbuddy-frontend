import React from 'react'
import './register.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  return (
    <div className='register'>
        <div id="container2">
            <div id="log">
                <h1 >Register</h1>
            </div>
            <form onSubmit={handleSubmit((data) => {
              console.log()
              axios.post('https://gymbuddy-backend.azurewebsites.net/api/User/register-user',{...data},{
                headers:{
                  'Content-Type': 'multipart/form-data'
                }
              })
              .then(function (response) {
                console.log(response);
                history('/home')
              })
              .catch(function (error) {
                console.log(error);
              });
            })}>
                <div id="firstName">
                    <input {...register('firstName')} type='text' placeholder="First Name"/>
                </div>
                <div id="lastName">
                    <input {...register('lastName', { required: true })} type='text' placeholder="Last Name"/>
                </div>
                {errors.lastName && <p>Last name is required.</p>}
                <div id="userName">
                    <input {...register('userName')} type='text' placeholder="Username"/>
                </div>
                <div id="password">
                    <input {...register('password')} type='password' placeholder="Password"/>
                </div>
                <div id="age">
                    <input {...register('age', { pattern: /\d+/ })} type='number' placeholder="Age"/>
                </div>
                {errors.age && <p>Please enter number for age.</p>}
                <div id="email">
                    <input {...register('eMail')} type='email' placeholder="Email"/>
                </div>
                {/* <div id="file">
                    <input type="image" hidden src="~/images/profilePhotos/profilephoto.jpg" placeholder="Select your profile photo.." />
                </div> */}
                <div id="button">
                    <button id="btn" >Register</button>
                </div>
            </form>
        </div>
    </div>

  )
}

