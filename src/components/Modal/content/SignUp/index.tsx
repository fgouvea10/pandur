import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import { Container } from './styles';

export default function SignUpContent() {
  return (
    <Container>
      <h3>Sign up</h3>
      <span>To access this resource, you need to create an account first.</span>
      <button type="button">
        <AiOutlineGithub /> Sign up with Github
      </button>
    </Container>
  );
}
