import Navbar from 'components/Navbar';
import TopicCard from 'components/TopicCard';
import Topics from 'components/Topics';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { CardsContainer, Hero, QuestionsContainer, Wrapper } from 'styles/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Pandur</title>
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
            <Link href="/">View all questions</Link>
          </Wrapper>

          <CardsContainer>
            {Array.from({ length: 4 }, (_, index) => (
              <TopicCard key={(index + 1).toString()} />
            ))}
          </CardsContainer>
        </QuestionsContainer>
      </main>
    </>
  );
};

export default Home;
