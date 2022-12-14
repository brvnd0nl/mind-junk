import { FormEvent } from "react";
import { useAppContext } from "../context/AppContext";

const SearchHistory = () => {
  const { searchNotes, setSearchNotes, arrayNotes } = useAppContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Type a title note to search:{" "}
          </label>
        </div>
        <div className="mb-3">
          <input
            className="bg-gray-200 dark:bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="artist"
            value={searchNotes}
            onChange={(e) => setSearchNotes(e.target.value)}
            disabled={arrayNotes.length < 1}
            placeholder="Note Example 123"
          ></input>
        </div>
        {/* <div className="mb-1">
                <input
                    type="submit"
                    value="Search"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
                </div> */}
      </form>
    </>
  );
};

export default SearchHistory;
