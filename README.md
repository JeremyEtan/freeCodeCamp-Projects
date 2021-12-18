## Note
This is my solution to freeCodeCamp's JavaScript Algorithms and Data Structures projects.

## Palindrome Checker
Returns true if the given string is a palindrome. Otherwise, returns false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: All non-alphanumeric characters (punctuation, spaces and symbols) will be removed and everything will be turned into the same case (lower or upper case) in order to check for palindromes.

Strings with varying formats, such as racecar, RaceCar, and race CAR among others will be passed.

Strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2 will also be passed.

## Roman Numeral Converter
Converts the given number into a roman numeral.

All [roman numerals](http://www.mathsisfun.com/roman-numerals.html) answers will be provided in upper-case.

## Ceasers Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

The function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Any non-alphabetic character (i.e. spaces, punctuation) won't be transformed, but they'll be passed on.

## Telephone Number Validator
Returns true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests for other variants):

> 555-555-5555

> (555)555-5555

> (555) 555-5555

> 555 555 5555

> 5555555555

> 1 555 555 5555

Strings such as 800-692-7753 or 8oo-six427676;laskdjf will be passed into the function. It will validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, it'll confirm that the country code is 1. Returns true if the string is a valid US phone number; otherwise returns false.

## Cash Register
The cash register drawer function `checkCashRegister()` accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function always returns an object with a `status` key and a `change` key.

Returns `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Returns `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, returns `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.
```
Currency Unit	       Amount
Penny	               $0.01 (PENNY)
Nickel	               $0.05 (NICKEL)
Dime	               $0.1 (DIME)
Quarter	               $0.25 (QUARTER)
Dollar	               $1 (ONE)
Five Dollars	       $5 (FIVE)
Ten Dollars	       $10 (TEN)
Twenty Dollars	       $20 (TWENTY)
One-hundred Dollars    $100 (ONE HUNDRED)
```
See below for an example of a cash-in-drawer array:
```
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```
