import { FormEvent, useEffect, useState } from "react";
import NotificationComponent from "../components/NotificationComponent";
import { useAppContext } from "../context/AppContext";
import { generarId } from "../helpers";
import { Note } from "../interfaces";

const FormNotes = () => {
  const { createNote, editNote, note, isEdited, setIsEdited } = useAppContext();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (note && isEdited) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [isEdited]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Por favor rellene el formulario antes de continuar");
      return;
    }

    if (isEdited) {
      const noteEdited: Note = {
        id: note.id,
        title,
        description,
        dateCreated: Date.now(),
      };

      editNote(noteEdited);
    } else {
      const newNote: Note = {
        id: generarId(),
        title,
        description,
        dateCreated: Date.now(),
      };

      createNote(newNote);
    }

    setTitle("");
    setDescription("");
  };

  const handlerCancelEdit = (e: FormEvent) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setIsEdited(false);
  };

  return (
    <>
      <aside className="flex flex-col justify-between min-h-full">
        <form className="bg-gray-200 dark:bg-gray-700 p-5 rounded-lg max-w-3xl">
          <div className="relative z-0 mb-6 w-full group">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_title"
                id="floating_title"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label
                htmlFor="floating_title"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 dark:peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              id="floating_description"
              name="floating_description"
              rows={6}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <label
              htmlFor="floating_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 dark:peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          {/* <div className="relative z-0 mb-6 w-full group">
            <div
              id="floating_description"
              contentEditable="true"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={description}
              onChange={(e: HTMLInputElement) => setDescription(e.value)}
              required
            ></div>
            <label
              htmlFor="floating_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 dark:peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div> */}

          <div className="flex justify-between">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isEdited ? "Edit" : "Save"}
            </button>

            {isEdited && (
              <button
                type="button"
                onClick={(e) => handlerCancelEdit(e)}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>
        <div className="">
          <NotificationComponent />
        </div>
      </aside>
    </>
  );
};

export default FormNotes;
