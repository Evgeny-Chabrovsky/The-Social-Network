import React from "react";
// import cx from "classnames";
// import globalStyles from "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../services/dialogs-reducer";
import Dialogs from "./Dialogs/Dialogs";

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };
  debugger;

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      dialogs={state.dialogsPage.dialogsData}
      messages={state.dialogsPage.messagesData}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
