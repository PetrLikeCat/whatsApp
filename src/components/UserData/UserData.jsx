import React from "react";
import "./UserData.css";
import { ReactComponent as UserAvatar } from "../../Images/user-avatar.svg";

function UserData({ idInstance }) {
  return (
    <div className="user-data-auto">
      <UserAvatar className="user-data-auto__avatar" />
      <p>idInstance:{idInstance}</p>
    </div>
  );
}
export default UserData;
