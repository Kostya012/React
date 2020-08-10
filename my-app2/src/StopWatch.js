import React from "react";
// import styled from "styled-components";

// const Count = styled.div`
//   font-size: 44px;
//   padding: 20px;
// `;

const StopWatch = () => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    start();
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  const start = () => {
    ref.current = setInterval(() => {
      setCount(p => p + 1);
    }, 1000);
  };

  const reset = () => {
    stop();
    setCount(0);
    start();
  };

  const stop = () => {
    clearInterval(ref.current);
  };
  return (
    <div>
      {count}s
      {/* <Count>{count}s</Count> */}
      <div>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
