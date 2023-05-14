import React from 'react';
import Head from 'next/head';

export const Seo: React.FC = () => {
  return (
    <Head>
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'></link>
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'></link>
      <title>RPG Quest Log - Kevin Saephanh</title>
      <meta
        name='description'
        content='RPG Quest Log is a stylized TODO list with an RPG aesthetic'
      />
    </Head>
  );
};
