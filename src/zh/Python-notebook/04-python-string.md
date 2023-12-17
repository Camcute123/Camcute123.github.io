---
title: 04 Python string
date: 2023-12-12 8:20:36
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

## 1.字符串的定义

字符串是由字母，数字和特殊字符组成的特殊序列

![image-20231214083505664](./04-python-string.assets/image-20231214083505664.png)

## 2.创建字符串

 **如何创建字符串？**

——使用单引号，双引号或者三引号

```python
name = ‘Cindy’
number = “31”
paragraph = '''Hello everyone!
hello Cindy!'''
```

**为什么python同时支持三种创建字符串的方法**

双引号和单引号在一起可以避免歧义

可以双引号中需要引号的部分使用单引号

三个引号可以分行，不用重复打引号

但是英文当中可以缩写如下：

```python
string = 'I'm bornforthis.'  # 在英文当中也可以这样缩写
print(string)


# 输出
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson2.py", line 15
    string = 'I'm bornforthis.'  # 在英文当中也可以这样缩写
                ^
SyntaxError: invalid syntax
```

**因为，开头是单引号，所以 Python 会寻找到下一个第一次出现的单引号进行匹配。而第一个单引号不在字符串的末尾，所以导致整个字符串异常。（没有完全包裹字符串全部内容）**

如何解决上面描述的问题呢？——使用双引号。

```python
string = "I'm bornforthis."  # 外面使用双引号进行包裹即可
print(string)

# 输出
I'm bornforthis.
```

- 有时候我们需要字符串里面有单引号或双引号，此时发挥作用： **<span style="color:orange">单双引号混用，是第一个原因</span>**

那么三引号呢？

假设我们现在需要存储如下文本：

```python
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

放入字符串，我们如何在 Python 代码实现呢？

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"  # 外面使用双引号进行包裹即可
print(string)

# 输出
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson2.py", line 15
    string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                     ^
SyntaxError: EOL while scanning string literal
```

常规的单引号、双引号是不支持多行文本，但是有一个方法可以间接实现看似多行文本，但实际是单行，在每一行的末尾添加  `\`：

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 \
\
浅者见浅，深者见深——黄家宝\
\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\
\
先实现功能，再去优化，否则一切会很乱。——AI悦创\
\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"  # 外面使用双引号进行包裹即可
print(string)

# 输出
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

从上面的输出可知，每行结尾添加 `\` 只能实现看起来换行，实际上还是一行。「就是：一行显示不完，换行显示而已，但是本身还是一行」

![image-20231215074000023](./04-python-string.assets/image-20231215074000023.png)

此时，我们使用三引号测试：

```python
string = """我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"""  # 外面使用双引号进行包裹即可
print(string)


# 输出
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」

- **<span style="color:orange">三个单引号或者三个双引号，实现原样输出。</span>**
- **<span style="color:orange">多行注释</span>**
- **<span style="color:orange">单双三引号混用</span>**（代码略）

![image-20231215074315872](./04-python-string.assets/image-20231215074315872.png)

## 3. 字符串长度

如何获取字符串长度？ —— `len()`

`len():`返回字符串中字符长度或字符数。

```python
paragraph = "Hello everyone!"
print(len(paragraph))
```

在使用len获取字符串长度时，是从数字1开始的。



## 4. 字符串中字符的获取

### 4.1 获取单个字符

```python
string = "bornforthis"
select = string[0]
print(select)
select_1 = string[-1]
select_2 = string[10]
select_3 = len(string)
print(string[select_3 - 1])
#output
b
s
```

### 4.2 获取多个连续字符

```python
string = "bornforthis"
"""
语法：string = "bornforthis"
select = string[start:end]
PS: end 要+1
"""
#获取字符串bor
select = string[0:3]
print(select)
select_1 = string[4:7]
select_2 = string[-4:]
print(select_1)
print(select_2)

#output
bor
for
this
```

### 4.3 获取多个不连续字符 

```
string = "0123456789"
"""
语法：string = "0123456789"
select = string[start: end: sep]
PS: end 要+1
"""
#获取字符串bor
select = string[0: len(string): 2]
print(select)
```

``` python
string = "0123456789"
"""
语法：string = "0123456789"
select = string[start: end: sep]
PS: end 要+1
"""
#获取字符串bor
select = string[0: len(string): 2]
select_1 = string[1: len(string) : 2]
string_1 = "bornforthis"
select_2 = string_1[1: len(string_1): 3]
select_3 = string_1[0: len(string_1): 3]
print(select)
print(select_1)
print(select_2)
print(select_3)

#output
02468
13579
ofts
bnri
```

