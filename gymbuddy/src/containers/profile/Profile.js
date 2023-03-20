import React from "react";
import PostForm from "../../components/postForm/PostForm";
import PostsService from "../../services/PostsService";
import { PostStore } from "../../Store/PostStore/postStore";
import PostComponent from "../home/components/PostComponent";
import { observer } from "mobx-react";
import "./profile.css";
import { UserStore } from "../../Store/UserStore/userStore";
const Profile = observer(()=> {
  const postsStore = PostStore;
  const userStore = UserStore;
  return (
    <div>
      <div className="profileHeader">
        <img src={userStore.user.imageUrl} alt="Profile Photo"/>
      </div>
      <PostForm />
        {postsStore.posts !== undefined && postsStore.posts.map(x=>{
         return x.userId.toString() === userStore.user.Id ? <PostComponent data={x} key={x.Id} /> : null
        })}
    </div>
  );
})
export default Profile
