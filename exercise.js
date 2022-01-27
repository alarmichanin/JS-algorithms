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