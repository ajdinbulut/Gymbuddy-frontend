import { action, makeObservable, observable } from "mobx";
import PostsService from "../../services/PostsService";
import { UserStore } from "../UserStore/userStore";
class PostStoreImpl {
  posts = [];
  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action,
      addComment: action,
    });
  }
  addPost(obj) {
    this.posts.push(...obj);
  }
  addComment(id, comment) {
    console.log(UserStore.user);
    this.posts.forEach((x) => {
      return x.id === id ? x.comments.push(comment) : null;
    });
  }
}
export const PostStore = new PostStoreImpl();
