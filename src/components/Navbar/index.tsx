import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

import Modal from 'components/Modal';
import SignUpContent from 'components/Modal/content/SignUp';

import {
  Header,
  Wrapper,
  UserAccount,
  InputBox,
  DropdownContainer,
  Dropdown,
  DropdownItem,
  AllNotifications,
} from './styles';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header>
        <nav>
          <Wrapper>
            <UserAccount className="vh_center">
              <FaUser />
            </UserAccount>

            <InputBox>
              <input type="text" placeholder="Look for a topic or question" />
              <div className="vh_center">/</div>
            </InputBox>
          </Wrapper>

          <Wrapper>
            <MdNotifications />
            <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
              Ask a question
            </button>
          </Wrapper>

          {isDropdownOpen && (
            <DropdownContainer className="dropdown">
              <Dropdown>
                <DropdownItem>
                  <h4>Your account</h4>
                  <p>Check your account definitions</p>
                </DropdownItem>
                <AllNotifications>View all notifications</AllNotifications>
              </Dropdown>
            </DropdownContainer>
          )}
        </nav>
      </Header>

      <Modal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        width={20}
      >
        <SignUpContent />
      </Modal>
    </>
  );
}
