import {
  Section,
  Wraper,
  TextWrap,
  Titel,
  Text,
  ImgWraper,
  Img,
  BtnWrap,
} from './MultiPlatforms.styled';

import { Conteiner, BtnLink } from './../index';
import { appImeges } from './../../img/index';

export const MultiPlatforms = () => {
  const {
    homeImeges: { muleiPlatformImg },
  } = appImeges;

  return (
    <Section>
      <Conteiner>
        <Wraper>
          <TextWrap>
            <Titel>Sync across multiple platforms</Titel>
            <Text>
              30+ features work seamlessly across 10+ platforms. Getting things done has never been
              this easy.
            </Text>
          </TextWrap>

          <ImgWraper>
            <Img src={muleiPlatformImg} alt="wadsda" />
          </ImgWraper>

          <BtnWrap>
            <BtnLink type="primery">Download TickTick</BtnLink>
            <BtnLink type="secondary">View More</BtnLink>
          </BtnWrap>
        </Wraper>
      </Conteiner>
    </Section>
  );
};
