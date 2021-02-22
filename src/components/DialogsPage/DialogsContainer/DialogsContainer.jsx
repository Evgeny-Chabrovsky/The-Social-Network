// import React from "react";
// import cx from "classnames";
// import globalStyles from "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../services/dialogs-reducer";

import { connect } from "react-redux";
import Dialogs from "./Dialogs/Dialogs";

// const DialogsContainer = (props) => {

//   let state = props.store.getState();

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   let onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   };
//   debugger;

//   return (
//     <Dialogs
//       addMessage={addMessage}
//       updateNewMessageText={onMessageChange}

//       dialogs={state.dialogsPage.dialogsData}
//       messages={state.dialogsPage.messagesData}
//       newMessageText={state.dialogsPage.newMessageText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
debugger;
export default DialogsContainer;
