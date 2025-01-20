import type { ButtonProps } from "./types"
import { MainButton } from "./styles"

function Button({
  name = "",
  children,
  type = "button",
  onClick,
  disabled = false,
  buttonWidth = "100%",
}: ButtonProps) {
  return (
    <MainButton
      buttonWidth={buttonWidth}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
      {children}
    </MainButton>
  )
}

export default Button
