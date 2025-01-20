import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import WeatherInfoError from "../../components/WeatherInfoError/WeatherInfoError";
import { ButtonWrapper, HomePageWrapper, InputContainer } from "./styles";

function Home(){
  return(
    <HomePageWrapper>
      <InputContainer>
        <Input name="input-data" placeholder="Colrado"/>
        <ButtonWrapper><Button name='Search'/></ButtonWrapper>
      </InputContainer>
      <WeatherInfo/>
      {/* <WeatherInfoError/> */}
    </HomePageWrapper>
  )
}

export default Home;