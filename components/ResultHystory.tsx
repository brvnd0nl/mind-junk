import { useAppContext } from "../context/AppContext";
import NoteComponent from "./NoteComponent";

const ResultHistory = () => {
  const { arrayNotes } = useAppContext();

  return (
    <>
      <div className="flex flex-col items-center sm:items-start gap-4 min-h-full rounded-xl p-5">
        <h1 className="sm:text-5xl text-3xl font-bold">Results</h1>
        {arrayNotes.length > 0
          ? arrayNotes.map(item => (
              <NoteComponent key={item.id} data={item} />
            ))
          : null}
      </div>
    </>
  );
};

export default ResultHistory;
