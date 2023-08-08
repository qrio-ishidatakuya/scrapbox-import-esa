import { readFileSync, writeFileSync } from "fs";

interface Line {
  text: String;
  created: Date;
  updated: Date;
  userId: String;
}

interface Page {
  title: String;
  created: Date;
  updated: Date;
  id: string;
  lines: Line[];
}

interface PagesObjext {
  pages: Page[];
}

const pagesObject: PagesObjext = JSON.parse(
  readFileSync("./data/pages.json", "utf8"),
);
const pages: Page[] = pagesObject.pages;

interface Post {
  name: string;
  body_md: string;
  tags: string[];
  category: string[];
  wip: boolean;
  message: string;
}

const postProto: Post = {
  name: "",
  body_md: "",
  tags: [],
  category: [],
  wip: true,
  message: "",
};

const post: Post = Object.create(postProto);
post.name = "log/scrapbox";
for (let page of pages) {
  const created = new Date(page.created);
  const updated = new Date(page.updated);
  post.body_md = post.body_md + "# " + page.title + "\n";
  post.body_md = post.body_md + "created_at:" + created + "\n";
  post.body_md = post.body_md + "updated_at:" + updated + "\n";
  const lines: Line[] = page.lines;
  let linesText: string = "";
  for (let line of lines) {
    let replaceText = line.text.replace("#", "##");
    linesText = linesText + replaceText + "\n";
  }
  post.body_md = post.body_md + linesText;
}
const postBody = {
  post: post,
};
writeFileSync("./data/postBody.json", JSON.stringify(postBody));
