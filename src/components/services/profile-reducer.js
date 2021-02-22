const ADD_POST = "ADD-POST",
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  newPostText: "Lorus",
  postsData: [
    { id: 1, post: "It's my first post", likeCount: 15 },
    { id: 2, post: "Всем привет", likeCount: 1 },
    { id: 3, post: "Плохой день", likeCount: 50 },
    { id: 4, post: "Удача!!!", likeCount: 100 },
    {
      id: 5,
      post: "Ура все получилось.",
      likeCount: 10,
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        postsData: [
          ...state.postsData,
          {
            id: state.postsData.length + 1,
            post: state.newPostText,
            likeCount: 0,
          },
        ],
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: "ADD-POST",
});

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
export default profileReducer;
