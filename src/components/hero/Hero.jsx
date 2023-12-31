import { Section, Wraper, Titel, Text } from './Hero.styled';

import { appImeges } from './../../img/index';

import { Conteiner, BtnLink } from './../index';

export const Hero = () => {
  const { homeImeges } = appImeges;

  return (
    <Section>
      <Conteiner>
        <Wraper>
          <div>
            <Titel>Stay Organized Stay Creative</Titel>
            <Text>
              Join millions of people to capture ideas, organize life, and do something creative
              everyday.
            </Text>

            <div>
              <BtnLink path="" type="primery">
                Get Started - It's Free
              </BtnLink>
              <BtnLink path="" type="secondary">
                Download
              </BtnLink>
            </div>
          </div>

          <div>
            <img width={590} height={417} src={homeImeges.heroImg} alt="device Tablet"></img>
          </div>
        </Wraper>
      </Conteiner>
    </Section>
  );
};
