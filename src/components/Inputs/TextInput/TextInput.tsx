import React from "react";
import { TextInputStyled } from "./Styled";
import { TextInputProps } from "./types";

const TextInput = ({
  label = "",
  placeholder = "Write here...",
  value = "",
  disabled = false,
  readOnly = false,
  icon = null,
}: TextInputProps): JSX.Element => {
  return (
    <TextInputStyled disabled={disabled}>
      {label.length > 0 && <label>{label}</label>}
      <div className="input">
        {icon && <div>{icon}</div>}
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
    </TextInputStyled>
  );
};

export default TextInput;
