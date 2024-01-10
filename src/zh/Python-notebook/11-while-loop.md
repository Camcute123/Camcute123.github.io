---
title: 11 Python while
date: 2024-1-10 8:34:52
author: Cindy
isOriginal: true
category: 
    - python notebook
tag:
    - notes
    - python
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

## 1. while 循环

当满足条件是一直执行里面的代码块

```python
user_answer_correct = False
while not user_answer_correct:
    user_gender = input("Please input your gender(F/M): ")
    if user_gender == 'F':
        print("Your are a girl")
        user_answer_correct = True
    elif user_gender == 'M':
        print("Your are a boy")
        user_answer_correct = True
    else:
        print("Wrong inout, please input F or M")
```

