import EarthFrame from "./EarthFrame";

const Frontend = () => {
  return (
    <div className="items-center justify-center grid md:gap-2 gap-4 md:grid-cols-2 sm:grid-cols-1 mt-14 md:mb-14">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center h-72 max-w-72">
          <EarthFrame />
        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-14 md:mt-0">
        <h1 className="text-xl font-semibold mt-4 md:mt-0 flex items-center justify-center md:block">
          Frontend Development
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

export default Frontend;
