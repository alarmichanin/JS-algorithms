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