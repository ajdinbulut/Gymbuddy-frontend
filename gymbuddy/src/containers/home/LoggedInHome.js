import React, { useEffect, useState } from "react";
import "./home.css";
import PostComponent from "./components/PostComponent";
import PostsService from "../../services/PostsService";
import { PostStore } from "../../Store/PostStore/postStore";
import PostForm from "../../components/postForm/PostForm";

export default function LIHome() {
  var postsStore = PostStore;
  postsStore.posts.map((x) => {
    console.log(x);
  });
  useEffect(() => {
    const fetchData = async () => {
      const apiPosts = await PostsService.getAll();
      postsStore.addPost(apiPosts);
    };
    fetchData();
  }, []);

  return (
    <div className="home--main">
      <PostForm />
      {postsStore.posts &&
        postsStore.posts.map((x) => {
          return <PostComponent key={x.id} data={x}></PostComponent>;
        })}
    </div>
  );
}
