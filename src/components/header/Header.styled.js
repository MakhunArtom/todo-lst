import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as icon } from './../../svg/icon-logo.svg';
import { ReactComponent as txt } from './../../svg/txt-logo.svg';

export const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  background-color: #ffffff;
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

  transition: color 250ms linear;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    display: inline-block;
    width: 100%;
    height: 2px;

    opacity: 0;
    background-color: blue;

    transition: opacity 250ms linear;
  }

  &:hover,
  &:focus {
    color: blue;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }

  &.active {
    color: blue;
  }

  &.active::after {
    opacity: 1;
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

  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #000000;
  }
`;
