---
title: 03 Newmeric Type
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

## 1. Characteristics of Numeric Types

![image-20231216151331535](./03-Numeric-type.assets/image-20231216151331535.png)

```python
In [3]: 1 + 1
Out[3]: 2

In [4]: 1 + 1.0
Out[4]: 2.0

In [5]: 2 -1
Out[5]: 1

In [6]: 2 - 1.0
Out[6]: 1.0

In [7]: 2 * 2
Out[7]: 4

In [8]: 2* 2.0
Out[8]: 4.0

In [9]: 9/3
Out[9]: 3.0

# The result is a float if one of the elements is a float, with the highest precedence.

# Division involves precision issues, resulting in a float.
```

## 2. Arithmetic Operators

**Arithmetic Operators:** Used for arithmetic calculations.

| Operator | Description                                                  | Example       |
| -------- | ------------------------------------------------------------ | ------------- |
| `+`      | Addition Operator                                            | `1 + 1 = 2`   |
| `-`      | Subtraction Operator                                         | `2 - 1 = 1`   |
| `*`      | Multiplication Operator                                      | `2 * 3 = 6`   |
| `/`      | Division Operator                                            | `9 / 3 = 3.0` |
| `**`     | Exponentiation Operator                                      | `2 ** 3 = 8`  |
| `%`      | Modulus Operator, calculates remainder                       | `9 % 2 = 1`   |
| `//`     | Floor Division Operator, calculates quotient without remainder | `9 // 2 = 4`  |

> Tip: 9 / 2 = 4......1

## 3. Trying It Out: Number Transformation

Imagine you have a two-digit integer, and we need to generate two new numbers based on the following rules:
- The first new number is the sum of the individual digits of the original number.
- The second new number is the reverse of the original number (e.g., for 21, the reversed number is 12).

Write Python code to fulfill these requirements.

**Input:**

An integer `num` (10 ≤ num ≤ 99)

**Output:**

Two integers or an error message string.

**Example:**

Suppose the input number `num` is 91. Then your code should output two numbers: 10 (the sum of 9 and 1) and 19 (the reversal of 91).

Suppose the input number `num` is 26. Then your code should output two numbers: 8 (the sum of 2 and 6) and 62 (the reversal of 26).

Suppose the input number `num` is 18. Then your code should output two numbers: 9 (the sum of 1 and 8) and 81 (the reversal of 18).

```python
num = 91
print(num // 10 + num % 10)
print(10 * (num % 10) + num // 10)
#output
10
19
```

## 4. Comparison Operators: Comparing Values

| Operator | Description                                                  | Example         |
| -------- | ------------------------------------------------------------ | --------------- |
| `>`      | Checks if the first operand is greater than the second       | `print(1 > 2)`  |
| `<`      | Checks if the first operand is less than the second          | `print(1 < 2)`  |
| `>=`     | Checks if the first operand is greater than or equal to the second | `print(3 >= 3)` |
| `<=`     | Checks if the first operand is less than or equal to the second | `print(3 <= 4)` |
| `==`     | Checks if two operands are equal                             | `print(2 == 2)` |
| `!=`     | Checks if two operands are not equal                         | `print(2 != 1)` |

> Try the above examples and see the resulting outputs.

::: code-tabs

@tab Code Examples

```python
print(1 > 2)
print(1 < 2)
print(3 >= 3)
print(3 <= 4)
print(2 == 2)
print(2 != 1)
#output
False
True
True
True
True
True
```

:::

## 5. Assignment Operators

| Operator | Description                                                  | Example    |
| -------- | ------------------------------------------------------------ | ---------- |
| `=`      | Assigns the value on the right-hand side to the left-hand side | `a = 1`    |
| `+=`     | `a += b` is equivalent to `a = a + b`                        | `a += 10`  |
| `-=`     | `a -= b` is equivalent to `a = a - b`                        | `a -= 10`  |
| `*=`     | `a *= b` is equivalent to `a = a * b`                        | `a *= 10`  |
| `/=`     | `a /= b` is equivalent to `a = a / b`                        | `a /= 10`  |
| `**=`    | `a **= b` is equivalent to `a = a ** b`                      | `a **= 10` |
| `//=`    | `a //= b` is equivalent to `a = a // b`                      | `a //= 10` |

::: code-tabs

@tab Code Examples

```python
# Assignment Operators
a = 1
a += 10
print(a)#11
# Regular notation
a = 1
a = a + 10
print(a)#11
```

