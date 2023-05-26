import React from "react";
import InputTelephoneNumber from "../InputTelephoneNumber/InputTelephoneNumber";
import Chat from "../Chat/Chat.jsx";
import "./ChatWindow.css";
import { useSelector } from "react-redux";
import { ReactComponent as StartMessage } from "../../Images/start-message.svg";

function ChatWindow() {
  const telephoneNumber = useSelector(
    (state) => state.phoneNumber.userSubmitPhoneNumber
  );

  return (
    <div className="chat-window">
      <InputTelephoneNumber />
      {telephoneNumber === "" ? (
        <div className="chat-window__empty-chat">
          <StartMessage />
        </div>
      ) : (
        <Chat />
      )}
    </div>
  );
}
export default ChatWindow;
