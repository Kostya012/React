import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
// getState() получаем от store dialogsPage
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
  .map(dialog => <DialogItem img={dialog.img} name={dialog.name} id={dialog.id}/>);

  let messagesElements = state.messages
  .map(m => <Message message={m.message}/>);

  let newMessageBody = state.newMessageBody;

  // Создание ссылки:
  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
        {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
        <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
        <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
        <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
        <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>*/}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
              ref={newMessageElement}
              placeholder="Enter your message">
            </textarea>
          </div>
          <div>
            <button onClick={ onSendMessageClick }>
              Send
            </button>
          </div>

          {/*<Message message={messages[0].message}/>
        <Message message={messages[1].message}/>*/}
        </div>
      </div>
    </div>
  );
}

      export default Dialogs;