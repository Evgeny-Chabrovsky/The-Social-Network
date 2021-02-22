// import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../services/profile-reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   debugger;
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   };

//   return (
//     <MyPosts
//       addPost={addPost}
//       updateNewPostText={onPostChange}
//       posts={state.profilePage.postsData}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
