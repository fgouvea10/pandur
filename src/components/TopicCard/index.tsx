import React from 'react';
import { FaUser } from 'react-icons/fa';

import Link from 'next/link';

import { PostProps } from '@types';
import { formatDate } from 'utils/formatDate';

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

type CardProps = {
  post: PostProps;
};

export default function TopicCard({ post }: CardProps) {
  return (
    <Link href={`/post/${post?.slug}`}>
      <Container>
        <CardHeader>
          <Wrapper>
            {(post?.author?.photo.url === '' && (
              <UserAccount className="vh_center">
                <FaUser />
              </UserAccount>
            )) || (
              <img src={post?.author?.photo.url} alt={post?.author?.name} />
            )}

            <Column>
              <TitleContainer>
                <Title>{post?.title}</Title>
                <Category>Life</Category>
              </TitleContainer>
              <AuthorText>
                The asker is <cite>{post?.author?.name}</cite>
              </AuthorText>
            </Column>
          </Wrapper>

          <time>Posted at {formatDate(post?.createdAt)}</time>
        </CardHeader>

        <CardText>{post?.excerpt}</CardText>

        <CardFooter>
          <div>562 answers</div>
          <button type="button">Continue reading</button>
        </CardFooter>
      </Container>
    </Link>
  );
}