优化方法，从0开始，默认不需要写，到结尾，也可以不写

所以从开始到结尾，打印步长为2的所有数

```
string = "0123456789"
select = string[:: 2]
print(select)
```

如果不是从[0]开始，就不可以省略

### 4.4 字符串倒序

#### 4.4.1 实现

字符串的第三个位置，控制的是字符的提取方向。默认正数为1，如果改成-1，则会变成反方向。

:::warning

正负控制方向，数字大小控制步长

:::

```python
string = "Vervevividness"
select = string[::-1]
print(select)
#output
ssendivivevreV
```

#### 4.4.2`string[::1]`省略了

```python
string = "Vervevividness"
select = string[0: 15: -1]
print(select)#无结果
```

方向相互冲突，所以没有结果

![image-20231215083113492](./04-python-string.assets/image-20231215083113492.png)

```python
string = "Vervevividness"
select = string[len(string):0:-1]
print(select)
#output
ssendivivevre
```

0+1 = 1 仍然取不到[0]的数值

可以通过省略0来解决这个问题

#####  4.4.2.1方法

重写开始结尾

```python
string = "Vervevividness"
select = string[-1:-15:-1]
print(select)
#output
ssendivivevreV
```

![image-20231215083057643](./04-python-string.assets/image-20231215083057643.png)

```python
string = "bornforthis"
#rofn
select = string[-5: -9: -1]
print(select)
#output
rofn
```

## 5. 字符串内置方法

### 5.1 .upper()

将字符串内容，全部转成大写

```python
string = "bornforthis"
upper_string  = string.upper()
print(upper_string)
#output
BORNFORTHIS
```

### 5.2 .lower()

将字符串的内容全部转成小写

```python
string = "BORNFORTHIS"
lower_string  = string.lower()
print(lower_string)
#output
bornforthis
```

### 5.3 .capitalize()

将字符串首字母转换成大写（只有首字母）

```python
string = "hello, I am Lisa"
capitalize_string  = string.capitalize()
print(capitalize_string)
#output
Hello, i am lisa

```

### 5.4 .title()

将字符串的每个单词的首字母大写（无论什么间隔）

```python
string = "hello, I-am-lisa"
title_string  = string.title()
print(title_string)
#output
Hello, I-Am-Lisa
```

### 5.5 .startswith()

```python
string = "hello, I-am-lisa"
new_string  = string.startswith("h")
print(new_string)
new_string1  = string.startswith("he")
print(new_string1)
#output
True
True

```

### 5.6 .endswith()

```python
string = "hello, I-am-lisa"
new_string  = string.endswith("-lisa")
print(new_string)
new_string_1  = string.endswith("s")
print(new_string_1)
#output
True
False
```

### 5.7 .count()

检测目标（特定）字符出现的次数

```python
string = "bornforthis"
new_string  = string.count("r")
print(new_string)
string = "I like apple apple apple apple"
new_string  = string.count("apple")
print(new_string)
#output
2
4
```

### 5.8 .find()

寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么`find( )` 返回目标单词第一个字母的下标。

如果查询的字符或单词不存在，则返回“-1”

```python
string = "bornforthis"
new_string  = string.find("b")
print(new_string)

#output
0
```

```python
string = "bornforthis"
new_string  = string.find("a")
print(new_string)

#output
-1
```

```python
string = "bornforthis"
new_string  = string.find("orn")
print(new_string)

#output
1
```

### 5.9 .index()

寻找目标字符或单词在特定字符串，第一次出现的下标。如果是查找单词，那么`index（）`返回目标单词的第一个字符的下标

如果查询的单词不存在，则报错

```python
string = "bornforthis"
new_string = string.index("orn")
print(new_string)
#output
1

string = "bornforthis"
new_string_1 = string.index("q")
print(new_string_1)
#output
Traceback (most recent call last):
  File "/Users/wangruoyihan/PycharmProjects/pythonProject/python 11.12.py", line 95, in <module>
    new_string_1 = string.index("q")
                   ^^^^^^^^^^^^^^^^^
ValueError: substring not found
```

### 5.10 .isdigit()

判断字符串是不是纯数字字符串，字符串中只要有一个字符是非数字，则返回false。

```python
string = "12345678"
result = string.isdigit()
print(result)

#output
True

string = "12345678a"
result = string.isdigit()
print(result)
#output
false
```

### 5.11 .isalpha()

判断字符串是不是纯字母字符串，字符串中只要有一个字符是非字母字，则返回false。

```python
string = "Verveviviness"
result = string.isalpha()
print(result)

#output
True

string = "Verve vividness"
result = string.isalpha()
print(result)
#output
false
```

