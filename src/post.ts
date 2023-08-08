import { Configuration, EsaApi } from "../client";
import { readFileSync } from "fs";
// import { writeFileSync } from 'fs';
// import type { AxiosRequestConfig } from 'axios';

const postBody = JSON.parse(readFileSync("./data/postBody.json", "utf8"));

(async () => {
  const esaApi = new EsaApi(
    new Configuration({ accessToken: process.env.ESA_API_TOKEN }),
  );
  const { data } = await esaApi.createPost({
    teamName: "qrio",
    createPostBody: postBody,
  });
})();
