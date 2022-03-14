import styled from 'styled-components';
import { base_text, body_background_secondary, white } from 'styles/colors';

export const Footer = styled.footer`
  width: 100%;
  background: ${body_background_secondary};
  margin-top: 8rem;

  h3 {
    color: ${white};
    font-size: 1.125rem;
    margin-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 1120px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Content = styled.div`
  ul li {
    color: ${base_text};
    font-weight: 500;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const LinkTitle = styled.h4`
  color: ${white};
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;
