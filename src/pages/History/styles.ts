import styled from "@emotion/styled"

export const HistoryPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:80px;
  margin:90px 0 82px 0;
  justify-content: center;
  align-items: center;
  max-height: 1500px;
`

export const WeatherCards = styled.div`
  display: flex;
  flex-direction: column;
  gap:80px;
  min-height:450px;
  max-height: 500px;
  justify-content: start;
  align-items: center;
  padding:30px;
  overflow:auto;
`

export const ButtonContainer = styled.div`
  width:782px;
`
export const NoSavedData = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding:30px;
  background-color: rgba(18, 45, 77, 0.8);
  color:#fff;
  font-weight:900;
  font-size:35px;
  border-radius: 30px;
`