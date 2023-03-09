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
    const response = await axios.delete(
      "https://localhost:7010/api/User/" + id,
      { id }
    );
    return response.data;
  },
};
export default UsersService;
