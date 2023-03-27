// q1
// function fib (num){
    
//     if (num<2) {
//         return num;
//     }
//     else {
//         return fib(num-1) + fib(num-2);
// }

// }
// console.log(fib(9));



// q2
// failed attempt
// let i = "ABCD";
// function reverse(i) {
//     return i ? reverse(i.substr(1)) + i[0] : i;
// }
// console.log(reverse(i));


// drobii 

// let arr = [1, 2, 3, 4, 5, 10]
// let sum = 0
// let i = 0
// function sumArr(arr) {

//     if (i >= arr.length) {
//         return;
//     }
//     sum += arr[i++]
//     sumArr(arr)
//     return sum
// }
// console.log(sumArr(arr));

// ----------------------------------- by use for ------------------

// let str = "hi"
// let news = ""
// function revers(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         news += `${str[i]}`
//     }
//     console.log(news);
// }
// ------------------//










// q3

// let str = "ABCD"
// let news = ""
// let i2 = str.length - 1
// function revers(str) {
//     if (i2 < 0) {
//         return 1
//     }
//     news += `${str[i2--]}`
//     revers(str)
//     return news
// }

// console.log(revers(str)); 