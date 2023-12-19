import BetterWordle from "./BetterWordle";

const Backend = () => {
  return (
    <div className="items-center mt-3 justify-center grid md:gap-2 gap-4 md:grid-cols-2 sm:grid-cols-1 xl:px-16">
      <div className="flex items-center justify-center h-72 max-w-72">
        <BetterWordle />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl font-semibold mt-4 md:mt-0 flex items-center justify-center md:block">
          Backend Development
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quaerat fugit quod minima distinctio ratione possimus impedit. Quam,
          fugiat. Atque.
        </p>
      </div>
    </div>
  );
};

export default Backend;
