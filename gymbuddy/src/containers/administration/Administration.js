import axios from 'axios';
import React from 'react'
import './administration.css'
import {Link} from 'react-router-dom'
export default function Administration() {
  const [users,setUsers] = React.useState();
  React.useEffect(()=>{
    axios.get('https://localhost:7010/api/Administration/getUsers')
    .then((data)=>{
      console.log(data)
      setUsers(data.data);
    }).catch(function (error) {
      console.log(error);
    })
  },[])
  console.log(users);
  return (
    <div className='div'>
        <h1>Administration</h1>
        {users !== undefined && 
        
         <table >
          <thead>
              <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Username</th>
                  <th>Age</th>
                  <th>Role</th>
                  <th></th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {users.map(x=>(
                <>
              <tr>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.userName}</td>
                  <td>{x.age}</td>
                  <td>
                  {x.userRoles.map(x=>(
                    <span>{x.role.name}</span>
                  ))
                  }</td>
                  <td><Link to="/edit">Edit</Link></td>
                  <td><Link to="/delete">Delete</Link></td>
              </tr>
                </>
              )
              )}
          </tbody>
         </table>
         }
    </div>
)}
