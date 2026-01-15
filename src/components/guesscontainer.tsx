"use client";

import GuessHeader from "@/components/guessheader";
import GuessRow from "@/components/guessrow";
import { useGuessList } from "@/lib/state";

export default function GuessContainer() {
  const guessList = useGuessList((state) => state.guessList);

  if (guessList.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <GuessHeader />
        {guessList.map((abno) => (
          <GuessRow abno={abno} key={abno.id} />
        ))}
      </div>
    );
  }
  return null;
}
