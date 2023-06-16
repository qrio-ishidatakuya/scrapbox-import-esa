# typescript-node-base

* TypeScript + Node.js project boilerplate

# Usage

```bash
git clone https://github.com/notakaos/typescript-node-base.git
cd typescript-node-base
npm install
npm run dev
```

# License

[ISC License](./LICENSE)

/* 以下追記 */

# esa-openapi

https://github.com/suin/esa-openapi
```
npx @openapitools/openapi-generator-cli generate \
    -g typescript-axios \
    -i https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json \
    -o client \
    --additional-properties=supportsES6=true,typescriptThreePlus=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models
```
