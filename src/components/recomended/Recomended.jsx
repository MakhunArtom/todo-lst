import { useState } from 'react';

import { Conteiner } from './../index';

import { Section, TextWrap, Text, LowerBracket, UpperBracket, List, Li } from './Recomended.styled';

export const Recomended = ({ options }) => {
  const [currentId, setCurrentId] = useState(1);

  const hendlCurrentId = id => {
    if (currentId !== id) {
      setCurrentId(id);
    }
  };

  const { text } = options.find(el => el.id === currentId);

  return (
    <Section>
      <Conteiner>
        <TextWrap>
          <UpperBracket />
          <Text>{text}</Text>
          <LowerBracket />
        </TextWrap>

        <List>
          {options.map(({ id, ComponentSvg }) => {
            return (
              <Li key={id} onMouseMove={() => hendlCurrentId(id)}>
                <ComponentSvg />
              </Li>
            );
          })}
        </List>
      </Conteiner>
    </Section>
  );
};
