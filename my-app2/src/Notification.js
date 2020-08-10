import React from "react";

const Notification = ({ message, delay }) => {
  const [vissible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setVisible(false);
    }, delay);
    return () => {
      clearInterval(timerId);
    };
  }, [message, vissible, delay]);

  React.useEffect(() => {
    setVisible(true);
  }, [message]);

  if (vissible) {
    return <div>{message}</div>;
  }

  return (
    <button onClick={() => setVisible(true)}>Show notification again.</button>
  );
};

export default Notification;
