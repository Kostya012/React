import React from "react";
import Resizer from "./Resizer";

const Box = ({ ratio }) => {
  return (
    <Resizer>
      {({ width }) => {
        const sqWidth = document.documentElement.clientWidth * ratio || 200;
        const styleSq = {
          width: String({sqWidth}),
          height: String({sqWidth})
        };
        return (
          <div className="sqBox" style= {styleSq}>
            <span>Window width is {document.documentElement.clientWidth}</span>
            <span>My width is {sqWidth}</span>
            <span>My ratio is {ratio}</span>
          </div>
        );
      }}
    </Resizer>
  );
};

export default Box;
