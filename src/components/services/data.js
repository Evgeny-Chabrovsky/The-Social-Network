const ADD_POST = "ADD-POST",
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_MESSAGE = "ADD-MESSAGE",
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    dialogsPage: {
      newMessageText: "YO-YO-YO",
      messagesData: [
        { id: 1, message: "куку" },
        { id: 2, message: "Hi, I'm your second message!" },
        { id: 3, message: "Hi, I'm your third message!" },
        { id: 4, message: "Hi, Hi,!" },
        { id: 5, message: "Hi, Yo!" },
        { id: 6, message: "Yo!" },
      ],
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
        { id: 7, name: "Olga" },
      ],
    },
    profilePage: {
      newPostText: "it-camasutra.com",
      postsData: [
        { id: 1, post: "It's my first post", likeCount: 15 },
        { id: 2, post: "Всем привет", likeCount: 1 },
        { id: 3, post: "Плохой день", likeCount: 50 },
        { id: 4, post: "Удача!!!", likeCount: 100 },
        {
          id: 5,
          post: "Ура все получилось.",
          likeCount: 1000000,
        },
      ],
    },

    dispatch(action) {
      if (action.type === ADD_POST) {
        let newPost = {
          id: this._state.profilePage.postsData.length + 1,
          post: this._state.profilePage.newPostText,
          likeCount: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(store._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(store._state);
      } else if (action.type === ADD_MESSAGE) {
        let newMessage = {
          id: this._state.dialogsPage.messagesData.length + 1,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(store._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(store._state);
      }
    },
  },

  _callSubscriber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //паттерн observer(наблюдатель)
  },
};

export const addPostActionCreator = () => ({
  type: "ADD-POST",
});

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
export const addMessageActionCreator = () => ({
  type: "ADD-MESSAGE",
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  newText: text,
});
export default store;
