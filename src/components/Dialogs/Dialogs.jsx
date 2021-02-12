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

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={style.messages}>
        <Message message="Hi, I'm your new message!" />
        <Message message="Hello World" />
        <Message message="Привет" />
        <Message message="Как дела?" />
      </div>
    </div>
  );
};

export default Dialogs;
