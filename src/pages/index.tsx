import Navbar from 'components/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';

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

      <Navbar />
    </>
  );
};

export default Home;
