import { action, makeObservable, observable } from "mobx";
import PostsService from "../../services/PostsService";
import { UserStore } from "../UserStore/userStore";
class PostStoreImpl {
  posts = [];
  constructor() {
    makeObservable(this, {
      posts: observable,
      add: action,
      addComment: action,
      addPostsOnLoad:action,
      Like:action,
    });
  }
  addPostsOnLoad(obj) {
    this.posts.push(...obj);
  }
  add(obj){
    this.posts.push(obj)
  }
  addComment(id, comment) {
    this.posts.forEach((x) => {
      return x.id === id ? x.comments.push(comment) : null;
    });
  }
  Like(id){
    console.log(id)
    console.log(this.posts);
    this.posts.forEach((x) => {
      return x.postId === id ? x.isLiked = !x.isLiked : null;
    });
  }
  
}
export const PostStore = new PostStoreImpl();
