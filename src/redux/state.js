import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';

let store = {
  
  _state: {
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
  _callSubscriber() {
    console.log('Changed state')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    console.log(profileReducer)
    console.log(dialogReducer)
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

    this._callSubscriber(this._state);
  }

}

export default store;