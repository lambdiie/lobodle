import fs from "fs/promises";
import path from "path";
import GuessRow from "@/components/guessrow";

export default async function Home() {
  // placeholder for testing
  const filePath = path.join(process.cwd(), "public/data.json");
  const abnoList = JSON.parse(await fs.readFile(filePath, "utf8"));

  return (
    <GuessRow abno={abnoList[0]} />
  );
}