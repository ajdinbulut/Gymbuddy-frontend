import React from 'react'
import { useLocation} from 'react-router-dom';
import { useForm } from "react-hook-form";
import UsersService from '../../services/UsersService';

export default function Edit() {
  const { register, handleSubmit } = useForm();
  var navigate = useLocation();
  const [editUser,setEditUser] = React.useState();
  React.useEffect(()=>{
    setEditUser(navigate.state);
  },[])
  const onSubmit = async(data) =>{
    const apiUser = await UsersService.editUser(data);
    console.log(apiUser)
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
      {editUser && <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} value={editUser.id} name="id" onChange={(e)=> handleChange(e)} type="hidden"/>
        <div>
          <label>Firstname:</label>
          <input {...register("firstName")} name="firstName" onChange={(e)=> handleChange(e)} value={editUser.firstName}/>
        </div>
        <div>
          <label>Lastname:</label>
          <input {...register("lastName")} name="lastName" onChange={(e)=> handleChange(e)} value={editUser.lastName}/>
        </div>
        <div>
          <label>Username:</label>
          <input {...register("userName")} name="userName" onChange={(e)=> handleChange(e)} value={ editUser.userName}/>
        </div>
        <div>
          <label>Age:</label>
          <input {...register("age")} name="age" onChange={(e)=> handleChange(e)} value={editUser.age}/>
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email")} name="email" onChange={(e)=> handleChange(e)} value={editUser.email}/>
        </div>
        <button>Submit</button>
      </form>}
    </div>
  )
}