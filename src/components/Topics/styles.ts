import styled, { keyframes } from 'styled-components';
import { base_text, body_background_tertiary } from 'styles/colors';

const marquee = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  overflow-x: hidden;
  margin-top: 4rem;
`;

export const Track = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: ${marquee} 32s linear infinite;

  button {
    background: ${body_background_tertiary};
    padding: 1.25rem 3rem;
    color: ${base_text};
    font-weight: 700;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
    margin-left: 1.5rem;
  }
`;
