import React from "react";
import "./Message.css";

function MessageItem({ messageName, className }) {
  return <div className={`message ${className}`}>{messageName}</div>;
}
export default MessageItem;
