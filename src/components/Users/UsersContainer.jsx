import { toggleFollowAC, setUsersAC } from "./../services/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(toggleFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
debugger;
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
