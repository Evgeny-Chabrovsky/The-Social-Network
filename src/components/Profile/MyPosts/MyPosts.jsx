import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  debugger;
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    console.log(text);
    props.updateNewPostText(text);
  };

  return (
    <div className={style.content}>
      <h2>My posts:</h2>

      <div className="form-floating w-50 ">
        <textarea
          ref={newPostElement}
          value={props.profilePage.newPostText}
          onChange={onPostChange} //+
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        />
        <label for="floatingTextarea"></label>
      </div>
      <button
        className="btn btn-primary mt-2 mb-2"
        type="submit"
        onClick={onAddPost}
      >
        Add post
      </button>

      {props.profilePage.postsData.map((p) => (
        <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />
      ))}
    </div>
  );
};

export default MyPosts;
