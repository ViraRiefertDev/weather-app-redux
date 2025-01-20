import './styles.js';
import type { InputProps } from './types.js';
import { InputContainer, InputElement} from './styles.js';

function Input({
  name,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputProps) {
  // console.log("Input render or re-render");

  return (
    <InputContainer>
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;
