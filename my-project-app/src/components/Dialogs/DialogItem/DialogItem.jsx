import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path} activeClassName={classes.activeLink}>
        <img src={`${props.img}`} />
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;