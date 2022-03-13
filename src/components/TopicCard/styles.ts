import styled from 'styled-components';
import {
  body_background_secondary,
  body_background_tertiary,
  base_text,
  white,
  base_error,
  base_error_text,
  base_color,
} from 'styles/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${body_background_secondary};
  border-radius: 0.875rem;
  padding: 2rem 3rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    color: ${base_text};
    font-size: 14px;
    pointer-events: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const UserAccount = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${body_background_tertiary};

  svg {
    font-size: 1rem;
    color: ${base_text};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.h5`
  font-size: 1.125rem;
  color: ${white};
`;

export const Category = styled.div`
  padding: 5px 20px;
  font-size: 12px;
  background: ${base_error};
  color: ${base_error_text};
  margin-left: 10px;
  border-radius: 5px;
`;

export const AuthorText = styled.div`
  color: ${base_text};

  cite {
    font-style: normal;
    color: ${base_color};
    font-weight: 500;
  }
`;

export const CardText = styled.div`
  color: ${base_text};
  margin-top: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  div {
    color: ${white};
    font-weight: 500;
  }

  button {
    margin-left: 2.375rem;
    background: ${base_color};
    padding: 1rem 2rem;
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
