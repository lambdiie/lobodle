"use client"
import { useEffect, useState } from "react";
import GuessRow from "@/components/guessrow";

export default function Home() {
  // placeholder for testing
  const [abnoList, setAbnoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/data.json");
      const list = await data.json();
      setAbnoList(list);
    }
    
    fetchData();
  })

  return (
    <GuessRow abno={abnoList[0]} />
  );
}