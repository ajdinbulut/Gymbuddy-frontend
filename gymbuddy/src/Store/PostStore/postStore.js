import { action, makeObservable, observable } from "mobx";
import PostComponent from "../../containers/home/components/PostComponent";

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
  mapPosts() {
    this.posts.map((x) => {
      return console.log(x);
    });
  }
}
export const PostStore = new PostStoreImpl();
