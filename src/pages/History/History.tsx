import { HistoryPageWrapper } from "./styles"
import { useAppSelector } from "../../store/hooks"
import { weatherSliceSelectors } from "../../store/redux/weather/weatherSlice"
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo"
import type { WeatherInfoProps } from "../../components/WeatherInfo/types"
import { v4 } from "uuid"

function History() {
  const { data } = useAppSelector(weatherSliceSelectors.weatherData)
  const { temp, city, icon } = data.weatherData

  const history = data.historyWeatherData.map((weather: WeatherInfoProps) => {
    return <WeatherInfo icon={icon} city={city} temp={temp} />
  })
  return <HistoryPageWrapper key={v4()}>{history}</HistoryPageWrapper>
}

export default History
