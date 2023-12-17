---
title: 02 Introduction to data
date: 2023-12-12 7:56:43
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

Here's the translated markdown:

---

## Data Types

![image-20231214105801217](./02-introduction-to-data.assets/image-20231214105801217.png)

## 1. Numeric Types: `int`, `float`

### 1.1 Code Examples

1. Integer

```python
int_num = 1
t = type(int_num)
print(int_num)
print("int num type is: >>>", t)
print("Detecting data type directly and outputting", type(int_num))

#output
1
int num type is: >>> <class 'int'>
Detecting data type directly and outputting <class 'int'>
```

2. Float

```python
float_num = 1.1
t = type(float_num)
print(float_num)
print("float num type is: >>>", t)
print("Detecting data type directly and outputting", type(float_num))

#output
1.1
float num type is: >>> <class 'float'>
Detecting data type directly and outputting <class 'float'>
```



## 2. String: `str`

### 2.1 Code Examples

```python
string = "Vervevividness"
t = type(string)
print(string)
print("string type is: >>>", t)
print("Detecting data type directly and outputting", type(string))

#output
Vervevividness
string type is: >>> <class 'str'>
Detecting data type directly and outputting <class 'str'>
```

### 2.2 Three Characteristics of Strings

1. Order

    1. "Left to right, index starts from 0";
      
    2. "Right to left, index starts from -1"
      
    3. Anything within quotes counts as an index (even spaces);
   
2. Immutability
   
    1. Once created, strings cannot be changed;
      
    2. **Note⚠️**: Immutability refers to the inability to modify, add, or delete strings during code execution.
   
3. Any Characters:
   
    1. Any characters that can be entered via the keyboard can be elements of a string.
      
    2. Any character placed within a string becomes a string type ("Each element inside can be called a sub-character").



## 3. List

### 3.1 Code Examples

```python
lst = ["Vervevividness", 1, 0.1, ("happy", "sad", 31), [31, "bones"], True, False]
t = type(lst)
print(lst)
print("lst type is: >>>", t)
print("Detecting data type directly and outputting: >>>", type(lst))

#outcome
['Vervevividness', 1, 0.1, ('happy', 'sad', 31), [31, 'bones'], True, False]
lst type is: >>> <class 'list'>
Detecting data type directly and outputting: >>> <class 'list'>

```



### 3.2 Three Characteristics of Lists

1. Order

    1. "Left to right, index starts from 0";
      
    2. "Right to left, index starts from -1"
      
    3. Each element in the list counts as one;
      
        eg. `lst = ["Hello", 31]`;
      
        1. `Hello` is index 0 (left to right) and -2 (right to left);
        
        2. `31` is index 1 (left to right) and -1 (right to left);
   
2. Mutability: Lists can be "added to, deleted from, or modified" during program execution.
   
3. Any Data Type: Note⚠️, here "any data type" refers to the data types Python possesses;
   

::: details Data Types Python Possesses "Below includes only basic types"

![image-20231216151405069](./02-introduction-to-data.assets/image-20231216151405069.png)

:::

## 4. Tuple

### 4.1 Code Examples

```python
tup = (1, 2, 3, 4, "Hello", 1.1, [1, 2, 3, 4])
t = type(tup)
print(tup)
print("tup type is :>>>", t)
print("Detecting data type directly and outputting:>>>", type(tup))

#output
(1, 2, 3, 4, 'Hello', 1.1, [1, 2, 3, 4])
tup type is :>>> <class 'tuple'>
Detecting data type directly and outputting:>>> <class 'tuple'>
```

1. Order

    1. "Left to right, index starts from 0";
      
    2. "Right to left, index starts from -1"
      
    3. Each element in the tuple counts as one;
      
        eg. `lst = ["Hello", 31]`; has two elements
      
        1. `Hello` is index 0 (left to right) and -2 (right to left);
        
        2. `31` is index 1 (left to right) and -1 (right to left);
   
2. Immutability
   
    1. Once created, tuples cannot be changed;
      
    2. Note⚠️: Immutability refers to the inability to modify, add, or delete tuples during code execution;
   
3. Any Data Type: Note⚠️, here "data type" refers to the data types Python possesses.



## 5. Exploration👀 of Lists & Tuples

::: info Why🧐 Lists and Tuples?

Which one should we use, lists or tuples?

:::

1. If the data or quantity to be stored is changeable, like a log feature on a social platform that tracks which posts a user viewed within a week—lists would be more suitable.
2. If the data and quantity remain unchanged, like a system (software) that needs to return the latitude and longitude of a location directly to the user—definitely tuples are more suitable.

