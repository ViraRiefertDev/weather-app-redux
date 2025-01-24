import Button from "components/Button/Button"
import { PageNotFoundContainer, ErrorCode, ErrorInfoContainer, ErrorTitle, ErrorText, SocketBild } from "./styles"
import Socket from '../../assets/socket.svg'
import { useNavigate } from "react-router-dom"

function PageNotFound() {
  
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <PageNotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <SocketBild src={Socket}/>
      <ErrorInfoContainer>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorText>
          Sorry, the page you’re looking for does not exist or has been moved
          please go back to the Home page
        </ErrorText>
        <Button name="Go back Home" isWeatherCard={false} onClick={goToHomePage}/>
      </ErrorInfoContainer>
    </PageNotFoundContainer>
  )
}

export default PageNotFound;
