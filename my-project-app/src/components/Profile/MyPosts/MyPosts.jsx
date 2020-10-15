import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

  let postsElement =
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)
    // Создание ссылки:
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange }
                    ref={newPostElement}
                    value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        { postsElement }
        {/*<Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>*/}
      </div>
    </div>
  );
};

export default MyPosts;