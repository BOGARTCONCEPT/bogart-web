
export default function History() {

  return (
    <>
     <div
      className="relative min-h-screen font-geist sm:hidden justify-center items-center flex"
      style={{
        backgroundImage: `url('/imgs/vertical_history.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="p-5 w-full h-full flex text-5xl text-white ">
      <div className="flex flex-col">
        <span className="font-gotham-bold">
        “WELCOME TO BOGART’S UNIVERSE, WHERE SOULS DANCE.”
        </span>
      </div>
      </div>
    </div>
    
    <div
      className="hidden sm:flex relative min-h-screen font-geist justify-center items-center px-10"
      style={{
        backgroundImage: `url('/imgs/horizontal_history.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-[90px] text-white text-center">
        <span className="font-gotham-bold capitalize">
        “WELCOME TO BOGART’S UNIVERSE, WHERE SOULS DANCE.”
        </span>
      </div>
    </div>
    </>
  );
}