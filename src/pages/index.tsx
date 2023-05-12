import { Inter } from 'next/font/google';
import { GetStaticProps } from 'next';
import { QuestProps, getAllQuests } from 'src/lib/api/quest';
import clientPromise from 'src/lib/mongodb';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ quests }: { quests: QuestProps }) {
  return <>HELLO!</>;
}

export const getStaticProps: GetStaticProps = async () => {
  // You should remove this try-catch block once your MongoDB Cluster is fully provisioned
  try {
    await clientPromise;
  } catch (e: any) {
    if (e.code === 'ENOTFOUND') {
      // cluster is still provisioning
      return {
        props: {
          clusterStillProvisioning: true,
        },
      };
    } else {
      throw new Error(`Connection limit reached. Please try again later.`);
    }
  }

  const quests = await getAllQuests();

  return {
    props: {
      meta: defaultMetaProps,
      quests,
    },
    revalidate: 10,
  };
};
