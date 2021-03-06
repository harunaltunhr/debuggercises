# Debuggercises 

> 6/27/2020, 7:57:32 PM 

## [exercises](../README.md)/08-functions-201 

- [/0-example.js](#0-examplejs) - _pass_ 
- [/1-exercise.js](#1-exercisejs) - _pass_ 
- [/2-exercise.js](#2-exercisejs) - _pass_ 
---

## /0-example.js 

> pass 
>
> [review source](../../exercises/08-functions-201/0-example.js)

```txt
+ PASS: Test 1 Array
+ PASS: Test 1 Loop
+ PASS: Test 2 Array
+ PASS: Test 2 Loop
+ PASS: Test 3 Array
+ PASS: Test 3 Loop
```

```js
'use strict';

/* BEHAVIOR vs. IMPLEMENTATION:

  BEHAVIOR: this is what your function DOES
    - behavior does not care about what's inside your function body
    - all that matters to behavior is what goes in and what goes
    - the comments you learned to write in part 1 describe behavior only
    - testing is all about describing and verifying the behavior of your function

  IMPLEMENTATION: this is HOW your function does what it does
    - implementation is all about the lines of code in your function body
    - what language features did you use?
    - how does the data change step by step inside your function?
    - your comments comments should not mention the implementation
    - debugging is all about understanding and fixing the implementation of your code

  Two functions can have the same behavior (tests), and different implementation (source code)

  Check it out:
*/


const reverseStringArray = (str) => {
  return str.split('').reverse().join('');
};

const reverseStringLoop = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};


const _1_arg = 'abcde';
const _1_expect = 'edcba';
const _1_actualArray = reverseStringArray(_1_arg);
const _1_actualLoop = reverseStringLoop(_1_arg);
console.assert(_1_actualArray === _1_expect, 'Test 1 Array');
console.assert(_1_actualLoop === _1_expect, 'Test 1 Loop');

const _2_arg = 'racecar';
const _2_expect = 'racecar';
const _2_actualArray = reverseStringArray(_2_arg);
const _2_actualLoop = reverseStringLoop(_2_arg);
console.assert(_2_actualArray === _2_expect, 'Test 2 Array');
console.assert(_2_actualLoop === _2_expect, 'Test 2 Loop');

const _3_arg = '-<=>-';
const _3_expect = '->=<-';
const _3_actualArray = reverseStringArray(_3_arg);
const _3_actualLoop = reverseStringLoop(_3_arg);
console.assert(_3_actualArray === _3_expect, 'Test 3 Array');
console.assert(_3_actualLoop === _3_expect, 'Test 3 Loop');



```

[TOP](#debuggercises)

---

## /1-exercise.js 

> pass 
>
> [review source](../../exercises/08-functions-201/1-exercise.js)

```txt
+ PASS: Test 1 A
+ PASS: Test 2 A
+ PASS: Test 3 A
+ PASS: Test 4 A
+ PASS: Test 1 B
+ PASS: Test 2 B
+ PASS: Test 3 B
+ PASS: Test 4 B
```

```js
'use strict';

// write two different implementations with the same behavior
// you can pass these using only !, ||, and &&
/*  hint: demorgan
  https://erikmhsiao.github.io/de-morgans-laws/
  https://www.freecodecamp.org/news/a-definitive-guide-to-conditional-logic-in-javascript-23fa234d2ca3/
  https://www.cross-browser.com/talk/demorgan.html
*/

const withAnd = (x, y) => {
  return Number(!x && !y);
};


const withOr = (x, y) => {
  return Number (!(x||y));
};


const _1_arg1 = 0;
const _1_arg2 = 0;
const _1_expect = 1;

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_expect = 0;

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 0;

const _4_arg1 = 1;
const _4_arg2 = 1;
const _4_expect = 0;


// testing withAnd
const _1_actualA = withAnd(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');

const _2_actualA = withAnd(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');

const _3_actualA = withAnd(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');

const _4_actualA = withAnd(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');


// testing withOr
const _1_actualB = withOr(_1_arg1, _1_arg2);
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_actualB = withOr(_2_arg1, _2_arg2);
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_actualB = withOr(_3_arg1, _3_arg2);
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_actualB = withOr(_4_arg1, _4_arg2);
console.assert(_4_actualB === _4_expect, 'Test 4 B');

```

[TOP](#debuggercises)

---

## /2-exercise.js 

> pass 
>
> [review source](../../exercises/08-functions-201/2-exercise.js)

```txt
+ PASS: Test 1 A
+ PASS: Test 2 A
+ PASS: Test 3 A
+ PASS: Test 4 A
+ PASS: Test 1 B
+ PASS: Test 2 B
+ PASS: Test 3 B
+ PASS: Test 4 B
```

```js
'use strict';

// write two different implementations with the same behavior
// you can pass these using only !, && and ||
/*  hint: demorgan
  https://erikmhsiao.github.io/de-morgans-laws/
  https://www.freecodecamp.org/news/a-definitive-guide-to-conditional-logic-in-javascript-23fa234d2ca3/
  https://www.cross-browser.com/talk/demorgan.html
*/

const withAnd = (x, y) => {
  return Number (!(x&&y));
};

const withOr = (x, y) => {
  return Number (!x || !y);
};


const _1_arg1 = 0;
const _1_arg2 = 0;
const _1_expect = 1;

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_expect = 1;

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 1;

const _4_arg1 = 1;
const _4_arg2 = 1;
const _4_expect = 0;


// testing withAnd
const _1_actualA = withAnd(_1_arg1, _1_arg2);
console.assert(_1_actualA === _1_expect, 'Test 1 A');

const _2_actualA = withAnd(_2_arg1, _2_arg2);
console.assert(_2_actualA === _2_expect, 'Test 2 A');

const _3_actualA = withAnd(_3_arg1, _3_arg2);
console.assert(_3_actualA === _3_expect, 'Test 3 A');

const _4_actualA = withAnd(_4_arg1, _4_arg2);
console.assert(_4_actualA === _4_expect, 'Test 4 A');


// testing withOr
const _1_actualB = withOr(_1_arg1, _1_arg2);
console.assert(_1_actualB === _1_expect, 'Test 1 B');

const _2_actualB = withOr(_2_arg1, _2_arg2);
console.assert(_2_actualB === _2_expect, 'Test 2 B');

const _3_actualB = withOr(_3_arg1, _3_arg2);
console.assert(_3_actualB === _3_expect, 'Test 3 B');

const _4_actualB = withOr(_4_arg1, _4_arg2);
console.assert(_4_actualB === _4_expect, 'Test 4 B');

```

[TOP](#debuggercises)

