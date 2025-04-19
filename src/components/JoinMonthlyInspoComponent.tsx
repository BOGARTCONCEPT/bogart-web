export default function JoinMonthlyInspoComponent() {
  return (
    <div className="absolute bottom-0 right-5 font-geist">
      <div className="relative h-[300px] w-[300px] sm:block hidden">
        {/* Input on top */}
        <input
          type="text"
          placeholder="Type here..."
          className="focus:outline-none focus:ring-0 absolute top-28 left-1/2 -translate-x-1/2 z-10 px-4 py-[6px] rounded-md  bg-zinc-800 text-zinc-300 w-5/6"
        />
        <div
          className="absolute top-0 left-0 h-48 w-48"
          style={{
            backgroundImage: `url('/imgs/stickers/PEGATINA 2 5X5.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute"
          style={{
            top: `calc(12rem - 8rem)`,
            left: `calc(12rem - 6rem)`,
            height: "12rem",
            width: "12rem",
            backgroundImage: `url('/imgs/stickers/PEGATINA 1 5X5.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
