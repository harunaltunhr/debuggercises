'use strict';

// a < b
// if both args are strings, compare the unicode characters
// otherwise convert both values to Number and compare as numbers

const lessThan = (left, right) => left < right;

const _1_a = '1';
const _1_b = 1;
const _1_expect = false;
const _1_native = lessThan(_1_a, _1_b);
console.assert(_1_expect === _1_native, 'Test 1');

const _2_a = -Infinity;
const _2_b = null;
const _2_expect = true;
const _2_native = lessThan(_2_a, _2_b);
console.assert(_2_expect === _2_native, 'Test 2');

const _3_a = true;
const _3_b = null;
const _3_expect = false;
const _3_native = lessThan(_3_a, _3_b);
console.assert(_3_expect === _3_native, 'Test 3');

const _4_a = '0.0';
const _4_b = false;
const _4_expect = false;
const _4_native = lessThan(_4_a, _4_b);
console.assert(_4_expect === _4_native, 'Test 4');

const _5_a = false;
const _5_b = true;
const _5_expect = true;
const _5_native = lessThan(_5_a, _5_b);
console.assert(_5_expect === _5_native, 'Test 5');

const _6_a = '13';
const _6_b = true;
const _6_expect = false;
const _6_native = lessThan(_6_a, _6_b);
console.assert(_6_expect === _6_native, 'Test 6');

const _7_a = 'aa';
const _7_b = 'ab';
const _7_expect = true;
const _7_native = lessThan(_7_a, _7_b);
console.assert(_7_expect === _7_native, 'Test 7');

const _8_a = 'aa';
const _8_b = 'aa';
const _8_expect = false;
const _8_native = lessThan(_8_a, _8_b);
console.assert(_8_expect === _8_native, 'Test 8');

const _9_a = 0;
const _9_b = '';
const _9_expect = false;
const _9_native = lessThan(_9_a, _9_b);
console.assert(_9_expect === _9_native, 'Test 9');
