import localFont from "next/font/local";
import { Background } from "./components";

const theMumbaiSticker = localFont({
  variable: "--font-title",
  src: "../../public/fonts/TheMumbaiStickerDemo-Regular.woff",
  display: "swap",
});

export default function Home() {
  return (
    <main className="bg-bg h-screen w-screen overflow-auto relative flex align-center flex-col">
      <p
        className={`${theMumbaiSticker.className} text-indigo-500 opacity-[10%] text-7xl mt-14 text-center`}
      >
        LM
      </p>
      <Background />
    </main>
  );
}
