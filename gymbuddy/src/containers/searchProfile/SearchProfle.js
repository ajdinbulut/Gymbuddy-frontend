import React from "react";
import { PostStore } from "../../Store/PostStore/postStore";
import PostComponent from "../home/components/PostComponent";
import { observer } from "mobx-react";
import "./searchProfile.css";
import { useLocation} from 'react-router-dom';
import { UserStore } from "../../Store/UserStore/userStore";
const SearchProfile = observer(()=> {
  const postsStore = PostStore;
  const userStore = UserStore;
  var location = useLocation();
  console.log(location.state)
  const [profile,setProfile] = React.useState([])
  console.log(profile);
  return (
    <div>
      <div className="profileHeader">
        <img alt="Profile Photo"/>
      </div>
        {postsStore.posts !== undefined && postsStore.posts.map(x=>{
         return x.userId.toString() === userStore.user.Id ? <PostComponent data={x} key={x.Id} /> : null
        })}
    </div>
  );
})
export default SearchProfile
