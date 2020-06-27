# Debuggercises 

> 6/26/2020, 9:21:50 PM 

## [exercises](../../README.md)/[09-block-scope](../README.md)/4-declare-and-assign 

- [/1.js](#1js) - _error_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> error 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/1.js)

```txt
UNCAUGHT: ReferenceError: a is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/4-declare-and-assign/1.js:3:3)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
```

```js
'use strict';

 a= false;
console.assert(a === false, 'Test 1');
{
let a =null;
  console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/2.js)

```txt
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
```

```js
'use strict';

let x='hi!' ;
console.assert(x === 'hi!', 'Test 1: x');
{
  let y = x;
   x = 'bye!';

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/3.js)

```txt
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
```

```js
'use strict';

let m=1;
console.assert(m === 1, 'Test 1: m');
{
  m = 2;
  let l = 3;
  console.assert(m === 2, 'Test 2: m');
  console.assert(l === 3, 'Test 3: l');
}
m = 4;
console.assert(m === 4, 'Test 4: m');

```

[TOP](#debuggercises)

