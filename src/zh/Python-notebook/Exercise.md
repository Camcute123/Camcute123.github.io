---
title: Python Exercises
date: 2023-12-23 11:23:36
author: Cindy
isOriginal: true
category: 
    - python practice
tag:
    - practice
    - python
    - variables
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

## Question 01 Hello, You!

```python
user_input_1 = input("Please input your name: ")
user_input_2 = input("please enter your age: ")
print(f"{user_input_1}, {user_input_2}, is taking CS-UY 1114.")

#output
Please input your name: Cindy
please enter your age: 17
Cindy, 17, is taking CS-UY 1114.
```



## Question 02 Some Have Gone and Some Remain

```python
# Question02
user_message = input("Please enter a year greater than 2023: ")
number_of_seconds = (int(user_message) - 2023) * 365 * 24 * 3600
new_birth = number_of_seconds // 7
death = -number_of_seconds // 15
new_immigrant = number_of_seconds // 42
emigration = -number_of_seconds // ( 1.25 * 60 )
new_population = int(330109174 + new_birth + death + new_immigrant + emigration)
print(f"The population in year {user_message} will be {new_population}")

#output
Please enter a year greater than 2023: 2042
The population in year 2042 will be 382038453
```



## Question 03 Penny Pinching

```python
user_message = input("PLease enter the number of coins: ")
message_1 = input("Number of quarters: ")
message_2 = input("Number of dimes: ")
message_3 = input("Number of nickels: ")
message_4 = input("Number of pennies: ")
total_cents = int(message_1) * 25 + int(message_2) * 10 + int(message_3) * 5 + int(message_4)
dollars = total_cents // 100
remained_cents = total_cents - 100 * dollars
print(f"The total is {dollars} dollar(s) and {remained_cents} cent(s)")

#output
PLease enter the number of coins: 
Number of quarters: 10
Number of dimes: 2
Number of nickels: 6
Number of pennies: 2
The total is 3 dollar(s) and 2 cent(s)
```



## Question 04 Mad as a Hatter, Thin as a Dime

```python
user_message = input("Please enter tour amount of dollars nad cents, in teo separate lines")
dollars = input("")
cents = input("")
total_cents = (100 * int(dollars) + int(cents))
quarters = total_cents // 25
dimes = (total_cents - 25 * quarters) // 10
nickle = (total_cents - 25 * quarters - 10 * dimes) // 5
pennies = total_cents % 5
print(f"{dollars} dollars and {cents} cents are : {quarters} quarters, {dimes} dimes, {nickle} nickles and {pennies} pennies. ")

#output
Please enter tour amount of dollars nad cents, in teo separate lines
4
37
4 dollars and 37 cents are : 17 quarters, 1 dimes, 0 nickles and 2 pennies. 
```



## Question 05 BMI Calculator

### Part A

```python
user_message_1 = input("Please enter weight in kilograms: ")
user_message_2 = input("Please enter height in meters: ")
BMI = float(user_message_1) / float(user_message_2)**2
print(f"BMI is : {BMI:.3f}")

#output
Please enter weight in kilograms: 51
Please enter height in meters: 1.70
BMI is : 17.647

```

### Part B

```python
user_message_1 = input("Please enter weight in pounds: ")
user_message_2 = input("Please enter height in inches: ")
BMI = ( 0.453592 * float(user_message_1)) / (0.0254 * float(user_message_2)) ** 2
print(f"BMI is {BMI:.3f}")

#output
Please enter weight in pounds: 135
Please enter height in inches: 71
BMI is 18.828p
```









## Question 07 Collective Timetables

```python
a1 = int(input("Please enter the number of days Semi has worked: "))
a2 = int(input("Please enter the number of hours Semi has worked: "))
a3 = int(input("Please enter the number of minutes Semi has worked: "))
a4 = int(input("Please enter the number of days Ollie has worked: "))
a5 = int(input("Please enter the number of hours Ollie has worked: "))
a6 = int(input("Please enter the number of minutes Ollie has worked: "))
total_minutes = (a6 +a3) % 60
total_hours = (a2 + a5 + (a6 + a3) // 60) % 24
total_days = a1 +a4 + (a2 + a5 + (a6 + a3) // 60) //24
print(f"The total time both of them worked together is: {total_days} days, {total_hours} hours, {total_minutes} minutes.")

#output
Please enter the number of days Semi has worked: 2
Please enter the number of hours Semi has worked: 12
Please enter the number of minutes Semi has worked: 15
Please enter the number of days Ollie has worked: 3
Please enter the number of hours Ollie has worked: 15
Please enter the number of minutes Ollie has worked: 20
The total time both of them worked together is: 6 days, 3 hours, 35 minutes.
```



