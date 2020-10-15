import React from "react";
import classes from "./Post.module.css";

let counter = 0;

function counterLikes () {
return counter++
}

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg" />
      { props.message }
      <div>
        <span>like </span>
        { props.likesCount }
      </div>
    </div>
  );
};

export default Post;
