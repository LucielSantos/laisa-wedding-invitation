import Image from "next/image";
import flowerTopLeft from "../../../../public/flowerTopLeft.png";
import flowerTopLeftCp from "../../../../public/flowerTopLeft.png";
import flowerTopRight from "../../../../public/flowerTopRight.png";
import flowerBottomRight from "../../../../public/flowerBottomRight.png";
import flowerBottomLeft from "../../../../public/flowerBottomLeft.png";

export const Background = () => {
  return (
    <>
      <Image
        src={flowerTopLeft}
        alt="Flor superior esquerda"
        className="opacity-80 brightness-125 absolute top-0 left-0 h-[12rem] w-auto"
      />

      <Image
        src={flowerTopRight}
        alt="Flor superior direita"
        className="opacity-80 brightness-125 absolute top-0 right-0 h-[17rem] w-auto"
      />

      <Image
        src={flowerBottomRight}
        alt="Flor inferior direita"
        className="opacity-80 brightness-125 absolute bottom-0 right-0 h-[9rem] w-auto"
      />

      <Image
        src={flowerBottomLeft}
        alt="Flor inferior esquerda"
        className="opacity-80 brightness-125 absolute bottom-0 left-0 h-[10rem] w-auto"
      />
    </>
  );
};
