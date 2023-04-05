import { TextInputStyled } from "./Styled";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  icon?: React.ReactNode | null;
}

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
