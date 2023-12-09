---
title: 01 Variable
date: 2023-12-07 08:21:10
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





## 1.理解变量--生活中的例子

---



### 1.1 什么是变量

- 变：变化
- 量：大小

### 1.2 一个例子

假如，你是班级当中的课代表，每个月需要统计班级中每个学生的月考成绩。月考成绩会每个月一张纸，每张纸上都会依次记录每个学生的成绩越到成绩，例如：

1. 李雷 98分
2. 马冬梅 89分
3. 刘奕彤 96分
4. ......

某一天，老师要看刘奕彤 1月、2月、3月的成绩，这个时候作为课代表的你需要怎么办。——总不能直接把每个月的月考成绩单直接给老师，显然是不合适的。
我们应该把刘奕彤 1月、2月、3月的成绩抄写到单独的一张纸上，接着给老师。
那么，我们为什么不一开始直接为每一个学生分配一个信封呢？（也可以是档案袋）信封在一开始是扁的，当我们放东西（数据）进去之后，是不是鼓起来了？——是不是变化了？是不是有大小了呢？显然是的。
那么信封，是不是在我们当前所处的空间当中开辟空间，来存放数据并且说这是信封。

类似的有：冰箱，不也是在我们当前所处的空间中，开辟空间。

---- 变量是在计算机的内存当中开辟空间
----变量会被覆盖

## 2.如何创建变量--赋值语句

1. 通过变量名代表或引用某个值

- 女娲捏了泥人，泥人没有生命，女娲挥了挥手柳条，赋予给泥人生命。此时，泥人可以代表说是女娲的后人。「变量：泥人，值：女娲」
- 全国人民代表大会，中的人大代表，是由广大人民群众投票选举出来的。他们的权利不是自己获取的，所以他们可以说：我代表的是广大人民群众的意志。「变量：人大代表，值：人民群众」

2. 初始化赋值语句： 变量名 = 表达式

- 变量名 ：就是这个空间，我们叫它什么名字
- 表达式： 类似数学表达

程序的逻辑： 从上到下， 从右到左， 最后赋值。

```python
name1 = 'WRYH'
name2 = name1
print(name2)
#变量的传递

name1 = "look"
name1 = "WRYH"
print(name1)
#变量的覆盖

```

```python
x = 1 # 1 赋值给 x
x = x + 10 # x 代表 1， 所以 x + 10 == 1 + 10，得到 11 后，赋值给变量x 
print(x) # 打印输出
# 井号是为了注释，注解，方便理解代码和后期维护。
```

## 3.探究print

---

### 3.1 同时输出多个数据

```python
a = 1
b = 1
c = 1
print(a, b, c)

#output 1 1 1 
```

从输出的结果可以看出，print 同时输出多个变量，每个值之间默认以空格间隔。
那么，我们可以修改这个默认空格间隔么？——答案显然是可以的。
使用 sep。

### 3.2 sep修改多个变量同时输出的间隔

```python
a = 1
b = 1
c = 1
print(a, b, c,sep=".hhhhhh.")
```

### 3.3 end修改print输出结尾方式

```python
a = 1
b = 1
c = 1
print(a)
print(b)
print(c)

#--out--
# 1
# 1
# 1
```

```python
a = 1
b = 1
c = 1
print(a, end="\n\n\n")
print(b)
print(c)
#--output--
# 1


# 1
# 1
```

```python
a = 1
b = 1
c = 1
print(a, end="hello hello")
print(b)
print(c)
```

### 3.4 end 和sep可以同时使用

```python
a = 1
b = 1
c = 1
print(a, b, c, sep = "~", end = " Hello")

#1~1~1 Hello
```



## 4.进阶的赋值方法

### 4.1 多个变量同时赋相同的值

``` python
a = b =c = 1
print (a, b, c,) #多个变量同时赋相同值
```

### 4.2 多个变量同时赋不同的值

```
a, b, c = 1, 2, 3
print(a, b, c)
```



## practice

假如你有两个小孩，哥哥叫：Austin，弟弟叫：Jaden。

Austin 想喝**果汁**，Jaden 想喝**可乐**。**哥哥和弟弟都有专属的杯子，不喜欢用对方的杯子。**

家中仅剩一杯果汁、一杯可乐，你不小心把哥哥的杯子装了可乐，弟弟的杯子装了果汁。

