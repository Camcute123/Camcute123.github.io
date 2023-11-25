import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/" , //主页
  {
    text: "主页", //指定名称
    icon: "----",//指定图标
    link: "/",
  },

  {
    text:"content",
    icon:"C",
    children:[
      "/",
      {text:"Report", icon:"home", link:"#"},
      {text:"Python notebook", icon:"home", link:"#"},
      {
        text:"sharing",
        icon:"home",
        children:[
          {text:"Movie review", icon:"home", link:"#"},
          {text:"article appreciation", icon:"home", link:"#"},
          {text:"photography", icon:"home", link:"#"},
        ]
      }
    ]
  }
]);
