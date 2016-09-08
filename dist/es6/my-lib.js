var myLib = (function () {
'use strict';

const myString = "fooBar";

function console$1(msg) {
    return console.log(msg);
}

function foo3(foo) {
    return foo.repeat(3);
}

const myLib = {
    myString,
    console: console$1,
    foo3
};

return myLib;

}());