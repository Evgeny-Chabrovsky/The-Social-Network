import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, post: "It's my first post", likeCount: 15 },
    { id: 2, post: "Всем привет", likeCount: 1 },
    { id: 3, post: "Плохой день", likeCount: 50 },
    { id: 4, post: "Удача!!!", likeCount: 100 },
  ];

  let postItem = postsData.map((p) => (
    <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />
  ));
  return (
    <div className={style.content}>
      <h2>My posts:</h2>
      <textarea></textarea>
      <button>Add post</button>
      {postItem}
    </div>
  );
};

export default MyPosts;
