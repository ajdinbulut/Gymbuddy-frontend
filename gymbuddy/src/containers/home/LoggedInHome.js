import React from "react";
import "./home.css";
import PostComponent from "./components/PostComponent";
import { PostStore } from "../../Store/PostStore/postStore";
import PostForm from "../../components/postForm/PostForm";
import PostsService from "../../services/PostsService";
import { observer } from "mobx-react";
import { UserStore } from "../../Store/UserStore/userStore";
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr'
const LIHome = observer((props)=> {
  var postsStore = PostStore;
  var userStore = UserStore;
  React.useEffect(() => {
    const fetchData = async () => {
      const apiPosts = await PostsService.getAll(userStore.user.Id);
      postsStore.addPostsOnLoad(apiPosts.posts);
      try{
        const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7010/chatHub")
      .configureLogging(LogLevel.Information)
      .build();
      await connection.start();
      }
      catch (e){
        console.log(e);
      }
      
    };
    fetchData();
  }, []);
  console.log(postsStore.posts)
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
