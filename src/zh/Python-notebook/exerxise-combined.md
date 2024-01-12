---

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



------

## Question 03: Shallow Copy Verification

Demonstrate shallow copying of a list and show how it differs from a deep copy.

浅拷贝：复制一个列表（但不会创建一个新的，也就是说id是和所复制的列表完全相同的）

所存在的问题时，当一个列表中嵌套了另一个列表，就无法实现复制。



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
```





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

