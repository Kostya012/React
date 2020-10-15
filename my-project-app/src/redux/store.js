import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// для Dialogs ввод сообщений for users
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  // приватное свойство
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'how are you?', likesCount: 3},
        {id: 4, message: 'Begin day', likesCount: 7}
      ],
      newPostText: "Hello world!"
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you do?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Let\'s go to the cinema'}
      ],
      dialogs: [
        {
          id: 1,
          name: 'Kostya',
          img: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg'
        },
        {
          id: 2,
          name: 'Sanya',
          img: 'data:image/png;base64,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'
        },
        {
          id: 3,
          name: 'Dima',
          img: 'data:image/jpeg;base64,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'
        },
        {
          id: 4,
          name: 'Maria',
          img: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/422/kak_sdelat_artavatarku_v_instagram_17.jpg'
        },
        {
          id: 5,
          name: 'Max',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7ou1Z-7kOMhTr93snPvDmpNKmwH7fuYJ58w&usqp=CAU'
        }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  // приватный метод
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) { // это паттерн observer для перерисовки всей страницы
    this._callSubscriber = observer; // patern observer
  },

  /*_addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    //после добавления поста обнуление value textarea
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },*/

  dispatch(action) { // { type: "ADD-POST" }

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}



// сокращаем код:


// store OOP
//создаём ф-цию addPost() добавления поста
//export впереди названия без default для экспорта
//observer-наблюдатель

export default store;
//для консоли просмотра state
window.store = store;