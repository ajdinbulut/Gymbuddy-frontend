import { action, makeObservable, observable } from "mobx";
import PostsService from "../../services/PostsService";
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
    this.posts[id].comments.push(comment);
  }
}
export const PostStore = new PostStoreImpl();
