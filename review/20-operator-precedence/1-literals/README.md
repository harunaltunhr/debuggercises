# Debuggercises 

> 6/22/2020, 4:09:19 PM 

## [exercises](../../README.md)/[20-operator-precedence](../README.md)/1-literals 

- [/1-coercion-and-comparing.js](#1-coercion-and-comparingjs) - _incomplete_ 
- [/2-arithmetic.js](#2-arithmeticjs) - _incomplete_ 
- [/3-logical-operators.js](#3-logical-operatorsjs) - _incomplete_ 
- [/4-all-together.js](#4-all-togetherjs) - _pass_ 
---

## /1-coercion-and-comparing.js 

> incomplete 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/1-coercion-and-comparing.js)

```txt
+ PASS: Step 0
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/20-operator-precedence/1-literals/1-coercion-and-comparing.js:14:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = _;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = _;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = _;
console.assert(step3 === expected, 'Step 3');

```

[TOP](#debuggercises)

---

## /2-arithmetic.js 

> incomplete 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/2-arithmetic.js)

```txt
+ PASS: Step 0
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/20-operator-precedence/1-literals/2-arithmetic.js:14:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = NaN;

// the original expression
const step0 = -(null + '10') * 15;
console.assert(Object.is(step0, expected), 'Step 0');

/*

*/
const step1 = _;
console.assert(Object.is(step1, expected), 'Step 1');

/*

*/
const step2 = _;
console.assert(Object.is(step2, expected), 'Step 2');

/*

*/
const step3 = _;
console.assert(Object.is(step3, expected), 'Step 3');

```

[TOP](#debuggercises)

---

## /3-logical-operators.js 

> incomplete 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/3-logical-operators.js)

```txt
+ PASS: Step 0
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/20-operator-precedence/1-literals/3-logical-operators.js:14:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = !undefined && !'';
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = _;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = _;
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = _;
console.assert(step3 === expected, 'Step 3');

```

[TOP](#debuggercises)

---

## /4-all-together.js 

> pass 
>
> [review source](../../../exercises/20-operator-precedence/1-literals/4-all-together.js)

```txt
+ PASS: Step 0
```

```js
'use strict';

// write lots of comments!  explain your thinking at each step

const expected = false;

// the original expression
const step0 = 12 % '3' || !!NaN;
console.assert(step0 === expected, 'Step 0');

// how may steps are there?

```

[TOP](#debuggercises)

