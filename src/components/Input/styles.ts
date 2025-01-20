import styled from '@emotion/styled';


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:4px;
  width: 100%;
`;

export const InputElement = styled.input`
  width: 550px;
  height: 50px;
  padding: 12px 20px;
  outline: none;
  background-color: transparent;
  backdrop-filter: blur(16px);
  border: 1px solid white;
  border-radius: 40px;
  font-size: 16px;
  color: #ffffff;
  font-weight:600;
    font-size:20px;
  

  &::placeholder {
    color: #ffffff;
    opacity:50%;
  }
`;

