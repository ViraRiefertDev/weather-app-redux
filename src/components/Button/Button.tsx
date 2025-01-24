import type { ButtonProps } from "./types"
import { MainButton } from "./styles"

function Button({
  name = "",
  children,
  type = "button",
  onClick,
  isWeatherCard = true,
  buttonWidth = "100%",
}: ButtonProps) {
  return (
    <MainButton
      buttonWidth={buttonWidth}
      type={type}
      onClick={onClick}
      isWeatherCard={isWeatherCard}
    >
      {name}
      {children}
    </MainButton>
  )
}

export default Button
