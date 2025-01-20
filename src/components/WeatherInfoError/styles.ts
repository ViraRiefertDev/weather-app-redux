import styled from "@emotion/styled"

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 710px;
  height: 180px;
  padding: 22px 36px;
  background-color: rgba(47, 72, 111, 0.62);
  backdrop-filter: blur(3px);
  border-radius: 30px;
  font-family: Inter, "Helvetica Neue", Helvetica, sans-serif;
`

export const ApiError = styled.div`
  font-weight: 500;
  font-size: 57px;
  color: #f35e5e;
`

export const ErrorMessage = styled.div`
  font-size: 18px;
  color:white;
`

/*  <ApiError>API Error</ApiError>
      <ErrorMessage>Something went wrong with API data</ErrorMessage> */
