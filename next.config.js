/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{domains:['cdn.sanity.io']},
  env: {
    mapbox_key:'pk.eyJ1Ijoic2FtdWFsZCIsImEiOiJjbDJqNHM4ODAwdTRmM25xdzBhNmRsMXJ0In0.B-meWuOVa7syjbJewMhbgg',
    SANITY_PROJECTID:"oceqdeu3",
    SANITY_TOKEN:"skF8sq7yRGrChooS3EUcovUNZ3LBPbDIry69mJCGtnAs5Hhcx9mc1yN31qzIRu0Ixk4g9hpHssG8VMCvpMWtjKmR7zkZ34fQS5oHFniqt4SbEsCE7SsYwvUgH49W6F5aw4oZK1zVa3V03vify4rtxlwdTlkL39G6AGJShzVD6qrFS9b9nv2o"
    // mapbox_key:'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
// 'pk.eyJ1Ijoic2FtdWFsZCIsImEiOiJjbDJqNHM4ODAwdTRmM25xdzBhNmRsMXJ0In0.B-meWuOVa7syjbJewMhbgg'
module.exports = nextConfig
