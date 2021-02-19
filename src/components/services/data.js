import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
      debugger;
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      // debugger;
      this._callSubscriber(store._state);
      // debugger;
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

export default store;
