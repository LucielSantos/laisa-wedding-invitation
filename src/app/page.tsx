import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bg">
      <Image src="leaf-top.svg" width={500} height={500} alt="Folha do topo" />

      <Image
        src="leaf-bottom.svg"
        width={500}
        height={500}
        alt="Folha da base"
      />

      <Image
        src="background-image.svg"
        width={500}
        height={500}
        alt="Imagem de fundo"
      />
    </main>
  );
}
