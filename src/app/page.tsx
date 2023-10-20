import { BackgroundImage } from "./components/BackgroundImage";

export default function Home() {
  return (
    <main className="bg-bg h-screen w-screen overflow-auto relative">
      {/* <Image src="leaf-top.svg" width={500} height={500} alt="Folha do topo" />
      
      <Image
        src="leaf-bottom.svg"
        width={500}
        height={500}
        alt="Folha da base"
      /> */}

      <BackgroundImage />
    </main>
  );
}
