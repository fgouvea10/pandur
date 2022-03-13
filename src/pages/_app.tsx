import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
