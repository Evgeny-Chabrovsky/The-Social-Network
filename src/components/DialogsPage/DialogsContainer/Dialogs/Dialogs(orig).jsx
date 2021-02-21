import React, { useContext, useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import cx from "classnames";
import globalStyles from "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import style from "./Dialogs.module.css";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../services/dialogs-reducer";

const Dialogs = (props) => {
  // debugger;
  // const [buttonClass, setButtonClass] = useState("");
  let newMessageElement = React.createRef();

  let addMessage = () => {
    // setButtonClass(buttonClass ? "" : style.Button);//
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    // console.log(text);
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };
  debugger;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {props.dialogs.map((d) => (
          <DialogItem id={d.id} name={d.name} key={d.id} />
        ))}
      </div>

      <div className={style.messages}>
        {props.messages.map((m) => (
          <MessageItem id={m.id} message={m.message} key={m.id} />
        ))}
        <div>
          {/* {" "} */}
          <div>
            <div className="form-floating w-75 pt-2">
              <textarea
                ref={newMessageElement}
                value={props.newMessageText}
                onChange={onMessageChange}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              />
              <label for="floatingTextarea"></label>
            </div>
            <button
              className={cx(
                globalStyles.btn,
                globalStyles["btn-primary"],
                style.Button
              )}
              type="submit"
              onClick={addMessage}
            >
              Add message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
