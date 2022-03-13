import React from 'react';

import { Container, Form, ButtonsContainer } from './styles';

type CreateTopicProps = {
  onClose: () => void;
};

export default function CreateTopicContent({ onClose }: CreateTopicProps) {
  return (
    <Container>
      <h3>Make a question</h3>
      <Form>
        <input type="text" placeholder="What is your question?" />
        <textarea placeholder="Describe your question" />
        <ButtonsContainer>
          <button type="button" onClick={onClose}>
            Cancel
          </button>

          <button type="submit">Make question</button>
        </ButtonsContainer>
      </Form>
    </Container>
  );
}
