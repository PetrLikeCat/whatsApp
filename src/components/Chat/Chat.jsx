import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import axios from "axios";
import "./Chat.css";
import FormOfInput from "../FormOfInput/FormOfInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, updateInputMessage } from "../../store/ChatSlice";
import { ReactComponent as UserAvatar } from "../../Images/user-avatar.svg";

function Chat() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const idInstance = state.userData.userData.idInstance;
  const messages = state.chatMessages.chatMessages;
  const apiTokenInstance = state.userData.userData.apiTokenInstance;
  const currentMessage = state.chatMessages.inputMessage;
  const phoneNumberToSendMessage = state.phoneNumber.userSubmitPhoneNumber;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callUpdate(), []);
  function callUpdate() {
    axios
      .get(
        `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
      )
      .then((res) => {
        if (res.data != null) {
          if (res.data.body.typeWebhook === "incomingMessageReceived") {
            if (res.data.body.messageData.typeMessage === "textMessage")
              dispatch(
                addMessage({
                  value: res.data.body.messageData.textMessageData.textMessage,
                  type: "accepted",
                  chatId: res.data.body.senderData.chatId,
                  key: res.data.receiptId,
                })
              );
            axios
              .delete(
                `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${res.data.receiptId}`
              )
              .then(() => {
                return callUpdate();
              });
          } else if (
            res.data.body.typeWebhook === "outgoingMessageStatus" ||
            "outgoingAPIMessageReceived"
          ) {
            axios
              .delete(
                `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${res.data.receiptId}`
              )
              .then(() => {
                return callUpdate();
              });
          }
        } else return callUpdate();
      });
  }
  const sendMessage = () => {
    const user = {
      chatId: `${phoneNumberToSendMessage}@c.us`,
      message: `${currentMessage}`,
    };
    axios
      .post(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        user
      )
      .then((res) => {
        dispatch(
          addMessage({
            value: currentMessage,
            type: "sent",
            chatId: `${phoneNumberToSendMessage}@c.us`,
            key: res.data.receiptId,
          })
        );
        dispatch(updateInputMessage(""));
      });
  };
  const inputMessage = (event) => {
    dispatch(updateInputMessage(event.target.value));
  };

  return (
    <div className="chat">
      <div className="chat__interlocutor-data">
        <UserAvatar className="chat__interlocutor-data__user-avatar" />
        <p className="interlocutor-phone-number">{`+ ${phoneNumberToSendMessage}`}</p>
      </div>
      <div className="chat__messages">
        <div className="chat__messages__items">
          {messages.map((item) => {
            if (item.chatId === `${phoneNumberToSendMessage}@c.us`)
              return (
                <MessageItem
                  key={item.key}
                  className={item.type}
                  messageName={item.value}
                ></MessageItem>
              );
            else return null;
          })}
        </div>
        <div className="chat__input-message">
          <FormOfInput
            className="input-message-form"
            value={currentMessage}
            onSubmit={sendMessage}
            placeholder="Введите сообщение"
            onChangeInput={inputMessage}
          />
        </div>
      </div>
    </div>
  );
}
export default Chat;
