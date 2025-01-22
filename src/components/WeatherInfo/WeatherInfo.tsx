import {
  WeatherInfoContainer,
  TempContainer,
  Temperature,
  Country,
  CloudsContainer,
  CloudsImage,
  ButtonsWrapper,
  WeatherBlock,
} from "./styles"
import Button from "../Button/Button"
import type { WeatherInfoProps } from "./types"
import { useAppDispatch } from "../../store/hooks"
import { weatherSliceActions } from "../../store/redux/weather/weatherSlice"

function WeatherInfo({ temp, city, icon, isHistory = true }: WeatherInfoProps) {
  const dispatch = useAppDispatch()
  const saveDataInHistory = () => {
    dispatch(weatherSliceActions.safeDataInHistory())
  }
  return (
    <WeatherBlock>
      <WeatherInfoContainer>
        <TempContainer>
          <Temperature>{temp}°</Temperature>
          <Country>{city}</Country>
        </TempContainer>
        <CloudsContainer>
          <CloudsImage src={icon}></CloudsImage>
          <CloudsImage src={icon}></CloudsImage>
          <CloudsImage src={icon}></CloudsImage>
        </CloudsContainer>
      </WeatherInfoContainer>
      {!isHistory && (
        <ButtonsWrapper>
          <Button name="Save" onClick={saveDataInHistory} />
          <Button name="Delete" />
        </ButtonsWrapper>
      )}
      {isHistory && (
        <ButtonsWrapper>
          <Button name="Delete" />
        </ButtonsWrapper>
      )}
    </WeatherBlock>
  )
}

export default WeatherInfo
