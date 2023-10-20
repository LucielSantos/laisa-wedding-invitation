import Image from "next/image";
import bgImage from "../../../../public/background-image.svg";

export const BackgroundImage = () => {
  return (
    <Image
      src={bgImage}
      alt="Imagem de fundo"
      className="h-[43rem] max-w-none absolute top-[-16rem] right-[-41rem]"
    />
  );
};
