import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updataUserInputPhoneNumer,
  onSubmitPhoneNumber,
  onClickBtnNewChat,
} from "../../store/PhoneNumberForMessagingSlice";
import FormOfInput from "../FormOfInput/FormOfInput";
import "./InputTelephoneNumber.css";
import UserData from "../UserData/UserData";
import ChatItem from "../ChatItem/ChatItem";

function InputTelephoneNumber() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const idInstance = state.userData.userData.idInstance;
  const apiTokenInstance = state.userData.userData.apiTokenInstance;
  const inputPhoneNumber = state.phoneNumber.userInputPhoneNumer;
  const phoneNumber = state.phoneNumber.userSubmitPhoneNumber;

  const clickBtn = state.phoneNumber.clickedBtnNewChat;
  const addNewChat = () => {
    dispatch(onSubmitPhoneNumber(inputPhoneNumber));
    dispatch(onClickBtnNewChat(false));
  };
  const newChat = () => {
    dispatch(onClickBtnNewChat(true));
  };
  return (
    <div className="user-window">
      <UserData idInstance={idInstance} apiTokenInstance={apiTokenInstance} />
      <div className="user-window__create-interlocutor">
        {clickBtn ? (
          <div className="user-window__telephone-number">
            <FormOfInput
              className="input-telephone-number-form"
              placeholder="Введите телефон"
              onChangeInput={(inputValue) => {
                dispatch(updataUserInputPhoneNumer(inputValue.target.value));
              }}
              onSubmit={addNewChat}
            />
          </div>
        ) : (
          <button className="user-window__create-chat" onClick={newChat}>
            Создать чат
          </button>
        )}
      </div>
      {phoneNumber !== "" ? (
        <div className="user-window__chats">
          {phoneNumber === "" ? null : (
            <ChatItem telephoneNumber={phoneNumber} />
          )}
        </div>
      ) : null}
    </div>
  );
}
export default InputTelephoneNumber;
