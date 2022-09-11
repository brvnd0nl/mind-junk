import { useAppContext } from "../context/AppContext";

const Pagination = () => {
  const { currentPage, notesPerPage, arrayNotes, changePageNotes } =
    useAppContext();

  const nextPageHandler = () => {
    const newPage = currentPage + 1;
    changePageNotes(newPage);
  };
  const previousPageHandler = () => {
    const newPage = currentPage - 1;
    changePageNotes(newPage);
  };

  const totalPages = Math.ceil(arrayNotes.length / notesPerPage);

  if (totalPages < 2) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalPages}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {arrayNotes.length}
        </span>{" "}
        Notes
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={() => previousPageHandler()}
          disabled={currentPage == 1 ? true : false}
          className="py-2 px-4 text-sm font-medium disabled:bg-gray-400 dark:disabled:bg-gray-900 disabled:line-through text-black border-r border-gray-700 bg-gray-200 rounded-l hover:bg-gray-900 hover:text-gray-200 dark:bg-gray-700 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          onClick={() => nextPageHandler()}
          disabled={currentPage >= totalPages ? true : false}
          className="py-2 px-4 text-sm font-medium disabled:bg-gray-400 dark:disabled:bg-gray-900 disabled:line-through text-black border-l border-gray-700 bg-gray-200 rounded-r hover:bg-gray-900 hover:text-gray-200 dark:bg-gray-700 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
