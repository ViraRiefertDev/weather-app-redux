import { useNavigate } from "react-router-dom"
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  NavContainer,
  StyledNavLink,
  Main,
} from "./styles"
import type { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          Weather App
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/history">History</StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
