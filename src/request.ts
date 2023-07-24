import { Configuration, EsaApi } from "../client";
import type { AxiosRequestConfig } from 'axios';

// import fs from 'fs';
// const outputFilepath:string = './data/output/getpost';

// const outputFile = async (data: any) => {
//   try {
//     fs.writeFile(outputFilepath,data, (err) =>
//     {
//       console.log(err);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

(async () => {
  const esaApi = new EsaApi(
    new Configuration({ accessToken: process.env.ESA_API_TOKEN })
  );
  const { data } = await esaApi.getPosts({ teamName: "qrio" });

  for (const post of data.posts) {
    // outputFile(post.name);
    console.log(post.name);
  }
})();
