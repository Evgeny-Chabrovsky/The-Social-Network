import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../services/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
    // <div className={style.content}>
    //   <h2>My posts:</h2>

    //   <div className="form-floating w-50 ">
    //     <textarea
    //       ref={newPostElement}
    //       value={props.newPostText}
    //       onChange={onPostChange}
    //       className="form-control"
    //       placeholder="Leave a comment here"
    //       id="floatingTextarea"
    //     />
    //     <label for="floatingTextarea"></label>
    //   </div>
    //   <button
    //     className="btn btn-primary mt-2 mb-2"
    //     type="submit"
    //     onClick={addPost}
    //   >
    //     Add post
    //   </button>

    //   {props.posts.map((p) => (
    //     <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount} />
    //   ))}
    // </div>
  );
};

export default MyPostsContainer;
