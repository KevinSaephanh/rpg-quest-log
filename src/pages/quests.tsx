import { NextPage } from 'next';
import { withAuth } from 'src/hoc/withAuth';

const Quests: NextPage = () => {
  return <>QUESTS HERE!</>;
};

export default withAuth(Quests);
