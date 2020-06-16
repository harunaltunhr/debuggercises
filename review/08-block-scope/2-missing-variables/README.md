# Debuggercises 

## /exercises/08-block-scope/2-missing-variables 

> 6/16/2020, 5:23:14 PM 

[../README.md](../README.md)

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
- [/3.js](#3js) - _incomplete_ 

---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/2-missing-variables/1.js:9:16)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:116:1) 
```

```js
'use strict';

const a = 3;
let b = 3;
{
  const a = 5;
  b = a;
}
console.assert(_ === 5, 'Test 1');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/2-missing-variables/2.js:10:16)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:116:1) 
```

```js
'use strict';

let x = 'hi!';
let y = 'hi!';
{
  x = 'hi!';
  let y = 'bye!';
}
x = 'bye!';
console.assert(_ === 'hi!', 'Test 1');
console.assert(_ === 'bye!', 'Test 2');

```

[TOP](#debuggercises)

---

## /3.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/3.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/2-missing-variables/3.js:9:16)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:116:1) 
```

```js
'use strict';

let m = 0;
{
  let l = 10;
  const m = 1;
  l = 0;
}
console.assert(_ === 0, 'Test 1');

```

[TOP](#debuggercises)

