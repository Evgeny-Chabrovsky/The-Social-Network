import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        img:
          "https://vse-frazi.ru/wp-content/uploads/2019/05/2019-11-27_191649.png",
        fullName: "Кузя",
        status: "I am a domovoy",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: false,
        img: "https://www.kinonews.ru/insimgs/newsimg/newsimg45941.jpg",
        fullName: "Беззубик",
        status: "I am a dragon",
        location: { city: "Oluh", country: "New Zeland" },
      },
      {
        id: 3,
        followed: true,
        img: "https://cdn.wallpapersafari.com/54/95/hi6l8a.jpg",
        fullName: "Dipper",
        status: "I am a man",
        location: { city: "Gravity Falls", country: "USA" },
      },
      {
        id: 4,
        followed: false,
        img:
          "https://pbs.twimg.com/profile_images/581671879091580928/RXUILDMc_400x400.png",
        fullName: "Stanley Pines",
        status: "I am an uncle",
        location: { city: "Gravity Falls", country: "USA" },
      },
    ]);
  }
  debugger;
  return (
    <div>
      {props.users.map((u) => (
        <UserItem
          key={u.id}
          id={u.id}
          followed={u.followed}
          img={u.img}
          fullName={u.fullName}
          status={u.status}
          location={u.location}
          follow={props.follow}
          //   setUsers={props.setUsers}
        />
      ))}
    </div>
  );
};
export default Users;
