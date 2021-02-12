import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

// export default DialogItem;

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ];

  let messageData = [
    { id: 1, message: "Hi, I'm your first message!" },
    { id: 2, message: "Hi, I'm your second message!" },
    { id: 3, message: "Hi, I'm your third message!" },
    { id: 4, message: "Hi, Hi,!" },
    { id: 5, message: "Hi, Yo!" },
    { id: 6, message: "Yo!" },
  ];

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
        <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
      </div>
      <div className={style.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
