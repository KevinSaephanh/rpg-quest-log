import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Layout } from 'src/components/layout/Layout';
import { Seo } from 'src/components/layout/Seo';
import { ModalProvider } from 'src/context/modal/context';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <Seo />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </SessionProvider>
  );
}
