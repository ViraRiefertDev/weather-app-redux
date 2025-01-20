import { ApiError, ErrorMessage, WeatherInfoContainer} from "./styles";

function WeatherInfoError() {
  return (
    <WeatherInfoContainer>
      <ApiError>API Error</ApiError>
      <ErrorMessage>Something went wrong with API data</ErrorMessage>
    </WeatherInfoContainer>
  )
}

export default WeatherInfoError;
