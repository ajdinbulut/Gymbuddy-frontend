import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserStore } from "../../Store/UserStore/userStore";
import "./home.css";
import PostComponent from "./components/PostComponent";
import { useNavigate } from "react-router-dom";
import PostsService from "../../services/PostsService";

export default function LIHome() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const userStore = UserStore;
  const navigate = useNavigate();
  const [posts, setPosts] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      const apiPosts = await PostsService.getAll();
      setPosts(apiPosts);
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    const newPost = await PostsService.add({
      description: data.description,
      file: data.file[0],
      userId: userStore.user.Id,
    });
    setPosts((prevPosts) => [...prevPosts, newPost]);
    reset();
    const apiPosts = await PostsService.getAll();
    setPosts(apiPosts);
    navigate("/home");
  };

  return (
    <div className="home--main">
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
      {posts &&
        posts.map((post, index) => (
          <PostComponent key={index} data={post}></PostComponent>
        ))}
    </div>
  );
}
