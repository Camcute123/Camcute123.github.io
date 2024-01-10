---
title: Python exercise
date: 2024-1-6 20:30:12
author: Cindy
isOriginal: true
category: 
    - python notebook
tag:
    - practice
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

---
## Chapter1 after class test

1.  以下哪个变量可以做 Python 的变量：  `C`
    
    A. 01a B. class C. a\_int D. b-int
    
2.  以下哪个选项不是 Python 的基本数据类型关键字   `C`
    
    A. int B.bool C. string D. dict
    
3.  此题无需在线作答，请在纸上作答后查看答案解析
    
    语句 `x, y, z = 1, 2, 3` 执行后，变量 y 的值为.  `2` 。
    
4.  查看变量类型的 Python 内置函数是.    `type()`
    
5.  此题无需在线作答，请在纸上作答后查看答案解析
    
    请写出该代码的输出结果.   `XYZ`。
    
    ```
    a = 'ABC'
    b = a
    a = 'XYZ'
    print(b)
    ```
    





## Chapter2 after class test

1. 数字型和字符串类型的变量完全可以互相转换。✅

A. 正确 

B. 错误

2. 加法运算符可以用来连接字符串并生成新字符串。✅

A. 正确 

B. 错误

3. 不管输入什么，Python 3.x 中 `input()`  函数的返回值总是字符串。✅

A. 正确 

B. 错误

4. ⚠️Python 字符串方法 `replace()`  对字符串进行原地修改。❌

A. 正确 

B. 错误

5. 此题无需在线作答，请在纸上作答后查看答案解析

`7//3` 的值为 `2`  .`7%3` 的值为 `1`。

6. 此题无需在线作答，请在纸上作答后查看答案解析

y 变量初始赋值为 10，有代码为：`y *= 2`，则运算过后 y 的值为  `20`。

7. 此题无需在线作答，请在纸上作答后查看答案解析

可以使用    `str()`    函数将数字型的变量转换成字符串。

8. 下列哪个表达式在 Python 中是非法的？   `B`

A. x = y = z = 1

B. x = (y = z + 1)

C. x, y = y, x

D. x += y

9. 字符串是 Python 的\_\_\_\_\_\_\_\_\_序列。  `A`

A. 有序

B. 无序

10. 当在字符串前加上小写字母  `r`  或大写字母   `R`  表示原始字符串，不对其中的任何字符进行转义。

11. 已知字符串 `x = 'hello world'` ，那么执行语句 `x.replace('hello', 'hi')`  之后，x 的值为\_\_\_\_\_\_\_\_\_\_\_\_。

12. 此题无需在线作答，请在纸上作答后查看答案解析

设 `s='abcdefg'`，则：

- `s[3]` 的值为. d
- `s[3:5]` 的值为.  def
- `s[:5]` 的值为.  abcdef
- `s[3:]` 的值为.  defg
- `s[::2]` 的值为.  aceg
- `s[::-1]` 的值为.  gfedcba
- `s[-2:-5]` 的值为.  🈳️

13. （知识拓展）有变量 `name = ' Alex '`，请按照要求实现每个功能： 

1. 移除 name 变量对应的值两边的空格，并输出移除后的内容； 

```python
name.strip()
```



1. 判断 name 变量对应的值是否以 `"al"` 开头和以 `"X"` 结尾，并输出结果； 

```python
name = "  Alex  "
print(name.startswith("al"))
print(name.endswith("X"))

#---output---
False
False
```



1. 将 name 变量对应的值中的 `l` 替换为 `p`，并输出结果； 

```python
print(name.replace('l','p'))
```



1. 将 name 变量对应的值根据 `l` 分割，并输出结果； 

```python
print((name.split('l')))
#['  A', 'ex  ']
```



1. 将 name 变量对应的值分别变大写和小写，并输出结果。

```python
#upper
print(name.upper())
#  ALEX
print(name.lower())
#  alex 
```



## Chapter3 after class test

1. 列表、元组、字符串是 Python 的\_\_\_\_\_\_\_序列。 `A`

    A. 有序 

    B. 无序

2. \_\_\_\_\_\_\_\_关键字既可以删除列表中的一个元素，也可以删除整个列表。 `del()`

3. 已知列表 `x = [1, 2, 3]` ，那么执行语句 `x.pop(0)`  之后，x 的值为\_\_\_\_\_\_\_\_\_。 `[2, 3]`

4. 已知列表 `x = [1, 2, 3]` ，那么执行语句 `x.insert(1, 4)`  只有，x 的值为\_\_\_\_\_\_\_\_\_\_\_。 `[1, 4, 2, 3]`

5. 任意长度的 Python 列表、元组和字符串中最后一个元素的下标为\_\_\_\_\_\_\_\_。 `-1`

6. 列表对象的 `append()` 方法属于原地操作，用于在列表尾部追加一个元素。  ✅

    A. √ 

    B. X

7. Python 列表中所有元素必须为相同类型的数据。 ❌

    A. √ 

    B. X

8. 已知 x 是个列表对象，那么执行语句 `y = x` 之后，对y所做的任何操作都会同样作用到 x 上。 ✅

    A. √ 

    B. X

9. 已知 x 是个列表对象，那么执行语句 `y = x[:]` 之后，对 y 所做的任何操作都会同样作用到x上。 ❌

    A. √ 

    B. X

10. 列表、元组、字符串支持双向索引。 ✅

    A. √ 

    B. X



## Chapter4 after class test

---
1. Python 支持使用字典的“键”作为下标来访问字典中的值。 ✅

    A. √ 

    B. X

2. 列表可以作为字典的“键”。 键不可变 ❌

    A. √ 

    B. X

3. Python 支持字典里嵌套列表或嵌套字典。 ✅

    A. √ 

    B. X

4. Python字典中的“键”不允许重复。 ✅

    A. √ 

    B. X

5. Python字典中的“值”不允许重复。 ❌

    A. √ 

    B. X

6. Python 字典和集合属于无序序列。 ✅

    A. √ 

    B. X

7. Python 内置函数\_\_\_\_len()\_\_\_\_\_可以返回列表、元组、字典、集合、字符串中的元素个数。   

8. 字典中多个元素之间使用\_\_\_\_\_\_\_\_\_\_\_\_ ``,``   分隔开，每个元素的“键”与“值”之间使用\_\_\_\_\_\_\_\_分隔开。`:`

9. 获得集合的并集应使用\_\_\_|\_\_\_运算符；获得集合的交集应使用\_\_\_&\_\_\_运算符；获得集合的差集应使用\_\_\_-\_\_\_运算符。

10. 集合 a 被定义为：`a = {1,2,3,2,5,6,2,1}` ；则代码 `len(a)` 的值为\_\_\_\_\_8\_\_\_\_。

11. （拓展）字典对象的\_\_\_\_get ( )\_\_\_\_\_\_\_方法可以获取指定 “键” 对应的“值”，并且可以在指定 “键” 不存在的时候返回指定值，如果不指定则返回 None。

