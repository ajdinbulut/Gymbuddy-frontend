import axios from "axios";
const PostsService = {
  getAll: async (id) => {
    const response = await axios.get(
      "https://gymbuddy-backend.azurewebsites.net/api/Home/GetPosts",{ params: { Id: id }}
    );
    return response.data;
  },
  add: async (obj) => {
    const response = axios.post(
      "https://gymbuddy-backend.azurewebsites.net/api/Home/Post",
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
  getById: async (id) => {
    const response = await axios.get("https://gymbuddy-backend.azurewebsites.net/api/Profile/GetPostsById",{params:{Id:id}})
    return response;
  },
  LikePost: async (userId,postId) => {
    console.log(userId,postId," inside service ")
    const response = await axios.put("https://gymbuddy-backend.azurewebsites.net/api/Home/LikePost",{UserId:userId,PostId:postId})
    return response;
  }
};

export default PostsService;