- **Assumptions**

    - Assumption 1: There's a warehouse where you want to add items. The warehouse is large, and there might or might not be space available. Would you need to hire a warehouse manager so you can ask if there's space available? The warehouse manager keeps track of the warehouse's status;
    - Assumption 2: Now, there's a warehouse for atomic bombs. Once created, it can only store one bomb. Do we need someone to track the status of the atomic bomb warehouse? No need, it'd be a waste of resources.

- **Why?**

    - User logs📔—will they keep changing (recording which posts were viewed)? We need someone like a warehouse manager to track and know if there's space and where to add. Lists are more suitable because they are mutable. "Mutable means: adding, deleting, or modifying";
        - Why not tuples? Every time you want to add data, you'd need to recreate a new tuple (similar to creating a warehouse for an atomic bomb, just enough for one

; when you want to store two, you need to create a new warehouse).
    - Will latitude and longitude change? Obviously not, so we don't need an extra person to track the status. Lists could work, but it's unnecessary. "Because we don't need a warehouse manager," tuples are just enough.
    - **<span style="color:orange">We emphasize: not wasting, just using what's suitable.</span>**

## 6. Dictionary: `dict`

### 6.1 Code Examples

```python
d = {"name": "Cindy", "age": 17, 1: "int", 1.1 : 1, "tup" : (1, 2, 3)}
t = type(d)
print(d)
print("d type is :>>>", t)
print("Detecting data type directly and outputting:>>>", type(d))

#output
{'name': 'Cindy', 'age': 17, 1: 'int', 1.1: 1, 'tup': (1, 2, 3)}
d type is :>>> <class 'dict'>
Detecting data type directly and outputting:>>> <class 'dict'>
```

### 6.2 Characteristics of Dictionary

1. Unordered
2. Composition: Comprised of a series of key-value pairs. `d = {"key1":"value1,"key2":"value2".....}`
3. Key:
    1. Only immutable data types can be dictionary keys;
    2. Examples: strings, numbers, booleans, tuples;
4. Value: Any data type Python possesses;
5. Mutability: Keys and values can be added, modified, or deleted.



## 7. Set

### 7.1 Code Examples

``` python
set1 = {1, 2, "Cindy", 1.2, "hello", (1, 2, 3), False}
t = type(set1)
print(set1)
print("set1 type is :>>>", type(set1))
print("Detecting data type directly and outputting:>>>", t)

#output
{False, 1, 2, 1.2, 'hello', (1, 2, 3), 'Cindy'}
set1 type is :>>> <class 'set'>
Detecting data type directly and outputting:>>> <class 'set'>
```

### 7.2 Characteristics of Set

1. Unordered: Sets have no order, no index;
   
    ``` python
    set1 = {1, 2, "Cindy", 1.2, "hello", (1, 2, 3), False}
    print(set1)
    
    #output
    {False, 1, 2, 1.2, 'hello', (1, 2, 3), 'Cindy'}
    
    ```

    

  ::: warning

  Even if you run sets multiple times or once, if the order doesn't change, we cannot claim sets are ordered.

  Why? If you roll a die 500 times and get a 6 every time, can you say rolling a die is a deterministic event? Clearly not 🙅.

  :::  

2. Deterministic:

    1. Each value in a set is definite; "this requires immutable data types"
    2. Examples: numeric types, booleans, tuples, strings
    3. For example🌰: Lists are mutable, so not suitable🙅

         

::: code-tabs

@Immutable Test

``` python
set1 = {1, 2, "Cindy", 1.2, "hello", (1, 2, 3), False}
print(set1)

#output
{False, 1, 2, 1.2, 'hello', (1, 2, 3), 'Cindy'}
```

@tab Mutable Test

``` python
set1 = {1, 2, [1, 2, 3]}
print(set1)

#outut
Traceback (most recent call last):
  File "/Users/wangruoyihan/PycharmProjects/pythonProject/python 11.12.py", line 63, in <module>
    set1 = {1, 2, [1, 2, 3]}
           ^^^^^^^^^^^^^^^^^
TypeError: unhashable type: 'list'

```

:::

3. Uniqueness: Repeated items are automatically removed;
   
``` python
set1 = {1, 2, 1, 1, 2, 1}
print(set1)

#{1,2}
```

4. Mutability: Sets can have data added or removed, but output modification isn't possible. "Note⚠️: Deletion doesn't allow specifying an index to delete an element."



## 8. Boolean: `bool`

```python
condition = True
print(condition)
print(type(condition))

#output
True
<class 'bool'>
```



