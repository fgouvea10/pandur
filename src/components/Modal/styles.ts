import styled, { css } from 'styled-components';
import { body_background, white } from 'styles/colors';

type ModalProps = {
  width: number;
};

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  padding-top: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const Content = styled.div<ModalProps>`
  ${(props) =>
    props.width &&
    css`
      max-width: ${props.width}%;
    `};
  background: ${body_background};
  margin: auto;
  padding: 20px;
  border-radius: 10px;
`;

export const Close = styled.span`
  color: ${white};
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;
