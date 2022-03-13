import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import { signIn } from 'next-auth/react';

import { Container } from './styles';

type SignUpContent = {
  isLogged: boolean;
};

export default function SignUpContent({ isLogged }: SignUpContent) {
  return (
    <Container>
      <h3>Sign up</h3>
      <span>To access this resource, you need to create an account first.</span>
      <button type="button" onClick={() => signIn('github')}>
        <AiOutlineGithub /> Sign up with Github
      </button>
    </Container>
  );
}
