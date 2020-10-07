import React from "react";
import classes from "./../Dialogs.module.css";
import Post from "../../Profile/MyPosts/Post/Post";

const Message = (props) => {

  return (
    <div className={classes.message}>{props.message}
    </div>
  )
}

export default Message;