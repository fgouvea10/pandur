import React, { ReactNode, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';

import { Overlay, Content, Close } from './styles';

type ModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width: number;
};

export default function Modal({
  isModalOpen,
  onClose,
  children,
  width,
}: ModalProps) {
  return (
    <>
      {isModalOpen && (
        <Overlay>
          <Content width={width}>
            <Close onClick={onClose}>
              <FiX />
            </Close>

            {children}
          </Content>
        </Overlay>
      )}
    </>
  );
}
