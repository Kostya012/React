import React from "react";
import styles from './users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=',
        followed: false,
        fullName: 'Ivan',
        status: 'i am a teacher',
        location: {city: 'Kharkiv', country: 'Ukraine'}
      },
      {
        id: 2,
        photoUrl: 'https://vokrug-tv.ru/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg',
        followed: true, fullName: 'Max', status: 'i am a student', location: {city: 'Kiev', country: 'Ukraine'}
      },
      {
        id: 3,
        photoUrl: 'data:image/png;base64,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',
        followed: false, fullName: 'Alex', status: 'i am a working', location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 4,
        photoUrl: 'https://techfusion.ru/wp-content/uploads/2020/05/mef.jpg',
        followed: true, fullName: 'Masha', status: 'i am a model', location: {city: 'New York', country: 'USA'}
      }
    ])
  };

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.follow(u.id)
                }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
      There place users
    </div>)
};

export default Users;