/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://portfolio-sarangyogi.vercel.app/",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://portfolio-sarangyogi.vercel.app/",
      hreflang: "es",
    },
    {
      href: "https://portfolio-git-main-sarangyogi.vercel.app/",
      hreflang: "fr",
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/additional-page"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ]
  },
};

module.exports=config
