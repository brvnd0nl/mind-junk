import { useAppContext } from "../context/AppContext";
import NoteComponent from "./NoteComponent";

const ResultHistory = () => {
  const { arrayNotes, notesPerPage, currentPage, searchNotes } = useAppContext();

  //Get current notes
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFisrtNote = indexOfLastNote - notesPerPage;
  const currentNotes = arrayNotes.length > notesPerPage ? arrayNotes.slice(indexOfFisrtNote, indexOfLastNote) : arrayNotes;  

  

  if(currentNotes.length < 1 && searchNotes != ""){
    return(
      <>
        <div className="flex flex-col items-center sm:items-start gap-4 rounded-xl p-5">
          <h1 className="text-4xl font-semibold">We feel it, we did not find what I was looking for 😥😓</h1>          
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center sm:items-start gap-4 rounded-xl p-5">
        <h1 className="sm:text-5xl text-3xl font-bold">Results</h1>
        {arrayNotes.length > 0
          ? currentNotes.map(item => (
            <NoteComponent key={item.id} data={item} />
            ))
            : (
              <h1 className="text-2xl font-mono">Empty notes</h1>                        
          )}
      </div>
    </>
  );
};

export default ResultHistory;
