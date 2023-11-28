import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/" , //主页

  {
    text:"content",
    icon:"C",
    children:[
      "/",
      {text:"Report", icon:"baogao1", link:"#"},
      {text:"Python notebook", icon:"a-bijibenbiji", link:"#"},
      {
        text:"sharing",
        icon:"home",
        children:[
          {text:"Movie review", icon:"dianyingpiao", link:"#"},
          {text:"article appreciation", icon:"a-bijibenbiji", link:"#"},
          {text:"photography", icon:"sheying", link:"#"},
        ]
      }
    ]
  }
]);
