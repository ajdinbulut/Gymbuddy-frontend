import React from "react";
import "./administration.css";
import { Link } from "react-router-dom";
import UsersService from "../../services/UsersService";
export default function Administration() {
  const [users, setUsers] = React.useState();
  React.useEffect(() => {
    const getUsers = async () => {
      const allUsers = await UsersService.getAll();
      setUsers(allUsers);
    };
    getUsers();
  }, []);
  const DeleteUser = async (id) => {
    const res = await UsersService.deleteUser(id);
    var index = users.indexOf(res);
    var Arr = users;
    Arr.splice(index, 1);
    setUsers([...Arr]);
  };
  return (
    <div className="div">
      <h1>Administration</h1>
      {users !== undefined && (
        <table>
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
            {users.map((x) => (
              <>
                <tr>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.userName}</td>
                  <td>{x.age}</td>
                  <td>
                    {x.userRoles.map((x) => (
                      <span>{x.role.name}</span>
                    ))}
                  </td>
                  <td>
                    <Link to="/edit" state={x}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => DeleteUser(x.id)}>Delete</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
