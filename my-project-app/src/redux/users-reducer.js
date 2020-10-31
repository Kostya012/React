const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

//initial first state при 1м rendere
let initialState = {
  users: [ ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      // нам нужно поменять в массиве followed true на false
      // копируем state
      let stateCopy = {
        ...state,
        // 2 идентичные записи:
        //users: [...state.users]
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      };
      return stateCopy;
    };
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };
    };
    case SET_USERS: {
      return {
        ...state,
        users: [ ...state.users, ...action.users]
      }
    }
    default:
      return state;
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId
  }
};

export const unfollowAC = (userId) =>
  ({type: UNFOLLOW, userId: userId});

// Устанавливаем set users:
export const setUsersAC = (users) =>
  ({type: SET_USERS, users});

export default usersReducer;