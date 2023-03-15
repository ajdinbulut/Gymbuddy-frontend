import { action, makeObservable, observable } from "mobx";
import PostsService from "../../services/PostsService";
import { UserStore } from "../UserStore/userStore";
class PostStoreImpl {
  posts = [];
  userPosts = [];
  constructor() {
    makeObservable(this, {
      posts: observable,
      userPosts: observable,
      add: action,
      addComment: action,
      addPostsOnLoad:action,
      addUsersPost:action,
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
  addUsersPost(obj){
    this.userPosts.push(...obj);
  }
}
export const PostStore = new PostStoreImpl();
