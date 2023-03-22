import React from "react";
import CommentsService from "../../../services/CommentsService";
import { PostStore } from "../../../Store/PostStore/postStore";
import { useForm } from "react-hook-form";
import { UserStore } from "../../../Store/UserStore/userStore";
import { observer } from "mobx-react";
import PostsService from "../../../services/PostsService"

import "./post.css";
const PostComponent = observer((props)=>{
  console.log(props.data)
  var postStore = PostStore;
  const userStore = UserStore;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const comment = await CommentsService.add({
      postId: props.data.id,
      userId: UserStore.user.Id,
      description: data.comment,
    });
    postStore.addComment(props.data.id, {
      postId: props.data.id,
      userId: UserStore.user.Id,
      user: {
        firstName: UserStore.user.FirstName,
        lastName: UserStore.user.Lastname,
      },
      description: data.comment,
    });
    reset();
  };
  const LikeButton = async () =>{
    var apiLikePost = await PostsService.LikePost(userStore.user.Id,props.data.postId)
    postStore.Like(props.data.postId);
  }
  return (
    <div className="post">
      <h2>{props.data.description}</h2>
      <img src={props.data.imageUrl} alt="Picture" width="300" height="400" />
      {props.data.comments !== null &&
        props.data.comments.map((x) => (
          <div className="comment">
            <h6>{x.user.firstName + " " + x.user.lastName}</h6>
            <p>{x.description}</p>
          </div>
        ))}
        <button onClick={LikeButton} className={props.data.isLiked ? "liked" : "like"}>{props.data.isLiked ? "Liked" : "Like"}</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("comment")} type="text" />
        <button>Comment</button>
      </form>
    </div>
  );
})
export default PostComponent;
