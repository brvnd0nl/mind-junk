import type { NextPage } from 'next';
import ResultHistory from '../components/ResultHystory';
import SearchHistory from '../components/SearchHistory';
import FormNotes from '../sections/FormNotes';

const Home: NextPage = () => {
  return (
    <>
      <section className="grid grid-flow-row grid-cols-1 gap-5 m-5 sm:grid-flow-col sm:gap-20 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SearchHistory />
          <FormNotes />
        </div>
        <div className="col-span-1 sm:col-span-12">
          <ResultHistory />
        </div>
      </section>
    </>
  );
};

export default Home;
