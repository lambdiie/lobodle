import GuessItem from "./guessitem";
import Image from "next/image";

export default function GuessRow({ abno }: { abno: Abnormality }) {
  return (
    <div className="flex gap-4">
      <GuessItem>
        <Image
          src={abno.img}
          alt={abno.name}
          fill
          className="object-cover"
        />
        {abno.name}
      </GuessItem>
      <GuessItem>{abno.riskLevel}</GuessItem>
      <GuessItem>{abno.attackType}</GuessItem>
      <GuessItem>{abno.eBoxes}</GuessItem>
      <GuessItem>{abno.qliphothCounter}</GuessItem>
    </div>
  );
}
