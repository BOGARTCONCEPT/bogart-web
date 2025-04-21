type Props = {
  onClick: () => Promise<void>;
};

export default function BogartButtonComponent({ onClick }: Props) {
  return (    
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className="w-8 h-8 py-4 px-6 bg-no-repeat bg-center bg-contain   border-none"
        style={{ backgroundImage: "url('/imgs/trimmed-icon.png')" }} 
      ></button> 
    </>
  );
}
