---
title: Python Exercises
date: 2024-1-6   19:31:36
author: Cindy
isOriginal: true
category: 
    - python practice
tag:
    - practice
    - python
    - variables
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

---
通过一句一句的提问获取用户的信息，生成一个格式化的简历。

**如例：**

![fb736dc40ee235cf8565a7d6ed222fd3.png](./Exercise-answering-software.assets/fb736dc40ee235cf8565a7d6ed222fd3.png)

```python
name = input("请输入你的姓名： ")
gender = input("请输入你的性别： ")
age = input("请输入你的年龄： ")
school = input("请输入你的学校： ")
print("is processing......")
print("    简历     ")
print(f"姓名： {name}")
print(f"性别： {gender}")
print(f"年龄： {age}")
print(f"就读学校： {school}")

#---output---
请输入你的姓名： Cindy
请输入你的性别： female
请输入你的年龄： 17
请输入你的学校： Cambridge
is processing......
    简历     
姓名： Cindy
性别： female
年龄： 17
就读学校： Cambridge
```

