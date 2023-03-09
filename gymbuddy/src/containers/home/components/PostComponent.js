import React from "react";
import CommentsService from "../../../services/CommentsService";
import { UserStore } from "../../../Store/UserStore/userStore";
import "./post.css";
export default function PostComponent(props) {
  console.log(props);
  const submitComment = async () => {
    var commentValue = document.getElementById("comment").value;
    console.log(commentValue);
    console.log(UserStore.user.Id);
    const comment = await CommentsService.add({
      postId: props.data.id,
      userId: UserStore.user.Id,
      description: commentValue,
    });
  };
  return (
    <div className="post">
      <h2>{props.data.description}</h2>
      <img src={props.data.imageUrl} alt="Picture" width="500" />
      <input type="text" className="comment" id="comment" />
      <button onClick={submitComment}>Comment</button>
    </div>
  );
}
