# Debuggercises 

> 6/22/2020, 4:09:19 PM 

## [exercises](../../README.md)/[12-functions-301](../README.md)/2-fix-the-bugs 

- [/1.js](#1js) - _error_ 
- [/2.js](#2js) - _error_ 
- [/3.js](#3js) - _error_ 
---

## /1.js 

> error 
>
> [review source](../../../exercises/12-functions-301/2-fix-the-bugs/1.js)

```txt
UNCAUGHT: AssertionError [ERR_ASSERTION]: Test 1
    at Console.assert (console.js:194:23)
    at Console.assert (  ...  /scripts/lib/console-catcher.js:13:21)
    at Object.<anonymous> (  ...  /exercises/12-functions-301/2-fix-the-bugs/1.js:33:9)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18) 
```

```js
'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * tells you if two numbers are the same or not
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */
const areNotSameLength = (num1, num2) => {
  if (typeof num1 !== 'number') { throw new TypeError('num1'); }
  if (typeof num2 !== 'number') { throw new TypeError('num2'); }

  const result = 'the same';
  if (num1 = num2) {
    result === `are {result}`;
  } else {
    result === "aren't ${result}";
  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'are the same';
const _1_actual = areNotSameLength(+0, -0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'are the same';
const _2_actual = areNotSameLength(1e3, 1000);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'are the same';
const _3_actual = areNotSameLength(12.0, 12);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = "aren't the same";
const _4_actual = areNotSameLength(Infinity, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = "aren't the same";
const _5_actual = areNotSameLength(12, 12.1);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = "aren't the same";
const _6_actual = areNotSameLength(1000, 1e4);
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /2.js 

> error 
>
> [review source](../../../exercises/12-functions-301/2-fix-the-bugs/2.js)

```txt
UNCAUGHT: TypeError: Cannot create property 'Length' on string 'carboat'
    at areNotSameLength (  ...  /exercises/12-functions-301/2-fix-the-bugs/2.js:18:19)
    at Object.<anonymous> (  ...  /exercises/12-functions-301/2-fix-the-bugs/2.js:32:19)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7) 
```

```js
'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns false if the arguments are the same length
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
const areNotSameLength = (str1, str2) => {
  if (typeof str1 !== 'string') { throw new TypeError('str1'); }
  if (typeof str2 !== 'string') { throw new TypeError('str2'); }

  let result;
  if (str1.Length = str2.Length) {
    result = result + true;
  } else {
    result = result + false;
  }

  if (typeof result !== 'boolean') { throw new TypeError('result'); }
  return result;
};


// all of the tests are correct, there are not bugs below here!

const _1_expect = true;
const _1_actual = areNotSameLength('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = areNotSameLength('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = areNotSameLength('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = areNotSameLength('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = areNotSameLength('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = areNotSameLength('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

---

## /3.js 

> error 
>
> [review source](../../../exercises/12-functions-301/2-fix-the-bugs/3.js)

```txt
UNCAUGHT: AssertionError [ERR_ASSERTION]: Test 1
    at Console.assert (console.js:194:23)
    at Console.assert (  ...  /scripts/lib/console-catcher.js:13:21)
    at Object.<anonymous> (  ...  /exercises/12-functions-301/2-fix-the-bugs/3.js:36:9)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18) 
```

```js
'use strict';

// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns the longer of two strings.
 * if both are of equal length it combines the strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
const longestOrBoth = (str1, str2) => {
  if (typeof str1 !== 'string') { throw new TypeError('str1'); }
  if (typeof str2 !== 'string') { throw new TypeError('str2'); }

  let result = '';
  if (str1 >= str2) {
    result === str1;
  } if (str1 <= str2) {
    result === str2;
  } else {
    result === `${str1}${str2}`;
  }

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'car boat';
const _1_actual = longestOrBoth('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'waterfall';
const _2_actual = longestOrBoth('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'water fall';
const _3_actual = longestOrBoth('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'birch';
const _4_actual = longestOrBoth('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'aspenbirch';
const _5_actual = longestOrBoth('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'hi!bye';
const _6_actual = longestOrBoth('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#debuggercises)

