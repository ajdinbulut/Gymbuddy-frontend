import axios from "axios";
const UsersService = {
  getAll: async () => {
    const response = await axios.get(
      "https://localhost:7010/api/Administration/getUsers"
    );
    return response.data;
  },
  deleteUser: async (id) => {
    console.log(id);
    var Id = id.toString();
    const response = await axios.post(
      "https://localhost:7010/api/User/deleteUser",
      Id,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    return response.data;
  },
};
export default UsersService;
