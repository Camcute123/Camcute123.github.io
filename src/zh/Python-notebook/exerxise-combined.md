---
title: Python Exercises
date: 2024-1-14 11:23:36
author: Cindy
isOriginal: true
category: 
    - python practice
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

## Question 01: Find the Missing Number

Acquire user input, where the user inputs a specific list. This list consists of consecutive numerical elements. However, one number is missing. Please write a program to find the missing number without using any built-in functions.

Sample Test 1:

```python
Enter the list of numbers: 1, 2, 3, 4, 6, 7, 8
The missing number is 5.
```

Sample Test 2:

```python
Enter the list of numbers: 1,2, 4, 5,6, 7,8
The missing number is 3.
```

```python
user_number = (input("Please enter a list of continuous numbers: "))
lst_number = user_number.split(",")
## 
lst_number = [int(num) for num in lst_number]
print(lst_number)
total_number = []
for n in range(1, int(lst_number[-1]) + 1):
    total_number.append(n)
print(total_number)
missing_number = set(total_number) - set(lst_number)
for missing_number in missing_number:
    print(f"the number {missing_number} is missing.")
   
 #---output---
[1, 2, 4, 5]
[1, 2, 3, 4, 5]
the number 3 is missing.
```



```python
# 用户输入的数字序列
user_input = input('Please enter a series of numbers separated by commas:').replace(' ', '').split(',')
# 将字符串转换为整数列表
numbers_list = list(map(int, user_input))
# 从列表中提取旋转次数和剩余的数字
# *rotating_elements, rotation_count = numbers
rotating_elements, rotation_count = numbers_list[:-1], numbers_list[-1]
# 执行左旋转操作
rotated_list = rotating_elements[rotation_count:] + rotating_elements[:rotation_count]
# 输出结果
print(f"List {rotating_elements} after {rotation_count} left rotations: {rotated_list}")
```



------

## Question 03: Shallow Copy Verification

Demonstrate shallow copying of a list and show how it differs from a deep copy.

浅拷贝：复制一个列表（但不会创建一个新的，也就是说id是和所复制的列表完全相同的）

所存在的问题时，当一个列表中嵌套了另一个列表，就无法实现复制。

```python
# Demonstrating shallow copying and deep copying in Python

# Original list
original_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Shallow copy of the list
shallow_copy = original_list.copy()

# Deep copy of the list
import copy
deep_copy = copy.deepcopy(original_list)

# Altering the original list to show the difference
original_list[0][0] = 'X'

# Displaying the original list, shallow copy, and deep copy to illustrate the differences
print("Original:", original_list)
print("Shallow Copy:", shallow_copy)
print("Deep Copy:", deep_copy)

```





## [#](#question-04-list-to-string-conversion) Question 04: List to String Conversion

Obtain a user-input list and a specific delimiter, and concatenate the items in the user-input list into a string using the specified delimiter.

Sample Test 1:

```python
Please enter a list of elements, separated by commas: apple, banana, orange
Please enter the delimiter you wish to use: ;
apple; banana; orange
```

Sample Test 2:

```python
Please enter a list of elements, separated by commas: dog, cat, mouse
Please enter the delimiter you wish to use:  - 
dog -  cat -  mouse
```

Sample Test 3:

```python
Please enter a list of elements, separated by commas: Monday, Tuesday, Wednesday, Thursday, Friday
Please enter the delimiter you wish to use: , 
Monday,  Tuesday,  Wednesday,  Thursday,  Friday
```

Sample Test 4:

```python
Please enter a list of elements, separated by commas: 1, 2, 3, 4, 5
Please enter the delimiter you wish to use:  * 
1 *  2 *  3 *  4 *  5
```

```python
user_string = input("Please enter a list of element, separated by commas: ").split(',')
user_delimiter = input("Please enter the delimiter you wish to use: ")
final_string = user_delimiter.join(user_string)
print(f"The final string you assigned is: {final_string}")

#Please enter a list of element, separated by commas: Kim,Amy,Cindy
Please enter the delimiter you wish to use: ^_^
The final string you assigned is: Kim^_^Amy^_^Cindy
```

Join 用特定间隔使字符串分隔





## Question 05: List Symmetry Check

Check if a list is symmetric (the same forwards and backwards).

Sample Test 1:

```python
Enter a list of items separated by commas: 1, 2, 3, 2, 3
Is the entered list symmetric: False
```

Sample Test 2:

```python
Enter a list of items separated by commas: 1,2, 3, 2, 1
Is the entered list symmetric: True
```

::: code-tabs

@tab solution with for-loop

```python
user_message = input("Please enter a list of element, separated by commas: ")
lst_number = user_message.split(",")
print(lst_number)
for i in range(len(lst_number)-1):
    if int(lst_number[i]) == int(lst_number[len(lst_number)-1-i]):
        print("True")
    else:
        print("False")
        break
```

@tab only using list

```python
list_numbers = (input("Please in put a series of numbers: ")).split(',')
symmetry = list_numbers == list_numbers[::-1]
print(f"If the list is symmetry: {symmetry}")
```







## Question 06: List Element Swapping

Write a program to swap two elements in a list.

Receive user input, where the user inputs a series of numbers. The last two numbers are the indices to be swapped.

Sample Test 1:

```python
Enter list elements followed by two positions to swap, all separated by space: 1, 2, 3, 4, 5, 1, 3
List after swapping elements: ['1', '4', '3', '2', '5']
```

Sample Test 2:

```python
Enter list elements followed by two positions to swap, all separated by space: a,b, c, d, e , 0, 3
List after swapping elements: ['d', 'b', 'c', 'a', 'e']
```

------

```python
user_number = input("Please enter a list of elements followed by two positions to swap: ")
lst1 = user_number.split(",")
print(lst1)
position_1 = int(lst1[-1])
position_2 = int(lst1[-2])
lst1[position_1],lst1[position_2] = lst1[position_2],lst1[position_1]
print(lst1)
```

