import React from 'react';

import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { PostNodeProps } from '@types';
import TopicCard from 'components/TopicCard';
import Topics from 'components/Topics';
import { getPosts } from 'services';
import { CardsContainer, Hero, QuestionsContainer, Wrapper } from 'styles/home';

type IPosts = {
  posts: PostNodeProps[];
};

export default function Home({ posts }: IPosts) {
  return (
    <>
      <Head>
        <title>Have a question? We have the answer! - Pandur</title>
        <meta
          name="description"
          content="Discuss random topics with people all over the world!"
        />
      </Head>

      <main>
        <Hero>
          <h1>
            Have a question? <br />
            We have the <span>answer</span>!
          </h1>
          <Topics />
        </Hero>

        <QuestionsContainer>
          <Wrapper>
            <h3>Trending questions about - Placeholder topic</h3>
          </Wrapper>

          <CardsContainer>
            {(posts.length <= 0 && <span>Nothing posted yet.</span>) ||
              posts.map((post: PostNodeProps, index: number) => (
                <TopicCard key={(index + 1).toString()} post={post.node} />
              ))}
          </CardsContainer>
        </QuestionsContainer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};
