import BetterWordle from "./BetterWordle";

const Backend = () => {
  return (
    <div className="mx-auto max-w-4xl items-center mt-3 justify-center grid md:gap-2 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <div className="flex items-center md:mr-24 justify-center h-72">
        <BetterWordle />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl font-semibold mt-4 md:mt-0 flex items-center justify-center md:block">
          Backend Development
        </h1>
        <p className="text-muted-foreground">
          With my background in backend development&comma; I bring over a year of
          experience in building robust and scalable server&hyphen;side applications&period; I
          am committed to implementing complex functionalities and seamless data
          integration&comma; ensuring high performance and reliability in every
          project&period;
        </p>
      </div>
    </div>
  );
};

export default Backend;
