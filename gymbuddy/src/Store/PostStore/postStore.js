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
  
}
export const PostStore = new PostStoreImpl();
