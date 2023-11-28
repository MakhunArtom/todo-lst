import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 72px;
  padding-bottom: 72px;

  background-color: ${({ type }) => (type === 'defult' ? '#ffffff' : '#fafafa')};
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === 'defult' ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
`;

export const ImgWraper = styled.div`
  width: 580px;
  height: 580px;
`;

export const SectionImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextWrap = styled.div``;

export const Titel = styled.h2`
  margin-top: 0;
  margin-bottom: 36px;

  font-weight: 600;
  font-size: 36px;
  line-height: 1.5;
`;

export const Text = styled.p`
  margin: 0;

  max-width: 544px;

  font-size: 18px;
  line-height: 1.77;
`;
