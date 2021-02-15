export let state = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
    { id: 7, name: "Olga" },
  ],
  messagesData: [
    { id: 1, message: "куку" },
    { id: 2, message: "Hi, I'm your second message!" },
    { id: 3, message: "Hi, I'm your third message!" },
    { id: 4, message: "Hi, Hi,!" },
    { id: 5, message: "Hi, Yo!" },
    { id: 6, message: "Yo!" },
  ],
  postsData: [
    { id: 1, post: "It's my first post", likeCount: 15 },
    { id: 2, post: "Всем привет", likeCount: 1 },
    { id: 3, post: "Плохой день", likeCount: 50 },
    { id: 4, post: "Удача!!!", likeCount: 100 },
    { id: 4, post: "Ура все получилось. Это новый пост!!", likeCount: 1000000 },
  ],
};
export default state;
// export function getDialogs() {
//   return state.dialogsData;
// }

// export function getMessages() {
//   return state.messageData;
// }

// export function getPosts() {
//   return state.postsData;
// }
export let addPost = (postMessage) => {
  let newPost = {
    id: state.postsData.length + 1,
    post: postMessage,
    likeCount: 0,
  };
  state.postsData.push(newPost);
};
