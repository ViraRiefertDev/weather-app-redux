import { ApiError, ErrorMessage, WeatherInfoContainer} from "./styles";
import type { WeatherInfoErrorProps } from "./types";

function WeatherInfoError({message}:WeatherInfoErrorProps) {
  return (
    <WeatherInfoContainer>
      <ApiError>API Error</ApiError>
      <ErrorMessage>{message}</ErrorMessage>
    </WeatherInfoContainer>
  )
}

export default WeatherInfoError;
