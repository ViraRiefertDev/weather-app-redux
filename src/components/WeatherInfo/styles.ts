import styled from '@emotion/styled';

export const WeatherBlock = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  min-width:710px;
  max-height: 180px;
  padding: 22px 36px;
  background-color: rgba(47, 72, 111, 0.62);
  backdrop-filter: blur(3px);
  border-radius:30px;
`

export const WeatherInfoContainer = styled.div`
  display: flex;
  gap: 250px;
  min-width:710px;
  max-height: 180px;
  padding: 10px 36px 0 36px;

`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  font-family: Inter, "Helvetica Neue", Helvetica, sans-serif;
  color:white;
`;

export const Temperature = styled.div`
  font-weight:500;
  font-size:57px;
  
`;

export const Country = styled.div`
  font-weight:700;
  font-size:20px;
`;

export const CloudsContainer = styled.div`
display: flex;
  max-width:490px;
`;

export const CloudsImage = styled.img`
  width:150%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap:95px;
  width:155px;

`


