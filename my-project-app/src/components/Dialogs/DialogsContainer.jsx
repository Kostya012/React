import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         // getState() получаем от store dialogsPage
//         let state = store.getState().dialogsPage;
//
//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageActionCreator());
//         };
//
//         let onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyActionCreator(body));
//         };
//         return (
//           <Dialogs updateNewMessageBody={onNewMessageChange}
//                    sendMessage={onSendMessageClick}
//                    dialogsPage={state}/>
//         );
//       }
//       }
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;