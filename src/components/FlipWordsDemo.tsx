import { FlipWords } from "./ui/Flip Words/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Desarrollador Front End",
    "Conocimientos en Backend",
    "React | TypeScript | TailwindnCSS",
    "Diseño UX/IU",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="mx-auto text-4xl font-normal text-white ">
        <h1>Hola soy Edgardo C.A</h1>
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
