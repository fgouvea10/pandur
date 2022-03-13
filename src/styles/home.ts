import styled from 'styled-components';

import { base_color, white } from './colors';

export const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 70px;
    color: ${white};
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;

    span {
      color: ${base_color};
    }
  }
`;

export const QuestionsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  padding-top: 7rem;
  margin: 0 auto;

  h3 {
    color: ${white};
    font-weight: 700;
    font-size: 1.25rem;
  }

  a {
    color: ${base_color};
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;
