import React from 'react'
import { useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import UsersService from '../../services/UsersService';
import { useNavigate } from "react-router-dom";
import "./edit.css"

export default function Edit() {
  const { register, handleSubmit } = useForm();
  var location = useLocation();
  var navigation = useNavigate();
  console.log(location.state)
  const [editUser,setEditUser] = React.useState();
  React.useEffect(()=>{
    setEditUser(location.state);
  },[])
  const onSubmit = async(data) =>{
    const apiUser = await UsersService.editUser(data);
    navigation("/administration")
  }
  function handleChange(event){
    const {name, value} = event.target
        setEditUser(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value
            }
        })
  }
  return (
    <div>
      {editUser && <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("id")} value={editUser.id} name="id" onChange={(e)=> handleChange(e)} type="hidden"/>
        <div className='edit--div'>
          <label>Firstname:</label>
          <input {...register("firstName")} name="firstName" onChange={(e)=> handleChange(e)} value={editUser.firstName}/>
        </div>
        <div className='edit--div'>
          <label>Lastname:</label>
          <input {...register("lastName")} name="lastName" onChange={(e)=> handleChange(e)} value={editUser.lastName}/>
        </div>
        <div className='edit--div'>
          <label>Username:</label>
          <input {...register("userName")} name="userName" onChange={(e)=> handleChange(e)} value={ editUser.userName}/>
        </div>
        <div className='edit--div'>
          <label>Age:</label>
          <input {...register("age")} name="age" onChange={(e)=> handleChange(e)} value={editUser.age}/>
        </div>
        <div className='edit--div'>
          <label>Email:</label>
          <input {...register("email")} name="email" onChange={(e)=> handleChange(e)} value={editUser.email}/>
        </div>
        <button>Submit</button>
      </form>}
    </div>
  )
}