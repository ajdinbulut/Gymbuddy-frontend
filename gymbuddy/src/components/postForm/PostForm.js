import React from "react";
import "./PostForm";
import { useForm } from "react-hook-form";
import { PostStore } from "../../Store/PostStore/postStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { UserStore } from "../../Store/UserStore/userStore";
import PostsService from "../../services/PostsService";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const userStore = UserStore;
  const postsStore = PostStore;
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(postsStore.posts)
    const newPost = await PostsService.add({
      description: data.description,
      file: data.file[0],
      userId: userStore.user.Id,
    });
    PostStore.add(newPost.data)
    reset();
    navigate("/home");
  };
  return (
    <div className="postForm">
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="input--description">
          <textarea
            {...register("description")}
            placeholder="Description"
          ></textarea>
        </div>
        <div className="input--file">
          <input {...register("file")} type="file" name="file" />
        </div>
        <button className="form--btn">Submit</button>
      </form>
    </div>
  );

}
