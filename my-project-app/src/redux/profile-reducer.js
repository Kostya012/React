const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//initial first state при 1м rendere
let initialState = {
  posts: [
    {id: 1, message: 'Hello', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 23},
    {id: 3, message: 'how are you?', likesCount: 3},
    {id: 4, message: 'Begin day', likesCount: 7}
  ],
  newPostText: "Hello world!"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      //this._addPost();
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      //после добавления поста обнуление value textarea
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      //this._updateNewPostText(action.newText);
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;