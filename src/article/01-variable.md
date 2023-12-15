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

Sure, here's the translated markdown:

---

## 1. Understanding Variables - Examples from Daily Life

### 1.1 What is a Variable

- **Vari**: Change
- **Able**: Capacity

### 1.2 An Example

Let's say you're the class monitor and you need to compile the monthly test scores of each student in the class. Each month's score will be recorded on a paper, listing each student's score, for instance:

1. Li Lei: 98 points
2. Ma Dongmei: 89 points
3. Liu Yitong: 96 points
4. ...

One day, the teacher wants to see Liu Yitong's scores for January, February, and March. As the class monitor, what do you do? Clearly, directly handing over each month's test score isn't appropriate.

We should copy Liu Yitong's January, February, and March scores onto a separate sheet of paper and then give it to the teacher.

So, why didn't we assign an envelope for each student from the beginning? (It could also be a file bag.) Initially, the envelope is flat. When we put things (data) in it, does it swell? Did it change? Did it gain size? Clearly, yes.

So, the envelope, did it allocate space in the current space we're in to store data and say, "This is an envelope."

Similarities: The refrigerator also allocates space in the current space we're in.

---- Variables allocate space in the computer's memory
---- Variables can be overwritten

## 2. Creating Variables - Assignment Statements

1. Using a variable name to represent or reference a value

- Nuwa made mud figures, the figures had no life. Nuwa waved a willow branch, giving life to the mud figures. At this moment, the mud figure can represent Nuwa's descendants. "Variable: Mud figure, Value: Nuwa"
- The National People's Congress, the delegates of the NPC, are elected by the vast masses of the people. Their rights are not acquired by themselves, so they can say: "I represent the will of the vast masses of the people." "Variable: NPC delegate, Value: Masses"

2. Initializing assignment statement: Variable Name = Expression

- Variable Name: What we call this space
- Expression: Similar to a mathematical expression

Logic of the program: From top to bottom, from right to left, finally assigning a value.

```python
name1 = 'WRYH'
name2 = name1
print(name2)
# Variable passing

name1 = "look"
name1 = "WRYH"
print(name1)
# Variable overwrite
```

```python
x = 1 # 1 assigned to x
x = x + 10 # x represents 1, so x + 10 == 1 + 10, after getting 11, it's assigned to variable x 
print(x) # Print output
# The hashtag is for comments, annotations, for easy understanding of the code and future maintenance.
```

## 3. Exploring print

---

### 3.1 Outputting Multiple Data Simultaneously

```python
a = 1
b = 1
c = 1
print(a, b, c)

# Output: 1 1 1
```

From the output, it's evident that `print` outputs multiple variables simultaneously, with each value defaulting to a space between them.
So, can we modify this default space? Obviously, yes.
Using `sep`.

### 3.2 Modifying the Separator for Multiple Simultaneous Outputs

```python
a = 1
b = 1
c = 1
print(a, b, c, sep=".hhhhhh.")
```

### 3.3 Modifying the Print Output Ending

```python
a = 1
b = 1
c = 1
print(a)
print(b)
print(c)

# Output:
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
# Output:
# 1
#
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

### 3.4 Using `end` and `sep` Simultaneously

```python
a = 1
b = 1
c = 1
print(a, b, c, sep = "~", end = " Hello")

