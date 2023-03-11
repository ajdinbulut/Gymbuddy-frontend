import React from "react";
import "./home.css";
import PostComponent from "./components/PostComponent";
import { PostStore } from "../../Store/PostStore/postStore";
import PostForm from "../../components/postForm/PostForm";

export default function LIHome() {
  var postsStore = PostStore;
  console.log(postsStore, "post store");
  return (
    <div className="home--main">
      <PostForm />
      {postsStore.posts.map((x) => {
        return <PostComponent key={x.id} data={x}></PostComponent>;
      })}
    </div>
  );
}
