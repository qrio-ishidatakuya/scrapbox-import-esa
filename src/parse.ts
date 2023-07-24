import { readFileSync, writeFileSync } from 'fs';

const jsonObject = JSON.parse(readFileSync('./data/qrio.json', 'utf8'));
const pages = jsonObject.pages;

// jsonObject.list.forEach((obj) => {
//     result[obj.id] = obj;
// });

writeFileSync('./data/parse.json', JSON.stringify(pages));
