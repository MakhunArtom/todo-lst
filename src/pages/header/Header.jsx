import { Head, Navigat, NavList, NavItem, Icon, Txt, Logo, StyledLink } from './Header.styled';

import { Conteiner } from './../../components/index';

export const Header = () => {
  return (
    <Head>
      <Conteiner>
        <Navigat>
          <Logo>
            <Icon />
            <Txt />
          </Logo>

          <NavList>
            <NavItem>
              <StyledLink>Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>Features</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>Apps</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>Premium</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>Help Center</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>Sign In</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>Sign Up for Free</StyledLink>
            </NavItem>
          </NavList>
        </Navigat>
      </Conteiner>
    </Head>
  );
};
