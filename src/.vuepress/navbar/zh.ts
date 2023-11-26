import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",

  {
    text:"内容",
    icon:"C",
    children:[
      {
        text:"学习笔记",
        icon:"home",
        children:[
          {text:"实验报告", icon:"home", link:"#"},
          {text:"Python笔记", icon:"home", link:"#"},
        ]
      },

      {
        text:"日常分享",
        icon:"home",
        children:[
          {text:"电影观感", icon:"home", link:"#"},
          {text:"文章赏析", icon:"home", link:"#"},
          {text:"摄影作品", icon:"home", link:"#"},
        ]
      }
    ]
  }
]);
