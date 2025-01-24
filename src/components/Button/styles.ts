import styled from '@emotion/styled';

interface ButtonStyledProps {
  isWeatherCard: boolean;
  buttonWidth?:string;
}

export const MainButton = styled.button<ButtonStyledProps>`

  width: 100%;
  height:100%;
  padding: 12px 40px;

  background-color: ${({ isWeatherCard }) => (isWeatherCard ? 'rgba(54, 120, 180, 0)' : 'rgba(54, 120, 180, 1)')};
  font-family: Inter, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 20px;
  line-height:24.2px;
  line-height: 30px;
  color: #ffffff;
  border: ${({ isWeatherCard }) => (isWeatherCard ? '1px solid #fff': 'none')};
  border-radius: 50px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  transition: all 0.2s ;
  &:hover{
    background-color: #1fb1f5;
    transition: all 0.2s ;
  }
  &:active{
    background-color: #85a6b5;
  }
`;
