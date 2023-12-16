import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/" , //主页

  {
    text:"Report",
    icon:"baogao1",
    children:[
      "/",
      {text:"electrical", icon:"baogao1", link:"#"},
      {text:"structural", icon:"a-bijibenbiji", link:"#"},
]},

  { text:"python",
  icon:"home",
  children:[
        {text:"notebook", icon:"dianyingpiao", link:"#"},
        {text:"exercise", icon:"a-bijibenbiji", link:"#"},
        {text:"project", icon:"sheying", link:"#"},
  ]},

  { text:"sharing",
  icon:"home",
  children:[
        {text:"Movie review", icon:"dianyingpiao", link:"#"},
        {text:"article appreciation", icon:"a-bijibenbiji", link:"#"},
        {text:"photography", icon:"sheying", link:"#"},
  ]}

]);