```python
a = 1
a += 10
a -= 10
a *= 10
a /= 10
a **= 10
a //= 10
print(a)
#output
0.0
```

## 7. Exercises

### 7.1 Multiple Choice

1. What type is the result of `3.5 + 4` in Python?

    A. Integer

    B. Float ✅

    C. String



    D. Boolean

2. Which operator is used for modulus?

    A. `+`

    B. `-`

    C. `*`

    D. `%` ✅

3. What is the result of `9 // 2` in Python?

    A. 4.5

    B. 4 ✅

    C. 5

    D. 4.0

4. What is the result of `1.0 == 1` in Python?

    A. True

    B. False ✅

    C. Error

    D. Indeterminate

5. What is the result of `2 + 3 * 4`?

    A. 20

    B. 14 ✅

    C. 24

    D. 12

6. What is the result of `10 / 3` in Python?

    A. 3

    B. 3.3333 ✅

    C. 4

    D. 3.3

7. What is the result of `7 // 2`?

    A. 3 ✅

    B. 3.5

    C. 4

    D. 2

8. Which operation in Python returns a float?

    A. `2 * 3`

    B. `4 + 2`

    C. `9 / 2` ✅

    D. `5 // 2`

9. What is the result of `4 ** 0.5`?

    A. 2 ✅

    B. 4

    C. 16

    D. 0.5

    E. 2.0

10. What is the result of `3 >= 3`?

    A. True ✅

    B. False

    C. Error

    D. Indeterminate

11. What is the result of `4 != 4`?

    A. True

    B. False ✅

    C. Error

    D. Indeterminate

12. What is the result of `5 + 2 * 3`?

    A. 21

    B. 11 ✅

    C. 14

    D. 7

13. What type is the result of `6 / 2`?

    A. Integer

    B. Float ✅

    C. String

    D. Boolean



### 7.2 Fill in the Blanks

1. The result of `2 ** 3` in Python is   <u>8</u>.
2. The expression `9 % 4` yields  <u>1</u> as the result.
3. If `a = 5`, then after executing `a *= 2`, the value of `a` is <u>10</u>.
4. In Python, `3 == 2.9999` results in <u>False</u>.
5. The result of `5 <= 5` is <u>True</u>.
6. If `b = 3`, after executing `b /= 2`, `b` equals <u>1.5</u>.
7. The result of `4 % 3` is  <u>1</u>.
8. If `c = 10`, after executing `c //= 3`, `c` equals <u>3</u>.
9. In Python, `7 == 7.0` results in  <u>False</u>.
10. The result of `8 / 2` is  <u>4.0</u>.

### 7.3 Programming Questions

::: tip Hint

Test your code. If there's no output or error, consider your answer correct. But ensure the code matches the requirements.

:::

#### 7.3.1 Sum and Difference of Numbers:

Write Python code that creates two numbers `a` and `b`, calculates and prints their sum and the result of `a` subtracted from `b`.

**Code Template**

```python
a = 10
b = 12
sum_result = a + b
difference = a - b
print("Sum: ", sum_result)
print("Difference: ", difference)
# Test
assert sum_result == a + b
assert difference == a - b
```

**Output Example:**

```python
Sum: 8
Difference: -2
```



#### 7.3.2 Multiplication and Division of Numbers

Write Python code that creates two numbers `x` and `y`, calculates and prints their product and the result of `x` divided by `y`.

**Code Template**

```python
x = 3
y = 4
print("Product: ", x * y)
print("Division: ", x / y)

# Test
assert product == x * y
assert division == x / y
```

**Output Example:**

```python
Product: 12
Division: 0.75
```



#### 7.3.3 Modulus and Exponentiation

Write Python code that creates two numbers `m` and `n`, calculates and prints `m` modulo `n` and `m` raised to the power of `n`.

**Code Template**

```python
m = 3
n = 4
print("Modulus: ", m % n)
print("Power: ", m ** n)

# Test
assert remainder == m % n
assert power == m ** n
```

**Output Example:**

```python
Modulus: 3
Power: 81
```



#### 7.3.4 Comparison Operation

Write Python code that takes two numbers `p` and `q` as input, compares them, and prints the respective comparison result (greater than, less than, equal to).

**Code Template**

```python
p = int(input("Please enter an integer: "))
q = int(input("Please enter the second integer: "))
if p > q:
    print(f"{p} is greater than {q}")
    assert p > q
elif p < q:
    print(f"{p} is less than {q}")
    assert p < q
else:
    print(f"{p} is equal to {q}")
    assert p == q

```

**Output Example:**