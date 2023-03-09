import axios from "axios";

const CommentsService = {
  add: async (obj) => {
    console.log(obj);
    const res = axios.post("https://localhost:7010/api/Home/Comment", {
      Description: obj.description,
      UserId: obj.userId,
      PostId: obj.postId,
    });
    return res.data;
  },
};
export default CommentsService;
