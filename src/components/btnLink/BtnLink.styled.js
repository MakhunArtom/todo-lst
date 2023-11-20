import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px 20px;

  font-weight: 700;
  font-size: 20px;

  border: none;
  border-radius: 6px;

  text-decoration: none;
  outline: none;
`;

export const PrimaryLink = styled(StyledLink)`
  margin-right: 20px;

  color: #ffffff;
  background-color: #3e60cd;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #d18b13;
  }
`;

export const SecondaryLink = styled(StyledLink)`
  color: rgba(0, 0, 0, 0.87);
  border: 1px solid rgba(0, 0, 0, 0.24);

  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid #000000;
  }
`;
