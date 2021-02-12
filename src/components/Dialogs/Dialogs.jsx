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
    { id: 7, name: "Olga" },
  ];
  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
  ));
  console.log(dialogsElements);

  let messageData = [
    { id: 1, message: "куку" },
    { id: 2, message: "Hi, I'm your second message!" },
    { id: 3, message: "Hi, I'm your third message!" },
    { id: 4, message: "Hi, Hi,!" },
    { id: 5, message: "Hi, Yo!" },
    { id: 6, message: "Yo!" },
  ];

  let messangesItemx = messageData.map((m) => (
    <Message id={m.id} message={m.message} key={m.id} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        {messangesItemx}

        {/* <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
