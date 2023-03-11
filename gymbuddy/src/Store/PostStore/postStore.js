import { action, makeObservable, observable } from "mobx";
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
    this.posts.push(obj);
  }
  addComment(comment) {
    this.posts.comments.push(comment);
  }
}
export const PostStore = new PostStoreImpl();
