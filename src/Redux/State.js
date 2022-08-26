import {rerenderTree} from "../Render";

let state = {

  profilePage: {
    posts: [
      {id: 1, message: 'hi', Like: 15},
      {id: 2, message: 'Hi,friend how are you?', Like: 87},
      {id: 3, message: 'The United States of America ?', Like: 321},
      {id: 4, message: 'England is a country that is part of the United Kingdom?', Like: 555},
      {id: 5, message: 'The United Kingdom?', Like: 62},
    ],
    sidebar: [
      {id: 1, name: 'Yoko-yoko'},
      {id: 2, name: 'Angel'},
      {id: 3, name: 'DarkBot'},
    ]

  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Evgeny'},
      {id: 2, name: 'Katerina'},
      {id: 3, name: 'Andrey'},
      {id: 4, name: 'Oleg'},
      {id: 5, name: 'Anastasia'},
      {id: 6, name: 'Vlad'},
    ],
    messages: [
      {id: 1, message: 'yo'},
      {id: 2, message: 'hello'},
      {id: 3, message: 'qq'},
      {id: 4, message: 'Wtf?'},
      {id: 5, message: 'good'},
      {id: 6, message: 'world'},

    ],
  }
}

export let addPost  = (postMessage) => {
  let postNew = {
    id:5, message: postMessage, like: 35
  };
  state.profilePage.posts.push(postNew);
  rerenderTree(state);

}
export default state;