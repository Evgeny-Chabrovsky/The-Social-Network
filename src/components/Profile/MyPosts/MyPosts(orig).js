import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../services/profile-reducer";

const MyPosts = (props) => {
  // debugger;
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={style.content}>
      <h2>My posts:</h2>

      <div className="form-floating w-50 ">
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        />
        <label for="floatingTextarea"></label>
      </div>
      <button
        className="btn btn-primary mt-2 mb-2"
        type="submit"
        onClick={addPost}
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
