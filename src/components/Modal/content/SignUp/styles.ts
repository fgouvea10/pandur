import styled from 'styled-components';
import { base_color, base_text, white } from 'styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2rem;
    color: ${white};
    font-weight: 800;
  }

  span {
    color: ${base_text};
    font-weight: 600;
    text-align: center;
    max-width: 70%;
    margin-top: 1.5rem;
  }

  button {
    margin-top: 2.5rem;
    background: ${base_color};
    padding: 1rem 2rem;
    color: ${white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: filter 0.2s ease;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
