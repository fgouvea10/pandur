import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

import Modal from 'components/Modal';
import CreateTopicContent from 'components/Modal/content/CreateTopic';
import SignUpContent from 'components/Modal/content/SignUp';
import { useSession } from 'next-auth/react';

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
  const [isLogged, setIsLogeed] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isCreateQuestionModalOpen, setIsCreateQuestionModalOpen] =
    useState(false);

  const { data: session } = useSession();

  const checkIfUserIsLogged = () => {
    if (session) {
      setIsLogeed(true);
      setIsCreateQuestionModalOpen(true);
    } else {
      setIsSignUpModalOpen(true);
    }
  };

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
            <button type="button" onClick={checkIfUserIsLogged}>
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
        isModalOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(!isSignUpModalOpen)}
        width={20}
      >
        <SignUpContent isLogged={isLogged} />
      </Modal>

      <Modal
        isModalOpen={isCreateQuestionModalOpen}
        onClose={() => setIsCreateQuestionModalOpen(!isCreateQuestionModalOpen)}
        width={40}
      >
        <CreateTopicContent
          onClose={() =>
            setIsCreateQuestionModalOpen(!isCreateQuestionModalOpen)
          }
        />
      </Modal>
    </>
  );
}
