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

```python {2}
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

## 小试牛🔪

计算一个范围内奇数和偶数的和

::: code-tabs

@tab 高斯求和

```python
number = int(input("Please enter a number you want to calculate: "))
user_answer = False
while not user_answer:
    if number % 2 == 1 :
        outcome1 = (1 + number) * (number + 1) / 4
        outcome2 = (1 + (number -1)/2) * (number-1)/2
        print(f"the sum of odd number is {outcome1}")
        print(f"the sum of even number is {outcome2}")
        user_answer = True
    else:
        outcome3 = (1 + (number - 1))*(number/2)/2
        outcome4 = 2*(1+number/2)*(number/2)/2
        print(f"the sum of odd number is {outcome3}")
        print(f"the sum of even number is {outcome4}")
        user_answer = True
```

@tab 循环相加

```python
number = int(input("Please enter a number you want to calculate: "))
while number > 0:
    if number % 2 == 0:
        number += number
    else:
        number += number
    number -= 1
```

:::

**题目：猜数字游戏**

编写一个程序，让用户猜测一个由程序随机生成的在 1 到 100 之间的整数。程序应该具备以下特点：

1. 在开始时，程序随机生成一个 1 到 100 之间的整数，作为目标数字。
2. 程序提示用户输入一个猜测的数字。
3. 用户输入他们的猜测后，程序应该给出以下反馈之一：
   - 如果用户猜的数字比目标数字小，程序显示“太小了，请再试一次。”
   - 如果用户猜的数字比目标数字大，程序显示“太大了，请再试一次。”
   - 如果用户猜对了数字，程序显示“恭喜你，猜对了！”然后退出循环。
4. 如果用户连续猜测五次都没有猜中，程序应显示“很遗憾，你没有猜中。正确答案是 [目标数字]。”然后结束程序。
5. 用户每次猜测后，都应该有提示告知用户还剩下多少次猜测机会。

注意：请确保程序能够处理非法输入（如非数字输入），并给出适当的错误提示，然后让用户重新输入。

::: code-tabs

@tab code1

```python
import random
num = random.randint(1,100)
n = 0
while n < 5:
    user_number = int(input("please guess a number between 1 and 100: "))
    if user_number < num:
        print("Too small, try another time.")
    elif user_number > num:
        print("Too large, try another time.")
    else:
        print("Congratulations! Correct!")
        break
    n += 1
if n == 5:
    print("regretful, you have used up the chances")
```

@tab-code2

```python
import random

# 生成一个 1 到 100 之间的随机数
target_number = random.randint(1, 100)
guesses_left = 5  # 用户有 5 次猜测机会

while guesses_left > 0:
    # 获取用户输入
    guess = int(input("猜一个数字（1到100之间）："))
    
    # 检查用户的猜测
    if guess < target_number:
        print("太小了，请再试一次。")
    elif guess > target_number:
        print("太大了，请再试一次。")
    else:
        print("恭喜你，猜对了！")
        break

    # 减少剩余猜测次数
    guesses_left -= 1
    print(f"你还剩下 {guesses_left} 次猜测机会。")

if guesses_left == 0:
    print(f"很遗憾，你没有猜中。正确答案是 {target_number}。")
```

## 作业📒

### 1.

**题目：** 编写一个Python程序，使用`while`循环来计算从1到n的所有整数的平方和，其中n是用户输入的正整数。程序应该首先提示用户输入一个正整数n，然后计算并打印出从1到n（包括n）的所有整数的平方和。

**样例输入：**

```
5
```

**样例输出：**

```
55
```

**解释：** 
这个输出是因为 $1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55$。

```python
```

### 2. 

**题目：** 编写一个Python程序，使用`while`循环来实现一个简单的数字猜谜游戏。程序将随机选择一个介于1到100之间的数字，然后用户有机会猜测这个数字。每次用户猜测后，程序都会告诉用户猜测是太高、太低还是正确。如果用户猜对了，程序结束；否则，用户可以继续猜测，直到猜对为止。

**要求：**
1. 使用`random`模块来生成随机数。
2. 用户的每次输入都需要进行检查，确保它是有效的数字。
3. 程序应该在用户猜对数字后停止，并打印出猜测次数。

**示例：**
```
我想了一个1到100之间的数字，试着猜猜看！
请输入你的猜测: 50
太低了！再试一次。
请输入你的猜测: 75
太高了！再试一次。
请输入你的猜测: 60
恭喜你！猜对了。你总共猜了3次。
```

```python
```

