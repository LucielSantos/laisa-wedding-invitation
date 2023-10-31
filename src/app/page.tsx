import localFont from "next/font/local";
import Image from "next/image";
import pinSrc from "../../public/pin.svg";
import checkSrc from "../../public/check.svg";
import giftSrc from "../../public/gift.svg";

import { Background, Button } from "./components";
import { giftLink, mapLink, presenceLink } from "@/utils/link";

const theMumbaiSticker = localFont({
  variable: "--font-title",
  src: "../../public/fonts/the-mumbai-sticker-regular.otf",
  display: "swap",
});

export default function Home() {
  const buttons = [
    {
      iconSrc: pinSrc,
      iconAlt: "Pin icon",
      label: "LOCAL DA CELEBRAÇÃO",
      href: mapLink,
      ariaLabel: "LOCAL DA CELEBRAÇÃO",
    },
    {
      iconSrc: checkSrc,
      iconAlt: "Check icon",
      label: "CONFIRMAÇÃO DE PRESENÇA",
      href: presenceLink,
      ariaLabel: "CONFIRMAÇÃO DE PRESENÇA",
    },
    {
      iconSrc: giftSrc,
      iconAlt: "Gift icon",
      label: "LISTA DE PRESENTES",
      href: giftLink,
      ariaLabel: "LISTA DE PRESENTES",
    },
  ];

  return (
    <main className="bg-bg h-[100dvh] w-screen overflow-auto relative flex align-center flex-col text-center">
      <p
        className={`${theMumbaiSticker.className} text-indigo-500 opacity-[10%] text-7xl top-20 absolute left-1/2 -translate-x-1/2`}
      >
        LM
      </p>

      <div className="flex flex-col justify-center h-full mx-10">
        <h1 className={`${theMumbaiSticker.className} text-5xl mt-8`}>
          Láisa & Mateus
        </h1>

        <p className="text-lg mt-6 font-semibold italic leading-9">
          Com a benção de Deus convidam para a celebração do seu casamento
        </p>

        <p className="text-xl mt-2">03.02.2024 às 16 horas</p>

        <p className="text-xl mt-4">Sítio das Curicacas - Torres</p>

        <div className="grid mt-8 gap-2 grid-cols-3 max-w-xs self-center">
          {buttons.map((button) => (
            <a
              target="_blank"
              role="link"
              href={button.href}
              key={button.iconAlt}
              aria-label={button.ariaLabel}
              className="flex flex-col flex-1 justify-between items-center"
            >
              <Button className="mx-4">
                <Image src={button.iconSrc} alt={button.iconAlt} />
              </Button>

              <span
                key={button.iconAlt}
                role="link"
                aria-label={button.ariaLabel}
                className="text-xs text-center mt-2"
              >
                {button.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-md mt-4 italic">Clique no ícone a cima</p>
      </div>

      <Background />
    </main>
  );
}
