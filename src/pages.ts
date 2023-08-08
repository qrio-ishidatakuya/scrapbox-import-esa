import { readFileSync, writeFileSync } from "fs";

const jsonObject = JSON.parse(readFileSync("./data/qrio.json", "utf8"));
const pages = jsonObject.pages;
const pagesObject = { pages: pages };

// jsonObject.list.forEach((obj) => {
//     result[obj.id] = obj;
// });

writeFileSync("./data/pages.json", JSON.stringify(pagesObject));
