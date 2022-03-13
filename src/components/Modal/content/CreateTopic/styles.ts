import styled from 'styled-components';
import {
  base_color,
  base_text,
  body_background_tertiary,
  white,
} from 'styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2rem;

  h3 {
    font-size: 2rem;
    color: ${white};
    font-weight: 800;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  input,
  textarea {
    padding: 1.25rem 2.5rem;
    background: ${body_background_tertiary};
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-size: 0.825rem;
    font-weight: 500;

    &::placeholder {
      color: ${base_text};
      font-weight: 600;
    }
  }

  textarea {
    margin-top: 1rem;
    height: 9rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 2rem;

  button {
    padding: 1rem 2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 600;

    &:first-child {
      border: 1px solid ${base_color};
      background: transparent;
      color: ${base_color};
      transition: 0.3s all;

      &:hover {
        background: ${base_color};
        color: ${white};
      }
    }

    &:last-child {
      background: ${base_color};
      color: ${white};
      transition: 0.2s all;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
