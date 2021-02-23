import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Dialogs.module.css";
// import cx from "classnames";By_Thomsen
// import globalStyles from "../../../node_modules/bootstrap/dist/css/bootstrap.css";By_Thomsen

const Dialogs = (props) => {
  // const [buttonClass, setButtonClass] = useState("");
  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    // setButtonClass(buttonClass ? "" : style.Button);//By_Thomsen
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    // console.log(text);
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {props.dialogsPage.dialogsData.map((d) => (
          <DialogItem id={d.id} name={d.name} key={d.id} />
        ))}
      </div>

      <div className={style.messages}>
        {props.dialogsPage.messagesData.map((m) => (
          <MessageItem id={m.id} message={m.message} key={m.id} />
        ))}
        <div>
          {/* {" "} */}
          <div>
            <div className="form-floating w-75 pt-2">
              <textarea
                ref={newMessageElement}
                value={props.dialogsPage.newMessageText}
                onChange={onMessageChange}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              />
              <label for="floatingTextarea"></label>
            </div>
            <button
              className="btn btn-primary mt-2 mb-2"
              type="submit"
              // className={cx(//By_Thomsen
              // globalStyles.btn,//By_Thomsen
              // globalStyles["btn-primary"],//By_Thomsen
              // style.Button//By_Thomsen
              // )}//By_Thomsen
              onClick={onAddMessage}
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
