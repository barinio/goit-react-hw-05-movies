import { Suspense } from 'react';

import TrendingList from 'components/TrendingList/TrendingList';

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingList />
      </Suspense>
    </>
  );
};
export default Home;
