"use client";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { Search } from "lucide-react";
import { useGuessList } from "@/lib/state";

export default function SearchBar({ abnoList }: { abnoList: Abnormality[] }) {
  const [selectedAbno, setSelectedAbno] = useState<Abnormality | null>(null);
  const [query, setQuery] = useState("");

  const guessList = useGuessList((state) => state.guessList);
  const addGuess = useGuessList((state) => state.addGuess);

  const filteredAbnos =
    query === ""
      ? abnoList
      : abnoList.filter((abno) => {
          return (
            abno.name.toLowerCase().includes(query.toLowerCase()) &&
            !guessList.includes(abno)
          );
        });

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedAbno) {
      addGuess(selectedAbno);
      setSelectedAbno(null);
      setQuery("");
    }
  }

  return (
    <form autoComplete="off" onSubmit={handleOnSubmit}>
      <Combobox
        value={selectedAbno}
        onChange={setSelectedAbno}
        onClose={() => setQuery("")}
      >
        <div className="flex gap-4 border-2 border-border pr-2 bg-background">
          <ComboboxInput
            aria-label="Abnormality"
            displayValue={(abno: Abnormality) => abno?.name}
            onChange={(event) => setQuery(event.target.value)}
            className="w-72 text-xl p-2 outline-0"
          />
          <button type="submit" className="hover:cursor-pointer">
            <Search />
          </button>
        </div>
        <ComboboxOptions
          anchor="bottom"
          className="border-2 border-border empty:invisible m-2"
        >
          {filteredAbnos.map((abno) => (
            <ComboboxOption
              key={abno.id}
              value={abno}
              className="bg-background font-norwester data-focus:bg-foreground data-focus:text-background p-4"
            >
              {abno.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </form>
  );
}
