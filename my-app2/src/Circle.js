import React from "react";
import Resizer from "./Resizer";

// import styled from "styled-components";

// const StyledCircle = styled.div`
//   background-color: green;
//   height: ${p => p.size}px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: ${p => p.size}px;
//   padding: 15px;
//   margin: 15px 0;
//   flex-direction: column;
//   border-radius: 100%;
// `;

// const Text = styled.span`
//   font-size: ${p => p.size}%;
// `;

const Circle = ({ ratio }) => {
  return (
    <Resizer>
      {({ width }) => {
        const size = document.documentElement.clientWidth * ratio || 200;
        // const fontSize = size * 0.75;
        return (
          <div className="circleBox" size={size}>
            <span>Window width is {document.documentElement.clientWidth}</span>
            <span>My width is {size}</span>
            <span>My ratio is {ratio}</span>
          </div>
        );
      }}
    </Resizer>
  );
};

export default Circle;
