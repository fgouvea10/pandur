import React from 'react';
import { FaUser } from 'react-icons/fa';

import {
  Container,
  CardHeader,
  UserAccount,
  TitleContainer,
  Title,
  Category,
  AuthorText,
  Wrapper,
  Column,
  CardText,
  CardFooter,
} from './styles';

export default function TopicCard() {
  return (
    <Container>
      <CardHeader>
        <Wrapper>
          <UserAccount className="vh_center">
            <FaUser />
          </UserAccount>

          <Column>
            <TitleContainer>
              <Title>What is the meaning of life?</Title>
              <Category>Life</Category>
            </TitleContainer>
            <AuthorText>
              The asker is <cite>Felipe Gouvea</cite>
            </AuthorText>
          </Column>
        </Wrapper>

        <time>Posted 5 minutes ago</time>
      </CardHeader>

      <CardText>
        So, my view about life is that... tincidunt lorem eu, consectetur cum.
        Ornare amet tincidunt diam quis etiam in commodo integer. Massa maecenas
        dolor enim volutpat enim. Integer accumsan, dui ullamcorper non quisque.
        Ullamcorper viverra et eget fermentum ac. Feugiat fames tincidunt
        sodales porta tincidunt eu eget nunc. Vulputate rhoncus dignissim
        senectus facilisi volutpat libero, nec consectetur vel. Diam id
        pharetra, adipiscing viverra ipsum mollis elementum. Urna mi nulla
        luctus posuere auctor viverra et dignissim sit.
      </CardText>

      <CardFooter>
        <div>562 answers</div>
        <button type="button">Continue reading</button>
      </CardFooter>
    </Container>
  );
}
