import { Configuration, EsaApi } from "../client";
import { writeFileSync } from "fs";
import type { AxiosRequestConfig } from "axios";

(async () => {
  const esaApi = new EsaApi(
    new Configuration({ accessToken: process.env.ESA_API_TOKEN }),
  );
  const { data } = await esaApi.getPosts({ teamName: "qrio" });
  for (const post of data.posts) {
    console.log(post.name);
  }
  writeFileSync("./data/output/getpost.json", JSON.stringify(data.posts));
})();
