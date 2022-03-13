import React from 'react';

import {
  Footer as Container,
  LinksContainer,
  Content,
  LinkTitle,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <LinksContainer>
        <Content>
          <LinkTitle>Quick links</LinkTitle>
          <ul>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
          </ul>
        </Content>

        <Content>
          <LinkTitle>Support</LinkTitle>
          <ul>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
          </ul>
        </Content>

        <Content>
          <LinkTitle>Company</LinkTitle>
          <ul>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
          </ul>
        </Content>

        <Content>
          <LinkTitle>Topics</LinkTitle>
          <ul>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
            <li>Quick links</li>
          </ul>
        </Content>
      </LinksContainer>

      <h3>Made with love by Felipe Gouvea</h3>
    </Container>
  );
}
