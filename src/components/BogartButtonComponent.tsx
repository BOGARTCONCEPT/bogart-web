type Props = {
  onClick?: () => Promise<void>;
  isDisabled?: boolean;
  iconSize?: string;  
};

const ICONS_SIZE = {
  small: "w-8 h-8",
  medium: "w-10 h-10",
  large: "w-12 h-12",
}

export default function BogartButtonComponent({ onClick, isDisabled, iconSize }: Props) {
  return (    
    <>
      <button
        disabled={isDisabled}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        className={`
        ${isDisabled ? "cursor-default" : "cursor-pointer"}
        ${ICONS_SIZE[iconSize as keyof typeof ICONS_SIZE] || ICONS_SIZE.small}
           py-4 px-6 bg-no-repeat bg-center bg-contain   border-none`}
        style={{ backgroundImage: "url('/imgs/trimmed-icon.png')" }} 
      ></button> 
    </>
  );
}
