import { WeatherInfoContainer, TempContainer, Temperature, Country, CloudsContainer, CloudsImage } from "./styles";

function WeatherInfo() {
  return (
    <WeatherInfoContainer>
      <TempContainer>
        <Temperature>18°</Temperature>
        <Country>Colrado</Country>
      </TempContainer>
      <CloudsContainer>
        <CloudsImage src="/src/assets/cloudsExample.png"></CloudsImage>
      </CloudsContainer>
    </WeatherInfoContainer>
  )
}

export default WeatherInfo;
