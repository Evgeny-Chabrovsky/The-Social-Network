const TOGGLE_FOLLOW = "TOGGLE-FOLLOW",
  SET_USERS = "SET-USERS";

let initialState = {
  users: [
    //   {
    //     id: 1,
    //     followed: false,
    //     img:
    //       "https://vse-frazi.ru/wp-content/uploads/2019/05/2019-11-27_191649.png",
    //     fullName: "Кузя",
    //     status: "I am a domovoy",
    //     location: { city: "Minsk", country: "Belarus" },
    //   },
    //   {
    //     id: 2,
    //     followed: false,
    //     img: "https://www.kinonews.ru/insimgs/newsimg/newsimg45941.jpg",
    //     fullName: "Беззубик",
    //     status: "I am a dragon",
    //     location: { city: "Oluh", country: "New Zeland" },
    //   },
    //   {
    //     id: 3,
    //     followed: true,
    //     img: "https://cdn.wallpapersafari.com/54/95/hi6l8a.jpg",
    //     fullName: "Dipper",
    //     status: "I am a man",
    //     location: { city: "Gravity Falls", country: "USA" },
    //   },
    //   {
    //     id: 4,
    //     followed: false,
    //     img:
    //       "https://pbs.twimg.com/profile_images/581671879091580928/RXUILDMc_400x400.png",
    //     fullName: "Stanley Pines",
    //     status: "I am an uncle",
    //     location: { city: "Gravity Falls", country: "USA" },
    //   },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: "TOGGLE-FOLLOW", userId });
export const setUsersAC = (users) => ({ type: "SET-USERS", users });
export default usersReducer;
