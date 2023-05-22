import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Layout } from 'src/components/layout/Layout';
import { Seo } from 'src/components/layout/Seo';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Seo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