# Output: 1~1~1 Hello
```



## 4. Advanced Assignment Methods

### 4.1 Assigning the Same Value to Multiple Variables Simultaneously

```python
a = b = c = 1
print (a, b, c,) # Assigning the same value to multiple variables simultaneously
```

### 4.2 Assigning Different Values to Multiple Variables Simultaneously

```
a, b, c = 1, 2, 3
print(a, b, c)
```



## Practice

If you have two kids, an older brother named Austin and a younger brother named Jaden.

Austin wants **juice**, Jaden wants **cola**. **Both brothers have their exclusive cups and don't like using each other's cups.**

At home, there's only one cup of juice and one cup of cola. You accidentally pour cola into the older brother's cup and juice into the younger brother's cup.

**Question: How do you exchange the juice between the cups of the older and younger brothers?**

```python
Austin = "Coke"  # This assignment can be understood as pouring juice
Jaden = "juice"  # This assignment can be understood as pouring juice
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
Austin = "Coke"  # This assignment can be understood as pouring juice
Jaden = "juice"  # This assignment can be understood as pouring juice
print("Austin", Austin)
print("Jaden", Jaden)
Austin1 = Austin
Austin = Jaden
Jaden = Austin1
print("Austin", Austin)
print("Jaden", Jaden)
```

``` python
Austin = "Coke"  # This assignment can be understood as pouring juice
Jaden = "juice"  # This assignment can be understood as pouring juice
print("Austin", Austin)
print("Jaden", Jaden)
Austin, Jaden = Jaden, Austin
print("Austin", Austin)
print("Jaden", Jaden)
```



## 5. Naming Rules for Variables

- Combination of uppercase, lowercase, English, numbers, and __, and cannot start with a number;

    ``` python
    a1b2c3 = 1
    # Cannot start with a number
    ```

    

- System keywords cannot be used as variable names;

    ``` python
    as = 1
    #

 Cannot be printed
    As = 1
    aS = 1
    a_s = 1
    ```

    Get the keyword list: `help('keywords')`
    
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


​    

- Variables are case-sensitive in Python

    ```python
    n = 1
    N = 2
    print (n)
    
    # 1
    ```

    

- Variable names cannot contain spaces, but can use underscores

    ```python
    user_name = "hello"
    username = "hi"
    ```

    

- Avoid using Python's built-in function names as variable names

    ``` python
    print = "123"
    print(print)
    # Cannot be printed
    ```

    

## 6. Exercise

    1. In Python, variable names can start with a number.
    
        - [ ] True
        - [x] False
    
    2. Which of the following variable names is valid in Python?
    
        - [ ] 2myVar
        - [x] myVar2
        - [ ] my-var
        - [ ] my var
    
    3. Variable names in Python are case-sensitive.
    
        - [x] True
        - [ ] False
    
    4. In Python, `my_var` and `myVar` refer to the same variable.
    
        - [ ] True
        - [x] False
    
    5. Variable names can be Python keywords.
    
        - [ ] True
        - [x] False
    
    6. `None` is a special type in Python, representing no value or an empty value.
    
        - [x] True
        - [ ] False
    
    7. Which of the following is a valid variable assignment in Python?
    
        - [x] 123abc = "hello"
        - [ ] for = "world"
        - [ ] _hidden = "secret"
        - [ ] import = 123
    
    8. A variable in Python can be assigned multiple values simultaneously.
    
        - [ ] True
        - [x] False
    
    9. Which of the following is a multi-variable assignment in Python?
    
        - [x] a, b, c = 1, 2, 3
        - [ ] a = 1, b = 2, c = 3
        - [ ] a; b; c = 1; 2; 3
        - [ ] a = 1; b = 2; c = 3;
    
    10. Variables must be assigned a value before using them.
    
        - [x] True
        - [ ] False
    
    11. The type of variables in Python is static; once assigned, it cannot be changed.
    
        - [ ] True
        - [x] False
    
    12. In Python, which represents a global variable?
    
        - [x] var = "hello"
        - [ ] global var
        - [ ] var(global)
        - [ ] def var():
    
    13. Which represents deleting a variable?
    
        - [ ] delete x
        - [x] del x
        - [ ] remove x
        - [ ] destroy x
    
            ```python
            my_variable = "Hello, World!"
            print(my_variable)
            
            # Delete the variable
            del my_variable
            
            # Attempting to access a deleted variable will raise a NameError
            # print(my_variable)
            
            ```


​            

    14. `x = 5`, then `y = x`, if you change the value of `y`, the value of `x` will also change.
    
        - [ ] True
        - [x] False
    
    15. `x = [1, 2, 3]`, then `y = x`, if you change the list content of `y`, the content of `x` will also change.❌
    
        - [x] True
        - [ ] False
    
    16. In Python, variables can only store basic data types, such as integers or strings.
    
        - [ ] True
        - [x] False


​    