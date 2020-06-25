# Debuggercises 

> 6/25/2020, 11:44:33 PM 

## [exercises](../../README.md)/[18-functions-401](../README.md)/1-refactors 

- [/1-implicit-to-explicit.js](#1-implicit-to-explicitjs) - _error_ 
- [/2-implicit-to-explicit.js](#2-implicit-to-explicitjs) - _pass_ 
- [/3-explicit-to-implicit.js](#3-explicit-to-implicitjs) - _error_ 
- [/4-explicit-to-implicit.js](#4-explicit-to-implicitjs) - _error_ 
---

## /1-implicit-to-explicit.js 

> error 
>
> [review source](../../../exercises/18-functions-401/1-refactors/1-implicit-to-explicit.js)

```txt
UNCAUGHT: ReferenceError: result is not defined
    at mystery (  ...  /exercises/18-functions-401/1-refactors/1-implicit-to-explicit.js:13:10)
    at Object.<anonymous> (  ...  /exercises/18-functions-401/1-refactors/1-implicit-to-explicit.js:23:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const mystery = (a,b) => {if(Boolean(a) !== Boolean(b)){
  result = a && b;
} else if(b){
  result = (a && b);
} else{
  result = (!b && !a);
}
return result
}

const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_expect = 1;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_expect = 0;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 0;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_expect = true;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'hello!';
const _5_expect = null;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = 0;
const _6_expect = 0;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(_6_actual === _6_expect, 'Test 6');


```

[TOP](#debuggercises)

---

## /2-implicit-to-explicit.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/1-refactors/2-implicit-to-explicit.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const mystery = (a, b) => typeof a !== b
  || !b
  && (Number.isNaN(b) || isNaN(a));
const myster= (a,b) =>{
  if (typeof a !== b || !b){
    if(Number.isNaN(b)){
      result = true;
    }else if(isNaN(a)){
      result = true;
    }
    else{
      result = false;
    }

    return result ;
}
 }

const _1_arg1 = 1;
const _1_arg2 = 'number';
const _1_expect = false;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 'string';
const _2_expect = true;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = '14';
const _3_expect = true;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_expect = true;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'object';
const _5_expect = false;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = 0;
const _6_expect = true;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(_6_actual === _6_expect, 'Test 6');


```

[TOP](#debuggercises)

---

## /3-explicit-to-implicit.js 

> error 
>
> [review source](../../../exercises/18-functions-401/1-refactors/3-explicit-to-implicit.js)

```txt
UNCAUGHT: ReferenceError: result is not defined
    at mystery (  ...  /exercises/18-functions-401/1-refactors/3-explicit-to-implicit.js:14:14)
    at Object.<anonymous> (  ...  /exercises/18-functions-401/1-refactors/3-explicit-to-implicit.js:28:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */

const mystery = (a, b) => {
  if(Number(typeof a === typeof b)){
    if((a > b)){
      result = Number(a);
    } else{
      result = Number(b);
    }
  }
  else{
    result = Number(b);
  }
  return result;
}

const _1_arg1 = 'string';
const _1_arg2 = '14';
const _1_expect = NaN;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_arg1 = undefined;
const _2_arg2 = null;
const _2_expect = 0;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 1;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = '0';
const _4_expect = 0;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'hello!';
const _5_expect = NaN;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = NaN;
const _6_expect = NaN;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');


```

[TOP](#debuggercises)

---

## /4-explicit-to-implicit.js 

> error 
>
> [review source](../../../exercises/18-functions-401/1-refactors/4-explicit-to-implicit.js)

```txt
UNCAUGHT: ReferenceError: result is not defined
    at mystery (  ...  /exercises/18-functions-401/1-refactors/4-explicit-to-implicit.js:11:10)
    at Object.<anonymous> (  ...  /exercises/18-functions-401/1-refactors/4-explicit-to-implicit.js:23:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {string}
 */
const mystery = (a, b) => {if(String(a)){
  result = String(a);
}
  else{
   result = String(b);
  }
  return result;
}


const _1_arg1 = 'string';
const _1_arg2 = '14';
const _1_expect = 'string';
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_arg1 = undefined;
const _2_arg2 = null;
const _2_expect = 'undefined';
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = '0';
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_arg1 = '';
const _4_arg2 = '0';
const _4_expect = '0';
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_arg1 = '';
const _5_arg2 = 'hello!';
const _5_expect = 'hello!';
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = NaN;
const _6_expect = 'Infinity';
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');


```

[TOP](#debuggercises)

