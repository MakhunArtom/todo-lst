import { Conteiner } from './../index';

import {
  Section,
  Wraper,
  ImgWraper,
  SectionImg,
  TextWrap,
  Titel,
  Text,
} from './HomeSection.styled';

export const HomeSection = ({ options: { type = 'defult', img, titel, text, alt } }) => {
  return (
    <Section type={type}>
      <Conteiner>
        <Wraper type={type}>
          <TextWrap>
            <Titel>{titel}</Titel>
            <Text>{text}</Text>
          </TextWrap>

          <ImgWraper>
            <SectionImg src={img} alt={alt} />
          </ImgWraper>
        </Wraper>
      </Conteiner>
    </Section>
  );
};
