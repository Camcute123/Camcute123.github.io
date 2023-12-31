---
title: 06 Python tuple
date: 2024-1-2 8:44:38
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

## 1.创建元组

- 使用小括号创建
- 里面的元素用英文逗号隔开

```python
tup = ('毒药', '解药', '感冒药')
print(tup, type(tup))
#output
('毒药', '解药', '感冒药') <class 'tuple'>
```



## 2. 列表和元组的对比

![image-20240102084728982](./06-tuple.assets/image-20240102084728982.png)

- 列表中：元素用方括号包裹[]；在元组中，元素用圆括号包裹 ()
- 列表中的元素可以被修改，添加，删除，即列表是可变的数据类型，元组是不可变的数据类型。



## 3. 元素是不可变的

但凡想要修改元组，是会报错：

```python
tup = ('毒药', '解药', '感冒药')
tup[0] = '苹果'

#output
Traceback (most recent call last):
  File "/Users/wangruoyihan/PycharmProjects/pythonProject/python homework.py", line 101, in <module>
    tup[0] = '苹果'
    ~~~^^^
TypeError: 'tuple' object does not support item assignment

```



## 4. 元组的取值和分片操作

```python
tup = (2, 'lilei', 19)
print(tup[1])
print(tup[::2])
print(tup[-2::-1]) ## print(tup[-2:-4:-1])
#('lilei', 2)
```



## 5. 元组的特点

思考一下：如果元组只有一个元素，是什么类型？

```python
tup = (2)
print(type(tup))
#output
<class 'int'>
```

代码运行后，我们可知：如果元组只有一个元素，那么元素本身的类型。

为什么会是这个结果呢？

- 我们常规在数学计算中括号是在运算的时候用来保证优先级和在适当的情况下，可以直接去掉。
- `(1 + 2) * (2 + 1) = (3) * (3) = 3 * 3 = 9` 所以，你可以发现 `(3) * (3) = 3 * 3` 左边的 `(3)` 不就是上面所说的“元组只有一个元素的情况”。也就类似于数学表达式中括号可以直接省去。

如何解决呢？

```python
tup = (2,)
print(type(tup))
#output
<class 'tuple'>
```



## 6. 元组的拼接

直接用加法拼接

```python
tup1 = (1, 2, 3)
tup2 = (2, 3, 4)
new_tup = tup1 +tup2
print(new_tup)

#output
(1, 2, 3, 2, 3, 4)

```



## 7. 小试牛🔪

对下列元素排序：

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
```

思路：

- 因为元组不可变，所以先把元组转换成列表；
- 然后进行排序
- 接着进行转换回元组；

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
new_list = list(tup)
new_list.sort()
new_tup = tuple(new_list)
print(new_tup)

#output
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```



### 7.2 使用sorted()

实际上sorted实现的也就是上面的流程

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
lst = sorted(tup)
print(lst)
tup = tuple(lst)
print(tup)

#---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```



## 8. Zip()

`zip()` 是一个内置函数，用于将多个可迭代对象（如列表、元组或字符串）的相应元素配对并返回一个元组的迭代器。如果你有两个或更多的列表，并且想要根据它们的相应元素创建一个新的迭代器，那么 `zip()` 函数就非常有用。

1. 假设有两个列表

```python
lst1 = [1, 2, 3]
lst2 = ['a','b','c']
```

可以使用`zip()`来配对这些列表的元素：

```python
zipped = zip(lst1, lst2)
```

`zipped`现在是一个包含元组的迭代器，每个元组都是由两个列表的相应元素组成。例如：

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(zipped)  # 是一个 zip 对象、迭代器地址
print(list(zipped))  # 转换成列表查看，也可以转换成元组
# print(*zipped)  # * 号用来解包
# 当然也可以用循环，但是目前不涉及。
# 上面的代码中，你用了列表，后面就用不了 *，因为数据已经被提取走了。

# ---output---
<zip object at 0x10343e280>
[(1, 'a'), (2, 'b'), (3, 'c')]
```

可以使用循环来遍历这个迭代器：

```python
for num, letter in zipped:
    print(f"Number:{num}, Letter: {letter}")

#---output---:
Number:1, Letter: a
Number:2, Letter: b
Number:3, Letter: c
```

2. 元组同理：

```python
tup1 = (1, 2, 3)
tup2 = ('a', 'b', 'c')
zipped = zip(tup1, tup2)
print(zipped)  # 是一个迭代器地址
print(list(zipped))  # 转换成列表查看，也可以转换成元组
# print(*zipped)  # * 号用来解包

# ---output---
<zip object at 0x104f0d400>
[(1, 'a'), (2, 'b'), (3, 'c')]
```















