import React from "react";
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

// let classes = {
//   'nav': 'NavBar_nav__2m2kn',
//   'item': 'NavBar_item__2m23m',
//   'active': 'NavBar_active__4j2j3',
// }

{/* <li className= "item active"></li>
let c1 = "item";
let c2 = "active";
"item active";
let classes = c1 + " " + c2;
let classes = `${classes.item} ${classes.active}`; */}


const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={`${classes.item}`}>
          <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </li>
        <li className={`${classes.item} ${classes.active}`}>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
        </li>
        <li className={`${classes.item}`}>
          <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
        </li>
        <li className={`${classes.item}`}>
          <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
        </li>
        <li className={`${classes.item}`}>
          <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </li>
        <li className={`${classes.item}`}>
          <NavLink to="/friends" activeClassName={classes.activeLink}>Friends</NavLink>
        </li>
      </ul>
        <div className={`${classes.itemFriends}`}>
          <NavLink to="/friends" activeClassName={classes.activeLink}>
            <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
          </NavLink>
        {/*</div>*/}
        {/*<div className={`${classes.itemFriends}`}>*/}
          <NavLink to="/friends" activeClassName={classes.activeLink}>
            <img src="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg" />
          </NavLink>
        {/*</div>*/}
        {/*<div className={`${classes.itemFriends}`}>*/}
          <NavLink to="/friends" activeClassName={classes.activeLink}>
            <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
          </NavLink>
        {/*</div>*/}
      </div>

    </nav>
  );
};

export default NavBar;
