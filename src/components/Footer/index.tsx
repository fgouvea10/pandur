import React from 'react';

import {
  Footer as Container,
  LinksContainer,
  Content,
  LinkTitle,
} from './styles';

const FOOTER_MOCK = [
  {
    id: 1,
    name: 'Quick Links',
    content: ['Quick links', 'Quick Links', 'Quick Links', 'Quick Links'],
  },
  {
    id: 2,
    name: 'Support',
    content: ['Quick links', 'Quick Links', 'Quick Links', 'Quick Links'],
  },
  {
    id: 3,
    name: 'Company',
    content: ['Quick links', 'Quick Links', 'Quick Links', 'Quick Links'],
  },
  {
    id: 4,
    name: 'Topics',
    content: ['Quick links', 'Quick Links', 'Quick Links', 'Quick Links'],
  },
];

export default function Footer() {
  return (
    <Container>
      <LinksContainer>
        {FOOTER_MOCK.map((element) => (
          <Content key={element.id}>
            <LinkTitle>{element.name}</LinkTitle>
            <ul>
              {element.content.map((item, index) => (
                <li key={(index + 1).toString()}>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </Content>
        ))}
      </LinksContainer>

      <h3>Made with love by Felipe Gouvea</h3>
    </Container>
  );
}
