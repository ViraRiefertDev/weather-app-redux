import styled from '@emotion/styled';

export const WeatherInfoContainer = styled.div`
  display: flex;
  gap: 168px;
  min-width:710px;
  height: 180px;
  padding: 22px 36px;
  background-color: rgba(47, 72, 111, 0.62);
  backdrop-filter: blur(3px);
  border-radius:30px;
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
  min-width:290px
`;

export const CloudsImage = styled.img`
  width:100%;
`;



