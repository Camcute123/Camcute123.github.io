---
title: 05 Python list__Exercise
date: 2023-12-30 16:47:32
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

![image-20231230164639809](./05-list-exercise.assets/image-20231230164639809.png)

```python
numbers = list('132569874')
numbers_even_position = numbers[::2]
numbers_even_position.sort(reverse=True)
numbers[::2] = numbers_even_position
print(numbers)

#output
['8', '3', '6', '5', '4', '9', '2', '7', '1']
```



