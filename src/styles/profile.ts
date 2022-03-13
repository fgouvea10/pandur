import styled from 'styled-components';

import {
  base_color,
  base_text,
  body_background_secondary,
  body_background_tertiary,
  white,
} from './colors';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 60px;
  color: ${white};
  margin-top: 6rem;
  font-weight: 700;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 6rem;

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const ProfilePicture = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 40px;
  background: ${body_background_tertiary};

  svg {
    font-size: 3rem;
    color: ${base_text};
  }
`;

export const ItemsContainer = styled.ul`
  margin-top: 3rem;
`;
export const Item = styled.li`
  color: ${base_text};
  font-weight: 500;

  & + & {
    margin-top: 10px;
  }

  &.active {
    font-size: 1.25rem;
    color: ${base_color};
    font-weight: 700;
  }
`;

export const CardsContainer = styled.div``;

export const Card = styled.div`
  padding: 2rem 2rem;
  border: 2px solid ${base_text};
  border-radius: 10px;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${white};
  }

  span {
    margin-top: 5px;
    color: ${base_text};
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  margin-top: 2rem;
  display: flex;

  div {
    padding: 1rem 1rem;
    width: clamp(200px, 50%, 200px);
    background: ${body_background_secondary};
    border-radius: 5px 0 0 5px;
    color: ${white};
    font-weight: 500;
  }

  input {
    padding: 1rem 1rem;
    width: clamp(100px, 50%, 400px);
    background: ${body_background_tertiary};
    border-radius: 0 5px 5px 0;
    color: ${white};
    font-weight: 500;
    font-size: 14px;
    border: none;

    &::placeholder {
      color: ${base_text};
    }
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  margin-top: 2rem;

  button {
    width: 100%;
    background: ${base_color};
    padding: 0.625rem 1.5rem;
    color: ${white};
    font-weight: 700;
    font-size: 0.875rem;
    border-radius: 0.625rem;
    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.9);
    }
  }
`;
