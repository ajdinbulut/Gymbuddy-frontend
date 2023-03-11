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
    const fetchData = async () => {
      const apiPosts = await PostsService.getAll();
      this.posts.push(...apiPosts);
      console.log("lol");
    };
    fetchData();
  }
  addPost(obj) {
    this.posts.push(...obj);
  }
  addComment(comment) {
    this.posts.comments.push(comment);
  }
}
export const PostStore = new PostStoreImpl();
