function fibs(n) {
    let fibsArr = [0, 1];
    for (let i = 2; i < n; i++) {
        fibsArr[i] = fibsArr[i-1] + fibsArr[i-2];
    }
    return fibsArr;
}

console.log(fibs(8));

// function fibs(n) {
//     if (n == 1) {
//         return 
//     }
// }