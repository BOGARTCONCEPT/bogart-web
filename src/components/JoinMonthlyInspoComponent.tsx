export default function JoinMonthlyInspoComponent() {
  return (
    <div className=" flex w-full font-geist justify-center">
      <div className="flex flex-col w-[200px] sm:w-[250px]">

        {/* Input */}
          <label htmlFor="email" className=" font-gotham-bold">Join the monthly inspo</label>
          <div className="flex justify-center w-full">
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="bogart@concept.com"
              className="
                
                focus:outline-none focus:ring-0
                z-10 px-4 py-[6px] 
                rounded-md w-full
                bg-zinc-800 text-zinc-300 placeholder-zinc-500
              "
            />
          </div>

        {/* Image Container */}
        <div className="relative mt-4 h-[200px] w-[200px] mb-4">
          {/* Bottom Image */}
          <div
            className="absolute top-0 left-0 h-36 w-36"
            style={{
              backgroundImage: `url('/imgs/stickers/PEGATINA 2 5X5.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute h-36 w-36"
            style={{
              top: `calc(12rem - 8rem)`,
              left: `calc(12rem - 6rem)`,
              backgroundImage: `url('/imgs/stickers/PEGATINA 1 5X5.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
