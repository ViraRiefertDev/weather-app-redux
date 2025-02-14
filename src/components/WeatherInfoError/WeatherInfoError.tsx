import Button from "components/Button/Button"
import {
  ApiError,
  ButtonsWrapper,
  ErrorMessage,
  WeatherInfoContainer,
} from "./styles"
import type { WeatherInfoErrorProps } from "./types"
import { useAppDispatch } from "store/hooks"
import { weatherSliceActions } from "store/redux/weather/weatherSlice"

function WeatherInfoError({ error}: WeatherInfoErrorProps) {
  const {code, message} = error;
  const dispatch =useAppDispatch()
  const onDeleteButtonClick =()=>{
    dispatch(weatherSliceActions.deleteErrorInfo())
  }

  return (
    <WeatherInfoContainer>
      <ApiError>{code}</ApiError>
      <ErrorMessage>{message}</ErrorMessage>
      <ButtonsWrapper>
        <Button name="Delete" onClick={onDeleteButtonClick} />
      </ButtonsWrapper>
    </WeatherInfoContainer>
  )
}

export default WeatherInfoError
