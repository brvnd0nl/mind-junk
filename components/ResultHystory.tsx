import { formatearFecha } from "../helpers";

const ResultHistory = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:items-start gap-4">
        <h1 className="sm:text-5xl text-3xl font-bold">Results</h1>
        <div className="flex flex-row justify-between gap-5 my-5 mx-5">
          <div className="basis-2/3">
            <h4 className="text-xl font-semibold">Hola Mundo</h4>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus non adipisci a officiis fuga voluptatum accusamus,
              temporibus vel in, soluta quasi repudiandae reiciendis quisquam
              quod. Animi minima incidunt eveniet quos?
            </p>
          </div>
          <div className="self-center">
            <p>{`Fecha: ${formatearFecha(Date.now())}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultHistory;
