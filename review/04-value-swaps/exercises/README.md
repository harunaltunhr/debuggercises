# Debuggercises 

> 6/26/2020, 9:21:50 PM 

## [exercises](../../README.md)/[04-value-swaps](../README.md)/exercises 

- [/1-double-swap.js](#1-double-swapjs) - _pass_ 
- [/2-triple-swap.js](#2-triple-swapjs) - _pass_ 
- [/3-triple-swap.js](#3-triple-swapjs) - _pass_ 
- [/4-quadruple-swap.js](#4-quadruple-swapjs) - _pass_ 
- [/5-quadruple-swap.js](#5-quadruple-swapjs) - _pass_ 
- [/6-let-and-const.js](#6-let-and-constjs) - _pass_ 
- [/7-let-and-const.js](#7-let-and-constjs) - _pass_ 
---

## /1-double-swap.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/1-double-swap.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
'use strict';

let a = 'y';
let b = 'x';
let temp = null;

// write some code, be sure to use temp!
temp = a ;
a = b ;
b = temp ;
temp= null ;
// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === null;
console.assert(isTrue3, 'Test 3');


```

[TOP](#debuggercises)

---

## /2-triple-swap.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/2-triple-swap.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

let a = 'z';
let b = 'x';
let c = 'y';
let temp = null;

// write some code, be sure to use temp!
temp = a ;
a = b ;
b = c ;
c = temp ;
temp = null ;

// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'z';
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === null;
console.assert(isTrue4, 'Test 4');


```

[TOP](#debuggercises)

---

## /3-triple-swap.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/3-triple-swap.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

let a = 'y';
let b = 'z';
let c = 'x';
let temp = null;

// write some code, be sure to use temp!
temp = a;
a = c ;
c = b ;
b = temp ;
temp = null ;



// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'z';
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === null;
console.assert(isTrue4, 'Test 4');


```

[TOP](#debuggercises)

---

## /4-quadruple-swap.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/4-quadruple-swap.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
```

```js
'use strict';

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp = null;

// write some code, be sure to use temp!
temp = a;
a = c;
c = temp;
temp = b ;
b = d ;
d = temp;



// fill in the _ to pass the final assertions

const isTrue1 = a === 'w';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'x';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'y';
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 'z';
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 'z';
console.assert(isTrue5, 'Test 5');


```

[TOP](#debuggercises)

---

## /5-quadruple-swap.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/5-quadruple-swap.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
```

```js
'use strict';

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp = null;

// write some code, be sure to use temp!
temp = a ;
a = b ;
b = d ;
d = c ;
c = temp ;


// fill in the final _ to pass the assertions

const isTrue1 = a === 'w';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'x';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'y';
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 'z';
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 'y';
console.assert(isTrue5, 'Test 5');


```

[TOP](#debuggercises)

---

## /6-let-and-const.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/6-let-and-const.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
'use strict';

// write code to pass asserts a and b
// fill in the blanks for c and temp

// leave this code as it is
let a = 'y';
let b = 'x';
let temp = null;

temp = a;
const c = temp;

// write some code, be sure to use temp!
a = b;
b = c;


// replace the _ with a value to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, "Test 1");

const isTrue2 = b === 'y';
console.assert(isTrue2, "Test 2");

const isTrue3 = c === 'y';
console.assert(isTrue3, "Test 3");

const isTrue4 = temp === 'y';
console.assert(isTrue4, "Test 4");


```

[TOP](#debuggercises)

---

## /7-let-and-const.js 

> pass 
>
> [review source](../../../exercises/04-value-swaps/exercises/7-let-and-const.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
```

```js
'use strict';

// write code to pass asserts a, b, c
// fill in the blanks for d and temp

// leave this code as it is
let a = 'y';
let b = 'z';
let c = 'x';
let temp = null;

temp = a;
a = b;
const d = a;

// write some code, be sure to use temp!
a = c ;
b = temp ;
c = d ;



// fill in in the _'s to pass the final assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'z';
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 'z';
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 'y';
console.assert(isTrue5, 'Test 5');


```

[TOP](#debuggercises)

