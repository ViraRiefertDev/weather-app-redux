import { ButtonContainer, HistoryPageWrapper, WeatherCards } from "./styles"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import {
  weatherSliceSelectors,
  weatherSliceActions,
} from "../../store/redux/weather/weatherSlice"
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo"
import type { WeatherInfoProps } from "../../components/WeatherInfo/types"
import { v4 } from "uuid"
import Button from "components/Button/Button"

function History() {
  const { data } = useAppSelector(weatherSliceSelectors.weatherData)
  const dispatch = useAppDispatch();
  const onDeleteAllCards = () => {
    dispatch(weatherSliceActions.deleteAllHistoryCard())
  }
  const history = data.historyWeatherData.map((weather: WeatherInfoProps) => {
    return (
      <WeatherInfo
        id={weather.id}
        icon={weather.icon}
        city={weather.city}
        temp={weather.temp}
      />
    )
  })
  return (
    <HistoryPageWrapper key={v4()}>
      <WeatherCards>{history}</WeatherCards>
      {data.historyWeatherData.length > 0 && (
        <ButtonContainer>
          <Button name="Delete all cards" onClick={onDeleteAllCards}/>
        </ButtonContainer>
      )}
    </HistoryPageWrapper>
  )
}

export default History
