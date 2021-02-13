let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" },
  { id: 7, name: "Olga" },
];
let messageData = [
  { id: 1, message: "куку" },
  { id: 2, message: "Hi, I'm your second message!" },
  { id: 3, message: "Hi, I'm your third message!" },
  { id: 4, message: "Hi, Hi,!" },
  { id: 5, message: "Hi, Yo!" },
  { id: 6, message: "Yo!" },
];

export function getDialogs() {
  return dialogsData;
}
export function getMessages() {
  return messageData;
}
