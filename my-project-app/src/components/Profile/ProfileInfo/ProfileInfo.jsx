import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.fon}
          src="https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTY2MDMyNTc4NTIyOTE2NDk0%2F7-wonders-of-the-world-gettyimages-596429035.jpg"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img src="https://c7.hotpng.com/preview/923/367/696/beard-art-face-logo-beard.jpg"/>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
