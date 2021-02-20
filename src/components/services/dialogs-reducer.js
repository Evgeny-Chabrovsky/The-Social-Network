const ADD_MESSAGE = "ADD-MESSAGE",
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
};
export const addMessageActionCreator = () => ({
  type: "ADD-MESSAGE",
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  newText: text,
});
export default dialogsReducer;
