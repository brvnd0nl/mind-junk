import { useAppContext } from "../context/AppContext";
import NoteComponent from "./NoteComponent";

const ResultHistory = () => {
  const { arrayNotes, notesPerPage, currentPage } = useAppContext();

  //Get current notes
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFisrtNote = indexOfLastNote - notesPerPage;
  const currentNotes = arrayNotes.length > notesPerPage ? arrayNotes.slice(indexOfFisrtNote, indexOfLastNote) : arrayNotes;  
  console.log("🚀 ~ file: ResultHystory.tsx ~ line 11 ~ ResultHistory ~ currentNotes", currentNotes)

  

  if(currentNotes.length < 1){
    return(
      <>
        <div className="flex flex-col items-center sm:items-start gap-4 rounded-xl p-5">
          <h1 className="text-4xl font-semibold">Lo sentimos, no encontramos lo que estaba buscando 😥😓</h1>
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
          : null}
      </div>
    </>
  );
};

export default ResultHistory;
