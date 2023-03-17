import React from "react";
import PostForm from "../../components/postForm/PostForm";
import PostsService from "../../services/PostsService";
import { PostStore } from "../../Store/PostStore/postStore";
import PostComponent from "../home/components/PostComponent";
import { observer } from "mobx-react";
import "./searchProfile.css";
import { UserStore } from "../../Store/UserStore/userStore";
const Profile = observer(()=> {
  const postsStore = PostStore;
  const userStore = UserStore;
  console.log(userStore.user)
  return (
    <div>
      <div className="profileHeader">
        <img src={userStore.user.imageUrl} alt="Profile Photo"/>
      </div>
        {postsStore.posts !== undefined && postsStore.posts.map(x=>{
         return x.userId.toString() === userStore.user.Id ? <PostComponent data={x} key={x.Id} /> : null
        })}
    </div>
  );
})
export default Profile