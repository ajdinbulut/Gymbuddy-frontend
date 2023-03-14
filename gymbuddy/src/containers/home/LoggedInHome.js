import React from "react";
import "./home.css";
import PostComponent from "./components/PostComponent";
import { PostStore } from "../../Store/PostStore/postStore";
import PostForm from "../../components/postForm/PostForm";
import PostsService from "../../services/PostsService";
import { observer } from "mobx-react";

const LIHome = observer((props)=> {
  var postsStore = PostStore;
  React.useEffect(() => {
    const fetchData = async () => {
      const apiPosts = await PostsService.getAll();
      postsStore.addPostsOnLoad(apiPosts);
    };
    fetchData();
  }, []);
  return (
    <div className="home--main">
      <PostForm />
      {postsStore.posts.map((x) => {
        return <PostComponent key={x.id} data={x}></PostComponent>;
      })}
    </div>
  );
})
export default LIHome;
