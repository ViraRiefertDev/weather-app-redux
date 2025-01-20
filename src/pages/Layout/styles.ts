import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url('/src/assets/bg.png');
  background-size:cover;
  background-position: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25.5px 85px;
  width: 100%;
  height: fit-content;
  background-color: rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(17.8px);
  border-bottom:1px solid #D2D2D2;
  color: white;
  font-family: Inter, "Helvetica Neue", Helvetica, sans-serif;
`;

export const HeaderLogoContainer = styled.div`
  cursor: pointer;
  font-weight:700;
  font-size:24px;
  line-height:29px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 63px;
  font-weight:700;
  font-size:20px;
  line-height:24.2px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

