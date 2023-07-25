import { Configuration, EsaApi } from "../client";
// import { writeFileSync } from 'fs';
// import type { AxiosRequestConfig } from 'axios';

const postBody = {
  post: {
    name: "hi!",
    body_md: "# Getting Started\n",
    tags: ["api"],
    category: "dev/2015/05/10",
    wip: true,
    message: "Add Getting Started section",
  },
};

(async () => {
  const esaApi = new EsaApi(
    new Configuration({ accessToken: process.env.ESA_API_TOKEN }),
  );
  const { data } = await esaApi.createPost({
    teamName: "qrio",
    createPostBody: postBody,
  });
})();
