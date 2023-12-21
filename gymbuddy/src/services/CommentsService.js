import axios from "axios";

const CommentsService = {
  add: async (obj) => {
    const res = axios.post("https://gymbuddy-backend.azurewebsites.net/api/Home/Comment", {
      Description: obj.description,
      UserId: obj.userId,
      PostId: obj.postId,
    });
    return res.data;
  },
  get: async () => {
    const res = await axios.get("https://gymbuddy-backend.azurewebsites.net/api/Home/get");
    return res.data;
  },
};
export default CommentsService;
