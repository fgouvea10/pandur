import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

import { Header, Wrapper, UserAccount, InputBox } from './styles';

export default function Navbar() {
  return (
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
          <button type="button">Ask a question</button>
        </Wrapper>
      </nav>
    </Header>
  );
}
