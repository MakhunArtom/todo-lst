import styled from 'styled-components';

import { ReactComponent as icon } from './../../svg/icon-logo.svg';
import { ReactComponent as txt } from './../../svg/txt-logo.svg';

import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06);
`;

export const Navigat = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const NavItem = styled.nav`
  /* display: flex; */
`;

export const Icon = styled(icon)`
  width: 40px;
  height: 40px;
`;

export const Txt = styled(txt)`
  height: 32px;
  width: 140px;
`;

export const Logo = styled(NavLink)`
  padding: 18px 0;

  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  padding: 18px 0;

  text-decoration: none;
`;
