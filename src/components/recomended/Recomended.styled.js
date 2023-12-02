import styled from 'styled-components';

import { ReactComponent as LowBracket } from './../../svg/recomendedSvg/lowBracket.svg';
import { ReactComponent as UppBracket } from './../../svg/recomendedSvg/upperBracket.svg';

export const Section = styled.section`
  padding-top: 72px;
  padding-bottom: 72px;

  background-color: #ffffff;
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
  padding: 20px;

  width: 100%;

  &:hover > p {
    color: blue;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: 40px;
  text-align: left;

  max-width: 937px;

  transition: color 250ms linear;
`;

export const LowerBracket = styled(LowBracket)`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 36px;
  height: 36px;
  fill: rgba(0, 0, 0, 0.24);

  transform: rotate(180deg);
`;

export const UpperBracket = styled(UppBracket)`
  position: absolute;
  top: 0;
  left: 0;

  width: 36px;
  height: 36px;
  fill: rgba(0, 0, 0, 0.24);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  margin: 0;
  padding: 0;

  gap: 20px;

  list-style: none;
`;

export const Li = styled.li`
  padding: 10px;

  cursor: pointer;

  & > svg {
    width: 131px;
    height: 96px;
    fill: rgba(0, 0, 0, 0.24);

    transition: fill 250ms linear;
  }

  &:hover > svg {
    fill: blue;
  }
`;
