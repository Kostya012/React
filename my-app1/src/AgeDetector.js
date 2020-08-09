import React from 'react';

function Message(props) {
  if (props.age < 18) {
    return <h1>Упс, ты ещё маленький!</h1>;
  }
  else if ((props.age <= 21) && (props.age >= 18)) {
    return <h1>Добро пожаловать!</h1>;
  }
  else if ((props.age > 21) && (props.age <= 25)) {
    return <h1>Ну ещё ок.</h1>;
  }
  else if (props.age > 25) {
    return <h1>Слишком взрослый</h1>;
  }
};

export default Message;