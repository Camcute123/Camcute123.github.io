import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Cindy's Website",
      description: "Cindy's Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "王若伊晗的网站",
      description: "王若伊晗的博客",
    },
  },

  theme,
  head: [
    [
      "link", {
        rel: "shortcut icon",
        // href: "/favicon.ico",
        href: "/images/Logo.jpeg",
      }
    ],

  ],
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  },
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
