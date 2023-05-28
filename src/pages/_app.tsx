import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Layout } from 'src/components/layout/Layout';
import { Seo } from 'src/components/layout/Seo';
import { ModalProvider } from 'src/context/modal/context';
import { QuestProvider } from 'src/context/quest/context';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QuestProvider>
        <ModalProvider>
          <Seo />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </QuestProvider>
    </SessionProvider>
  );
}
