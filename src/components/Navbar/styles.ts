import styled from 'styled-components';
import {
  base_color,
  base_text,
  body_background_secondary,
  body_background_tertiary,
  white,
} from 'styles/colors';

export const Header = styled.header`
  width: 100%;
  height: 6rem;

  nav {
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 1120px) {
    padding: 0 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  position: relative;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    object-fit: cover;
  }

  > svg {
    font-size: 1.75rem;
    color: ${base_color};
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
export const UserAccount = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background: ${body_background_tertiary};

  svg {
    font-size: 1rem;
    color: ${base_text};
  }
`;

export const InputBox = styled.div`
  margin-left: 2.375rem;
  position: relative;

  input {
    width: 400px;
    padding: 1rem 2rem;
    background: ${body_background_tertiary};
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-size: 0.825rem;
    font-weight: 500;

    &::placeholder {
      color: ${base_text};
    }
  }

  div {
    background: ${base_text};
    width: 20px;
    height: 20px;
    border-radius: 5px;
    position: absolute;
    top: 12px;
    right: 20px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  width: 300px;
  background: ${body_background_tertiary};
  position: absolute;
  top: 120px;
  z-index: 2;
  border-radius: 8px;
  /* box-shadow: var(--main-shadow); */
  display: none !important;
  opacity: 0;

  .dropdown {
    right: 12% !important;
  }
`;

export const Dropdown = styled.ul`
  width: 260px;
  display: block;
  padding: 15px 15px;
  border-radius: var(--main-radius);
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s all;
`;

export const DropdownItem = styled.li`
  h3 {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    margin: 0 0;
  }

  p {
    color: var(--main-text);
    font-family: var(--body-font);
    font-weight: 500;
    font-size: 14px;
    margin: 7px 0px 0px 0px;
  }
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${body_background_secondary};
  }
`;

export const AllNotifications = styled.div``;
