# Debuggercises 

> 6/21/2020, 9:05:10 AM 

## [exercises](../../README.md)/[04-value-swaps](../README.md)/example-swap-in-steps 

- [/0-setup.js](#0-setupjs) - _fail_ 
- [/1-store-y.js](#1-store-yjs) - _fail_ 
- [/2-reassign-a.js](#2-reassign-ajs) - _fail_ 
- [/3-use-stored-y.js](#3-use-stored-yjs) - _pass_ 
---

## /0-setup.js 

> error 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/0-setup.js)

```txt
UNCAUGHT: AssertionError [ERR_ASSERTION]: Test 1
    at Console.assert (console.js:194:23)
    at Console.assert (  ...  /scripts/lib/console-catcher.js:13:21)
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/example-swap-in-steps/0-setup.js:14:9)
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

// this file shows the initial swap exercise
//  before you have written any code

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /1-store-y.js 

> error 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/1-store-y.js)

```txt
UNCAUGHT: AssertionError [ERR_ASSERTION]: Test 1
    at Console.assert (console.js:194:23)
    at Console.assert (  ...  /scripts/lib/console-catcher.js:13:21)
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/example-swap-in-steps/1-store-y.js:15:9)
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

// this file shows the first line of code to write

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /2-reassign-a.js 

> error 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/2-reassign-a.js)

```txt
+ PASS: Test 1
UNCAUGHT: AssertionError [ERR_ASSERTION]: Test 2
    at Console.assert (console.js:194:23)
    at Console.assert (  ...  /scripts/lib/console-catcher.js:13:21)
    at Object.<anonymous> (  ...  /exercises/04-value-swaps/example-swap-in-steps/2-reassign-a.js:19:9)
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

// this file shows the second line of code to write

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

---

## /3-use-stored-y.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/example-swap-in-steps/3-use-stored-y.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

// this file shows the final line of code, with all tests passing

// declare & assign variables
let a = "y";
let b = "x";
let temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;
b = temp;


// assert expected values

const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");

```

[TOP](#debuggercises)

