import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };
  debugger;
  return (
    <div className={style.content}>
      <h2>My posts:</h2>

      <div className="form-floating w-50 ">
        <textarea
          ref={newPostElement}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">My post</label>
      </div>
      <button
        className="btn btn-primary mt-2 mb-2"
        type="submit"
        onClick={() => addPost()}
      >
        Add post
      </button>

      {props.posts.map((p) => (
        <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />
      ))}
    </div>
  );
};

export default MyPosts;
