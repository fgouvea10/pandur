import styled, { keyframes } from 'styled-components';
import { base_color, base_text, body_background_tertiary } from 'styles/colors';

const slide_linear = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  width: 102%;
  padding: 0 0;
  position: relative;
  margin-left: -5px;
`;

export const Slider = styled.div`
  width: 100%;
  padding: 30px;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;

  button {
    background: ${body_background_tertiary};
    padding: 22px 40px;
    color: ${base_text};
    font-family: 500;
    font-weight: 700;
    font-size: 16px;
    border: 0;
    border-radius: 8px;
    margin-left: 1.5rem;

    &.active {
      background: ${base_color};
      color: #fff;
      margin-left: 1rem;
    }
  }

  .mode {
    height: auto;
    overflow: hidden;
    white-space: nowrap;
  }

  .mode {
    display: inline-block;
    margin-right: 15px;
    -webkit-animation: ${slide_linear} 30s linear infinite;
    animation: ${slide_linear} 30s linear infinite;

    &:hover > div {
      animation-play-state: paused;
    }
  }
`;
