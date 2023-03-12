import React from "react";
import CommentsService from "../../../services/CommentsService";
import { PostStore } from "../../../Store/PostStore/postStore";
import { UserStore } from "../../../Store/UserStore/userStore";
import "./post.css";
export default function PostComponent(props) {
  var postStore = PostStore;
  const submitComment = async () => {
    var commentValue = document.getElementById("comment").value;
    console.log("value ---> " + commentValue);
    const comment = await CommentsService.add({
      postId: props.data.id,
      userId: UserStore.user.Id,
      description: commentValue,
    });
    postStore.addComment(props.data.id, {
      postId: props.data.id,
      userId: UserStore.user.Id,
      description: commentValue,
    });
  };
  return (
    <div className="post">
      <h2>{props.data.description}</h2>
      <img src={props.data.imageUrl} alt="Picture" width="500" />
      {props.data.comments !== null &&
        props.data.comments.map((x) => (
          <div className="comment">
            <h6>{x.user.firstName + " " + x.user.lastName}</h6>
            <p>{x.description}</p>
          </div>
        ))}
      <input type="text" className="comment" data-id="comment" />
      <button onClick={submitComment}>Comment</button>
    </div>
  );
}
