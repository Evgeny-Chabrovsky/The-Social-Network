import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Dialogs.module.css";
import TextAreaDialog from "./TextAreaDialog";

const Dialogs = (props) => {
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
          <TextAreaDialog />
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
