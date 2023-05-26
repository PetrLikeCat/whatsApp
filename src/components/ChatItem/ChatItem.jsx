import React from "react";
import "./ChatItem.css";
import { ReactComponent as UserAvatar } from "../../Images/user-avatar.svg";

function ChatItem({ telephoneNumber }) {
  return (
    <>
      <UserAvatar className="intercolor-avatar" />
      <div className="chat-item">+{telephoneNumber}</div>
    </>
  );
}
export default ChatItem;
