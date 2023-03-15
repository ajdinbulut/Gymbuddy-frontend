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
  React.useEffect(()=>{
    const getPosts = async() =>{
      var res = await PostsService.getById(userStore.user.Id)
      console.log(res.data," res data")
      postsStore.addUsersPost(res.data);
    }
    getPosts();
  },[])
  console.log(postsStore.userPosts, " users posts")
  return (
    <div>
      <div className="profileHeader"></div>
      <PostForm />
        {postsStore.userPosts !== undefined && postsStore.userPosts.map(x=>{
         return <PostComponent data={x} key={x.Id}/>
        })}
    </div>
  );
})
export default Profile
