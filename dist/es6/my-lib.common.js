/**
 * myLib v2.0.0
 * Author: Felix Rilling
 * Homepage: https://github.com/FelixRilling/eslib-stack#readme
 * License: MIT
 */

'use strict';

function foo (foo) {
    return foo.repeat(3);
}

function bar (msg) {
    return console.log(msg);
}

const myString = "fooBar";

const myLib = {
    myString,
    foo,
    bar
};

module.exports = myLib;