### 5.12 .isalnum()

判断字符串是不是纯数字或者纯字母，纯数字字母字符串，字符串中但凡出现非数字字母元素，则返回False

```python
string = "Verveviviness"
result = string.isalnum()
print(result)

#output
True

string = "123456"
result = string.isalnum()
print(result)
#output
True

string = "Verveviviness1234"
result = string.isalnum()
print(result)

#output
True
```

### 5.13 .isupper

判断字符串是否全部大写，字符串中只要有一个字符是非大写，则返回false。

```python
string = "HELLO"
boolean = string.isupper()
print(boolean)
#output
True

string = "HELLOa"
boolean = string.isupper()
print(boolean)
#output
False

string = "HELLO$$"
boolean = string.isupper()
print(boolean)
#output
True
```

### 5.14 .islower

判断字符串是否全部小写，字符串中只要有一个字符是非小写，则返回false。

```python
string = "hello"
boolean = string.islower()
print(boolean)
#output
True

string = "Helloa"
boolean = string.islower()
print(boolean)
#output
False

string = "hello$$"
boolean = string.islower()
print(boolean)
#output
True
```

### 5.15 .isspace

判断字符串是否为纯空格，多少个空格都可以。纯空格返回True，否则返回False

```python
string = "     "
boolean = string.isspace()
print(boolean)
#output
True

string = " "
boolean = string.isspace()
print(boolean)
#output
True

string = "hello$$"
boolean = string.isspace()
print(boolean)
#output
False
```

### 5.16 .strip()

默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。

```python
string = "  Vervevividness  "
strip_string = string.strip()
print("原本字符串", string)
print("去掉空白后的", strip_string)
#output
原本字符串   Vervevividness  
去掉空白后的 Vervevividness

string = " --Vervevividness--  "
strip_string = string.strip("- ")# 如果只打-，只会去除连续的减号
print("原本字符串", string)
print("去掉-和空白后的", strip_string) #没有先后顺序
#output
原本字符串  --Vervevividness--  
去掉-和空白后的 Vervevividness
```

### 5.17 .lstrip()

默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。

```python
string = "   bornforthis   "
lstrip_string = string.lstrip()
print("原本的字符串:", string)
print("去掉左边空白字符后:", lstrip_string)

# ---output---
原本的字符串:    bornforthis   
去掉左边空白字符后: bornforthis   


string = "----bornforthis----"
lstrip_string = string.lstrip('-')
print("原本的字符串:", string)
print("去掉左边 '-' 后:", lstrip_string)


# ---output---
原本的字符串: ----bornforthis----
去掉左边 '-' 后: bornforthis----

string = "-- --bornforthis----"
lstrip_string = string.lstrip('- ')  # 不分先后顺序
print("原本的字符串:", string)
print("去掉左边 '- ' 后:", lstrip_string)

# ---output---
原本的字符串: -- --bornforthis----
去掉左边 '- ' 后: bornforthis----
```

### 5.18 .Rsrip()

默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。

```python
string = "   bornforthis   "
rstrip_string = string.rstrip()
print("原本的字符串:", string)
print("去掉右边空白字符后:", rstrip_string)

# ---output---
原本的字符串:    bornforthis   
去掉右边空白字符后:    bornforthis


string = "----bornforthis----"
rstrip_string = string.rstrip('-')
print("原本的字符串:", string)
print("去掉右边 '-' 后:", rstrip_string)

# ---output---
原本的字符串: ----bornforthis----
去掉右边 '-' 后: ----bornforthis


string = "----bornforthis-- --"
rstrip_string = string.rstrip('- ')  # 不分先后顺序
print("原本的字符串:", string)
print("去掉右边 '- ' 后:", rstrip_string)

# ---output---
原本的字符串: ----bornforthis-- --
去掉右边 '- ' 后: ----bornforthis
```

### 5.19 .replce()

```python
string = "  Vervevividness  "
replace_string = string.replace(' ', '@', 1)
print("原本的： ", string)
print("改后的： ", replace_string)
#output
原本的：    Vervevividness  
改后的：  @ Vervevividness  

string = "  Vervevividness  "
replace_string = string.replace(' ', '@',)
print("原本的： ", string)
print("改后的： ", replace_string)
#output
原本的：    Vervevividness  
改后的：  @@Vervevividness@@

string = "  11--Vervevividness--11  "
replace_string = string.replace('1-', 'ai-',)
print("原本的： ", string)
print("改后的： ", replace_string)
#output
原本的：    11--Vervevividness--11  
改后的：    1ai--Vervevividness--11  

```

