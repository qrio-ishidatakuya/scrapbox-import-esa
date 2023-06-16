import { Configuration, EsaApi } from "../client";
import type { AxiosRequestConfig } from 'axios';

(async () => {
  const esaApi = new EsaApi(
    new Configuration({ accessToken: process.env.ESA_API_TOKEN })
  );
  const { data } = await esaApi.getPosts({ teamName: "doc" });

  for (const post of data.posts) {
    console.log(post.name);
  }
})();
