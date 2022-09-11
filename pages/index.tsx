import type { NextPage } from "next";
import Pagination from "../components/Pagination";
import ResultHistory from "../components/ResultHystory";
import SearchHistory from "../components/SearchHistory";
import { useAppContext } from "../context/AppContext";
import FormNotes from "../sections/FormNotes";

const Home: NextPage = () => {
  const { isMobileDevice } = useAppContext();
  return (
    <>
      <section className="grid grid-flow-row grid-cols-1 gap-5 m-5 sm:grid-flow-col sm:gap-20 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:gap-4">
          {isMobileDevice() ? (
            <details
              className="bg-gray-200 dark:bg-gray-700 shadow rounded group mb-4"
            >
              <summary
                className="list-none flex flex-wrap items-center cursor-pointer
    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
    rounded group-open:rounded-b-none group-open:z-[1] relative
    "
              >
                <h3 className="flex flex-1 p-4 font-semibold text-gray-900 dark:text-gray-300">
                  Search
                </h3>
                <div className="flex w-10 items-center justify-center">
                  <div
                    className="border-8 border-transparent border-l-gray-600 ml-2
        group-open:rotate-90 transition-transform origin-left
        "
                  ></div>
                </div>
              </summary>
              <div className="p-4">
                <SearchHistory />
              </div>
            </details>
          ) : (
            <SearchHistory />
          )}
          {/* <div className="hidden w-full md:block md:w-auto">
            
          </div> */}
          <FormNotes />
        </div>
        <div className="col-span-1 sm:col-span-4 xl:col-span-11 ">
          <ResultHistory />
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Home;
