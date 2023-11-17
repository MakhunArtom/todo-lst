import {
  Head,
  Navigat,
  NavList,
  NavItem,
  Icon,
  Txt,
  Logo,
  StyledLink,
  AuturizeLink,
} from './Header.styled';

import { Conteiner } from '../index';

export const Header = () => {
  return (
    <Head>
      <Conteiner>
        <Navigat>
          <Logo to="/">
            <Icon />
            <Txt />
          </Logo>

          <NavList>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/features">Features</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/apps">Apps</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/premium">Premium</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="help">Help Center</StyledLink>
            </NavItem>
            <NavItem>
              <AuturizeLink to="/signIn">Sign In</AuturizeLink>
            </NavItem>
            <NavItem>
              <AuturizeLink to="/signUp">Sign Up for Free</AuturizeLink>
            </NavItem>
          </NavList>
        </Navigat>
      </Conteiner>
    </Head>
  );
};
