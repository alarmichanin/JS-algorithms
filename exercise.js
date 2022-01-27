/*
[1,2,3,4,5,6,7,8]
sum = 9
*/

const answer = (arr, sum) => {
    let ans = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                ans.push({ [i]: j });
            }
        }
    }
    return ans;
}
const timer = (callback) => {
    console.time();
    callback;
    console.timeEnd();
}
timer(console.log(answer([1, 2, 3, 4, 5, 6, 7, 8], 9)));
timer(console.log(answer([4, 3, 1, 2, 8, 5, 6, 7], 9)));



/*

Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with 
the same value next to each other and preserving the original order of elements.

str only!

var uniqueInOrder = function (iterable) {
    let res = []
    for (let i = 0, j = 1; i < iterable.length; i++, j++) {
        while (iterable[i] === iterable[j]) {
            j++;
        }
        res.push(iterable.substr(i, j - i))
        i = j - 1;
    }
    return res.map(e => e[0]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));



very next -> universal case
*/


var uniqueInOrder = function (iterable) {
    let res = []
    for (let i = 0, j = 1; i < iterable.length; i++, j++) {
        res.push(iterable[i])
        while (iterable[i] === iterable[j]) {
            j++;
        }

        i = j - 1;
    }
    return res;
}




/*
Write a function that takes an integer as input, 
and returns the number of bits that are equal to one 
in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, 
so the function should return 5 in this case
*/


var countBits = function (n) {
    let count = 0;
    n.toString(2).split("").map(num => { if (num == 1) count++ });
    return count;
};


/*
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str) {
    let res = str.split(/[\-\_]/).map((word, index) => {
        if (index !== 0) {
            word = word[0].toUpperCase() + word.slice(1);
        }
        return word;
    })
    return res.join("");
}
*/

function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}