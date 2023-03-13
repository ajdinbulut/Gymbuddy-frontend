import React from "react";
import "./home.css";
import PostComponent from "./components/PostComponent";
import { PostStore } from "../../Store/PostStore/postStore";
import PostForm from "../../components/postForm/PostForm";
import PostsService from "../../services/PostsService";

export default function LIHome() {
  var postsStore = PostStore;
  React.useEffect(() => {
    const fetchData = async () => {
      const apiPosts = await PostsService.getAll();
      postsStore.addPost(apiPosts);
    };
    fetchData();
  }, []);
  console.log(postsStore.posts);
  return (
    <div className="home--main">
      <PostForm />
      {postsStore.posts.map((x) => {
        return <PostComponent key={x.id} data={x}></PostComponent>;
      })}
    </div>
  );
}
