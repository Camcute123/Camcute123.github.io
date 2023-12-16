import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",


  { text:"学习笔记",
    icon:"home",
    children:[
      {text:"电学", icon:"baogao1", link:"#"},
      {text:"机械学", icon:"a-bijibenbiji", link:"#"},
      {text:"结构学", icon:"a-bijibenbiji", link:"#"},
      {text:"数学", icon:"a-bijibenbiji", link:"#"},
    ]
  },


  {
    text:"python",
    icon:"home",
    children:[
      {text:"笔记", icon:"yuedu1", link:"#"},
      {text:"练习", icon:"yuedu1", link:"#"},
      {text:"项目", icon:"-dianyingpiao-", link:"#"},
    ]
  },

  {
    text:"日常分享",
    icon:"home",
    children:[
      {text:"电影观感", icon:"yuedu1", link:"#"},
      {text:"文章赏析", icon:"yuedu1", link:"#"},
      {text:"摄影作品", icon:"-dianyingpiao-", link:"#"},
    ]
  },
])

