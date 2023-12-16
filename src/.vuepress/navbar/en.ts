import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/" , //主页

  {
    text:"study",
    icon:"baogao1",
    children:[
      "/",
      {text:"electrical", icon:"baogao1", link:"#"},
      {text:"structural", icon:"a-bijibenbiji", link:"#"},
      {text:"mechanics", icon:"baogao1", link:"#"},
      {text:"mathematics", icon:"baogao1", link:"#"},
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
        {text:"book review", icon:"dianyingpiao", link:"#"},
        {text:"photography", icon:"sheying", link:"#"},
  ]}

]);
