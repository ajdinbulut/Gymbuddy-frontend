import axios from "axios";
const token = localStorage.getItem("token");
const UsersService = {
  getAll: async () => {
    const response = await axios.get(
      "https://gymbuddy-backend.azurewebsites.net/api/Administration/getUsers",{
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
      "https://gymbuddy-backend.azurewebsites.net/api/User/" + id,
      { id }
    );
    return response.data;
  },
  editUser: async (obj) =>{
    console.log(obj)
    const response = await axios.put("https://gymbuddy-backend.azurewebsites.net/api/User/Edit",{
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
