import React from "react";
import "./UserSignUp.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updataUserInputIdInstance,
  updataUserInputApiTokenInstance,
  updataUserAuthorizationIdInstance,
  updataUserAuthorizationApiTokenInstance,
} from "../../store/UserInputSlice";

function UserSignUp() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const apiTokenInstance = state.userData.apiTokenInstance;
  const idInstance = state.userData.idInstance;
  const updataUser = () => {
    dispatch(updataUserAuthorizationIdInstance(idInstance));
    dispatch(updataUserAuthorizationApiTokenInstance(apiTokenInstance));
  };
  return (
    <div className="user-sign-up">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updataUser();
        }}
        className="user-sign-up__container"
      >
        <input
          className="user-sign-up__input"
          placeholder="Введите idInstance"
          onChange={(inputValue) => {
            dispatch(updataUserInputIdInstance(inputValue.target.value));
          }}
        />
        <input
          className="user-sign-up__input"
          placeholder="Введите apiTokenInstance"
          onChange={(inputValue) => {
            dispatch(updataUserInputApiTokenInstance(inputValue.target.value));
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default UserSignUp;
