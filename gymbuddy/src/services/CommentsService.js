import axios from "axios";

const CommentsService = {
  add: async (obj) => {
    const res = axios.post("https://localhost:7010/api/Home/Comment", {
      Description: obj.description,
      UserId: obj.userId,
      PostId: obj.postId,
    });
    return res.data;
  },
  get: async () => {
    const res = await axios.get("https://localhost:7010/api/Home/get");
    return res.data;
  },
};
export default CommentsService;
