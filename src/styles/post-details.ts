import styled from 'styled-components';

import {
  base_text,
  body_background_secondary,
  body_background_tertiary,
  white,
} from './colors';

export const Section = styled.section`
  width: 100%;
  margin-top: 6rem;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const PostCard = styled.article`
  width: 100%;
  background: ${body_background_tertiary};
  border-radius: 10px;
  padding: 2.5rem 2.5rem;

  h1 {
    font-size: 1.25rem;
    color: ${white};
  }
`;

export const PostCardHeader = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  img {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    object-fit: contain;
  }

  cite {
    color: ${white};
    font-weight: 600;
    margin-left: 1.5rem;
    font-style: normal;
  }
`;

export const UserAccount = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background: ${body_background_secondary};

  svg {
    font-size: 1rem;
    color: ${base_text};
  }
`;

export const PostCardText = styled.p`
  margin-top: 2.5rem;
  color: ${base_text};
  font-weight: 500;
`;