**问：如何交换哥哥与弟弟杯中的果汁？**

```python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
Austin1 = Jaden
Jaden1 = Austin
Austin = Austin1
Jaden = Jaden1

print("Austin", Austin)
print("Jaden", Jaden)
```

```python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
Austin1 = Austin
Austin = Jaden
Jaden = Austin1
print("Austin", Austin)
print("Jaden", Jaden)
```

``` python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
Austin, Jaden = Jaden, Austin
print("Austin", Austin)
print("Jaden", Jaden)
```



## 5.变量的命名规则

- 大小写，英文，数字和__的组合，且不能用数字开头；

    ``` python
    a1b2c3 = 1
    #数字不可以开头
    ```

    

- 系统关键词不能做变量名使用；

    ``` python
    as = 1
    #不可以print出来
    As = 1
    aS = 1
    a_s = 1
    ```

    获取关键词列表：help(‘keywords’)

    ``` python
    Here is a list of the Python keywords.  Enter any keyword to get more help.
    
    False               class               from                or
    None                continue            global              pass
    True                def                 if                  raise
    and                 del                 import              return
    as                  elif                in                  try
    assert              else                is                  while
    async               except              lambda              with
    await               finally             nonlocal            yield
    break               for                 not        
    ```

    

- python中的变量名区别大小写

    ```python
    n = 1
    N = 2
    print (n)
    
    #1
    ```

    

- 变量名不能包含空格，但可以用下划线

    ```python
    user_name = "hello"
    username = "hi"
    ```

    

- 不要使用python的内置函数名作为名称

    ``` python
    print = "123"
    print(print)
    #不能print出来
    ```

    

    ## 6. 练习

    1. 在 Python 中，变量名可以以数字开始。
        - [ ] 对
        - [x] 错

    2. 在 Python 中，以下哪个变量名是有效的？
        - [ ] 2myVar
        - [x] myVar2
        - [ ] my-var
        - [ ] my var

    3. 在Python中，变量名区分大小写。
        - [x] 对
        - [ ] 错

    4. 在Python中，`my_var` 和 `myVar` 是同一个变量。
        - [ ] 对
        - [x] 错

    5. 变量名可以是 Python 中的关键字。
        - [ ] 对
        - [x] 错

    6. `None` 是Python中的特殊类型，表示没有值或空值。
       
        - [x] 对
        - [ ] 错
        
    7. 在Python中，以下哪个是有效的变量赋值？
        - [x] 123abc = "hello"
        - [ ] for = "world"
        - [ ] _hidden = "secret"
        - [ ] import = 123
    
    8. 在Python中，一个变量可以同时被赋予多个值。
        - [ ] 对
        - [x] 错
    
    9. 在Python中，以下哪个是多变量赋值？
        - [x] a, b, c = 1, 2, 3
        - [ ] a = 1, b = 2, c = 3
        - [ ] a; b; c = 1; 2; 3
        - [ ] a = 1; b = 2; c = 3;
    
    10. 变量在使用之前必须被赋值。
        - [x] 对
        - [ ] 错
    
    11. Python中变量的类型是静态的，一旦赋值就不能改变。
        - [ ] 对
        - [x] 错
    
    12. 在Python中，以下哪个表示全局变量？
        - [x] var = "hello"
        - [ ] global var
        - [ ] var(global)
        - [ ] def var():
    
    13. 以下哪个表示删除变量？
        - [ ] delete x
        
        - [x] del x
        
        - [ ] remove x
        
        - [ ] destroy x
        
            ```python
            my_variable = "Hello, World!"
            print(my_variable)
            
            # 删除变量
            del my_variable
            
            # 尝试访问已删除的变量将引发 NameError
            # print(my_variable)
            
            ```
        
            
        
    14. `x = 5` 之后 `y = x`，现在改变 `y` 的值，`x` 的值也会改变。
        - [ ] 对
        - [x] 错
    
    15. `x = [1, 2, 3]` 之后 `y = x`，现在改变 `y` 的列表内容，`x` 的内容也会改变。
        - [ ] 对
        - [x] 错
    
    16. 在Python中，变量只能存储基本数据类型的值，如整数或字符串。
        - [ ] 对
        - [x] 错
    
    

