import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

type Abnormality = {
  id: string;
  img?: string;
  name: string;
  attackType?: string;
  riskLevel: string;
  eBoxes?: number;
  qliphothCounter?: number;
};

// Gets the abnormality data from the wiki
async function getData() {
  const response = await fetch(
    "https://lobotomycorporation.wiki.gg/wiki/List_of_Abnormalities"
  );
  const html = await response.text();

  const $ = cheerio.load(html);

  // Get the abnormality table
  const tableBody = $("table.wikitable > tbody").first();
  const tableRows = $(tableBody).find("tr");

  const abnormalityData: Abnormality[] = [];

  // Loop through each row and get the required information
  // Skip first and last rows because they are empty
  for (let i = 1; i < tableRows.length - 1; ++i) {
    const row = tableRows.eq(i);
    const data = $(row).find("td");

    const id = $(data.first()).text().replace(/\s/g, "");
    const img = $(data.eq(1)).find("img").attr("src");
    const name = $(data.eq(2)).text().replace(/\n/g, "");
    const attackType = $(data.eq(4)).find("span").first().text().replace(/\s/g, "");
    const riskLevel = $(data.eq(5)).text().replace(/\s/g, "");
    const eBoxes = $(data.eq(6)).text();
    const qliphothCounter = $(data.eq(7)).text();

    abnormalityData.push({
      id: id,
      img: img,
      name: name,
      attackType: attackType == "X" ? undefined : attackType,
      riskLevel: riskLevel,
      eBoxes: eBoxes == "X" ? undefined : parseInt(eBoxes),
      qliphothCounter:
        qliphothCounter == "X" ? undefined : parseInt(qliphothCounter),
    });
  }

  // Add to JSON file
  const rootDirectory = process.cwd();
  const filePath = path.join(rootDirectory, "public", "data.json");
  const json = JSON.stringify(abnormalityData, null, 2);

  fs.writeFile(filePath, json, "utf8", (err) => {
    if (err) throw err;
    console.log("Data parsed");
  });
}

getData();
