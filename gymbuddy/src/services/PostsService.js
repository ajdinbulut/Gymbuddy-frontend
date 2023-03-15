import axios from "axios";
const PostsService = {
  getAll: async () => {
    const response = await axios.get(
      "https://localhost:7010/api/Home/GetPosts",
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    );
    return response.data;
  },
  add: async (obj) => {
    const response = axios.post(
      "https://localhost:7010/api/Home/Post",
      {
        description: obj.description,
        file: obj.file,
        id: obj.userId,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  },
  getById: async (id) =>{
    console.log(id, " profile id")
    const response = await axios.get("https://localhost:7010/api/Profile/GetPostsById",{params:{Id:id}})
    return response;
  }
};

export default PostsService;
