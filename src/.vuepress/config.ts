import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
