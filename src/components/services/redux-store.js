import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducers);
debugger;

export default store;
