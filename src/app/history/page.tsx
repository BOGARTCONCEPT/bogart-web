
export default function History() {

  return (
    <>
     <div
      className="relative min-h-screen font-geist sm:hidden justify-center"
      style={{
        backgroundImage: `url('/imgs/vertical_history.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="p-5 w-full sm:text-3xl text-white font-semibold  text-center">
      <div className="mt-20 h-48 flex flex-col gap-y-8">
        <span className="font-gotham-bold">
        “Welcome to Bogart’s universe, where souls dance.”
        </span>
      </div>
      </div>
    </div>
    
    <div
      className="hidden sm:flex relative min-h-screen font-geist  justify-center"
      style={{
        backgroundImage: `url('/imgs/horizontal_history.jpeg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="p-5 w-3/5 sm:text-3xl text-white font-semibold mt-48 sm:mt-16 text-center">
        <span className="font-gotham-bold">
        “Welcome to Bogart’s universe, where souls dance.”
        </span>
      </div>
    </div>
    </>
  );
}