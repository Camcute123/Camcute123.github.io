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

## Question 01: Hello,You!

Write a program that asks for the user's name, their age and prints a personalized welcome message for them.

For example, an execution could look like this:

```python
Please enter your name: Aika
Please enter your age: 29
Aika, 29, is taking CS-UY 1114.
```

The format of your output need not look exactly the same as ours, but it must still ask the user for their name and age, and print them out as part of some sort of sentence.

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



## Question 02: Some Have Gone and Some Remain

The U.S. Census provides information on its [web page Census.gov](https://www.census.gov/) about the current U.S. population as well as approximate rates of change. Four rates of change are provided:

- There is a birth every 7 seconds.
- There is a death every 15 seconds.
- There is a new immigrant every 42 seconds.
- There is a new emigration (i.e. somebody moves out of the country) every 1.25 minutes.

These are, naturally, approximations of birth, death, and immigration rates, but they can assist in providing population estimates in the near term.

Write a program that takes a year as input (an integer—you may assume that this will value will always be greater than or equal to 2023) and prints out an estimated population (as an integer). Assume that the current population is 330,109,174, and assume that there are always exactly 365 days in a year.

Sample execution:

```text
Please enter a year greater than 2023:
2042
The population in year 2042 will be 382038453
```

The format of your output need not look exactly the same as ours, but it must still ask the user to enter an integer representing a year, and it must always output the estimated population of that year.

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



## Question 03: Penny Pinching

Write a program that asks the user to enter a number of quarters, dimes, nickels and pennies and then outputs the monetary value of the coins in the format of dollars and remaining cents.

Your program should interact with the user, and output its results, **exactly** as it is shown in the following example:

```text
Please enter number of coins:
Number of quarters: 13
Number of dimes: 4
Number of nickels: 11
Number of pennies: 17
The total is 4 dollar(s) and 37 cent(s)
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



## Question 04: Mad as a Hatter, Thin as a Dime

Write a program that asks the user to enter an amount of money in the format of dollars and remaining cents. The program should calculate and print the minimum number of coins (quarters, dimes, nickels and pennies) that are equivalent to the amount input by the user.

Your program should interact with the user, and display its results, **exactly** as it shows in the following example:

```text
Please enter your amount of dollars and cents, in two separate lines.
4
37
4 dollars and 37 cents are: 17 quarters, 1 dimes, 0 nickels and 2 pennies
```

**Hint**: In order to find the minimum number of coins, first find the maximum number of quarters that fit within the amount of money input by the user, then find the maximum number of dimes that fit in the remaining amount, and so on.

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



## Question 05: BMI Calculator

Body mass index (BMI) is a number calculated from a person’s weight and height. The BMI is a convenient rule of thumb used to broadly categorize the weight of a person based on tissue mass (muscle, body fat, and bone) and height (although it's really rather unreliable otherwise). The formula for BMI is the following:

::: tip BMI calculation formula 

BMI = weight / height - squared

:::

### PART A:

Write a program that prompts for metric weight and height and outputs the BMI. For example, an execution could look like this:

```text
Please enter weight in kilograms: 50
Please enter height in meters: 1.58
BMI is: 20.0288415
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

### PART B:

Write a program that prompts for weight in pounds and height in inches, converts the values to metric, and then calculates the BMI.

**Note**: 1 pound is equal to 0.453592 kilograms and 1 inch is equal to 0.0254 meters.

For example, an execution could look like this:

```text
Please enter weight in pounds: 135
Please enter height in inches: 71
BMI is: 18.82849431
```

Both part A and part B must be written in two separate py files.

### Part B

```python
user_message_1 = input("Please enter weight in pounds: ")
user_message_2 = input("Please enter height in inches: ")
BMI = ( 0.453592 * float(user_message_1)) / (0.0254 * float(user_message_2)) ** 2
print(f"BMI is {BMI:.3f}")

#output
Please enter weight in pounds: 135
Please enter height in inches: 71
BMI is 18.828
```



## Question 06: Don't Believe The Gacha

In certain video games, you can spend either in-game currency or real money to get a series of often-random items to "improve" your gameplay experience. These mechanics are commonly referred to as **[gacha](https://en.wikipedia.org/wiki/Gacha_game)**, or **[loot boxes](https://en.wikipedia.org/wiki/Loot_box)**, and are some of the most **[controversial](https://www.theverge.com/2019/2/19/18226852/loot-boxes-gaming-regulation-gambling-free-to-play)** topics in video game development.

Let's pretend that the chances of getting a rare item in a video game are from **0% to 100%**, and our video game has a player start at level 1 and end at level 5 . At level 1 , the player has an **100%** chance of getting a rare item. At level 2 the player has an **80%** chance of getting a rare item. At level 3 , **60%**. At level 4 , **40%**, and at level 5 , only **20%**.

Write a program that asks the user for their current level in the video game, determines whether they have received a rare item in a loot box, and lets them know in a message.

```text
What is your level? 1
Your loot box contains a rare item: True

What is your level? 2
Your loot box contains a rare item: False

What is your level? 3
Your loot box contains a rare item: True

What is your level? 4
Your loot box contains a rare item: False

What is your level? 5
Your loot box contains a rare item: False
```

**Note**: random

```python
random_num = random(1, 100)
```





## Question 07: Collective Timetables

Suppose Semi and Ollie worked for some time, and we want to calculate the total time both of them worked.

Write a program that reads a number of days, hours, and minutes minutes each of them worked,and prints the total time both of them worked together as days, hours, and minutes.

For example, an execution could look like this:

```text
Please enter the number of days Semi has worked: 2
Please enter the number of hours Semi has worked: 12
Please enter the number of minutes Semi has worked: 15
Please enter the number of days Ollie has worked: 3
Please enter the number of hours Ollie has worked: 15
Please enter the number of minutes Ollie has worked: 20
The total time both of them worked together is: 6 days, 3 hours and 35 minutes.
```

**Note**: There are 24 hours in a day and 60 minutes in an hour.

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



