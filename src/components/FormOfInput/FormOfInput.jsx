import React from "react";
import "./FormOfInput.css";
import { ReactComponent as SendMessage } from "../../Images/send-message-icon.svg";
function FormOfInput({
  placeholder,
  onChangeInput,
  onSubmit,
  value,
  className,
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className={className}
    >
      <input
        className={`${className}__input`}
        placeholder={placeholder}
        onChange={(value) => onChangeInput(value)}
        value={value}
      />
      <button className={`${className}__button`} type="submit">
        <SendMessage />
      </button>
    </form>
  );
}

export default FormOfInput;
