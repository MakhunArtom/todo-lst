import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as icon } from './../../svg/icon-logo.svg';
import { ReactComponent as txt } from './../../svg/txt-logo.svg';

export const Head = styled.header`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06);
`;

export const Navigat = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;

  margin: 0;
  padding: 0;

  column-gap: 30px;

  list-style: none;
`;

export const NavItem = styled.li``;

export const Icon = styled(icon)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const Txt = styled(txt)`
  height: 32px;
  width: 140px;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 18px 0;

  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  position: relative;

  padding-top: 28px;
  padding-bottom: 28px;

  font-size: 15px;

  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;

  &:hover,
  &:focus {
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;

      display: inline-block;
      width: 100%;
      height: 2px;

      background-color: blue;
    }
  }

  &.active {
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;

      display: inline-block;
      width: 100%;
      height: 2px;

      background-color: #4772fa;
    }
  }
`;

export const AuturizeLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;

  font-size: 15px;

  color: rgba(0, 0, 0, 0.87);
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    font-weight: 600;

    border: 1px solid #000000;
  }
`;
