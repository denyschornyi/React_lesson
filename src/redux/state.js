let store = {
  rerenderEntireTree() {
    console.log('Changed state')
  },
  state: {
    profilePage: {
      postData: [
        {id: 1, postMessage: 'How you doing?', like: 3},
        {id: 2, postMessage: 'I ll be a PRO in React', like: 900}
      ],
      newPostText: 'Denys will get a React job in October'
    },
    dialogPage: {
      dialogData: [
        {id: 1, name: 'Denys', img: 'https://static.toiimg.com/photo/76729750.cms'},
        {id: 2, name: 'Daria', img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'},
        {id: 3, name: 'Maria', img: 'https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'},
        {id: 4, name: 'Artemus', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU'},
        {id: 5, name: 'Vova', img: 'https://static.toiimg.com/photo/76729750.cms'},
        {id: 6, name: 'Alex', img: 'https://static.toiimg.com/photo/76729750.cms'},
      ],
      messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you already a PRO in React?'}
      ],
      newMessage: ''
    }
  },
  addPost() {
    let newPost = {
      id: 3,
      postMessage: store.state.profilePage.newPostText,
      like: 0
    }
  
    store.state.profilePage.postData.push(newPost);
    store.state.profilePage.newPostText = '';
    store.rerenderEntireTree(store.state);
  },

  updateNewPostText(postTextData) {
    store.state.profilePage.newPostText = postTextData;
    store.rerenderEntireTree(store.state);
  },

  addMessage() {
    let newMessage = {
      id: 4,
      message: store.state.dialogPage.newMessage
    }
  
    store.state.dialogPage.messageData.push(newMessage);
    store.rerenderEntireTree(store.state);
    store.state.dialogPage.newMessage = '';
  },

  updateNewMessage(updatedMessageText) {
    store.state.dialogPage.newMessage = updatedMessageText;
    store.rerenderEntireTree(store.state);
  },

  subscribe(observer) {
    store.rerenderEntireTree = observer;
  }
}

export default store;


// let rerenderEntireTree = () => {
//   console.log('Changed state')
// }

// let state = {
//   profilePage: {
//     postData: [
//       {id: 1, postMessage: 'How you doing?', like: 3},
//       {id: 2, postMessage: 'I ll be a PRO in React', like: 900}
//     ],
//     newPostText: 'Denys will get a React job in October'
//   },
//   dialogPage: {
//     dialogData: [
//       {id: 1, name: 'Denys', img: 'https://static.toiimg.com/photo/76729750.cms'},
//       {id: 2, name: 'Daria', img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png'},
//       {id: 3, name: 'Maria', img: 'https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'},
//       {id: 4, name: 'Artemus', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU'},
//       {id: 5, name: 'Vova', img: 'https://static.toiimg.com/photo/76729750.cms'},
//       {id: 6, name: 'Alex', img: 'https://static.toiimg.com/photo/76729750.cms'},
//     ],
//     messageData: [
//       {id: 1, message: 'Hi'},
//       {id: 2, message: 'How are you?'},
//       {id: 3, message: 'Are you already a PRO in React?'}
//     ],
//     newMessage: ''
//   }
// }
// export default state;

// export const addPost = () => {
//   let newPost = {
//     id: 3,
//     postMessage: state.profilePage.newPostText,
//     like: 0
//   };

//   state.profilePage.postData.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// }


// export const updateNewPostText = (postTextData) => {

//   state.profilePage.newPostText = postTextData;
//   rerenderEntireTree(state);
// }

// export const addMessage = () => {
//   let newMessage = {
//     id: 4,
//     message: state.dialogPage.newMessage
//   }

//   state.dialogPage.messageData.push(newMessage);
//   rerenderEntireTree(state);
//   state.dialogPage.newMessage = '';
// }

// export const updateNewMessage = (updatedMessageText) => {
//   state.dialogPage.newMessage = updatedMessageText;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }