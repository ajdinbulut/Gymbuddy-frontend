import axios from "axios";
const token = localStorage.getItem("token");
const UsersService = {
  getAll: async () => {
    const response = await axios.get(
      "https://localhost:7010/api/Administration/getUsers",{
        headers: {
          "Authorization " : `Bearer ${token}`
        }
      }
    ).catch((err)=>{
      console.log(err);
    })
    console.log(response)
    return response.data;
  },
  deleteUser: async (id) => {
    console.log(id);
    const response = await axios.delete(
      "https://localhost:7010/api/User/" + id,
      { id }
    );
    return response.data;
  },
  editUser: async (obj) =>{
    console.log(obj)
    const response = await axios.put("https://localhost:7010/api/User/Edit",{
      Id:obj.id,
      FirstName:obj.firstName,
      LastName:obj.lastName,
      UserName:obj.userName,
      Age:obj.age,
      Email:obj.email
    },{
      headers:{
        "Content-Type" : "multipart/form-data"
      }
    })
    return response.data
  }
};
export default UsersService;
