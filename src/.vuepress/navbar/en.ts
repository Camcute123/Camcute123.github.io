import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/" , //主页
  {
    text: "主页", //指定名称
    icon: "----",//指定图标
    link: "/",
  },

  {
    text:"111",
    icon:"C",
    children:[
      "/",
      {text:"222", icon:"home", link:"#"},
      {
        text:"333",
        icon:"home",
        children:[
          {text:"444", icon:"home", link:"#"},
          {text:"444", icon:"home", link:"#"}
        ]
      }
    ]
  }
]);
