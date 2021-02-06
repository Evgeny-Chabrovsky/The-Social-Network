import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.content}>
      My posts
      <textarea></textarea>
      <button>Add post</button>
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
};

export default MyPosts;
