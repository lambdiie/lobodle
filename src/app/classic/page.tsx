import fs from "fs/promises";
import path from "path";
import SearchBar from "@/components/searchbar";
import GuessContainer from "@/components/guesscontainer";

export default async function Home() {
  // placeholder for testing
  const filePath = path.join(process.cwd(), "public/data.json");
  const abnoList = JSON.parse(await fs.readFile(filePath, "utf8"));

  return (
    <div className="flex flex-col items-center gap-16">
      <SearchBar abnoList={abnoList} />
      <GuessContainer />
    </div>
  );
}
