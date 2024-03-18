function fibs(n) {
    let fibsArr = [0, 1];
    for (let i = 2; i < n; i++) {
        fibsArr[i] = fibsArr[i-1] + fibsArr[i-2];
    }
    return fibsArr;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n == 2) {
        return [0, 1];
    }
    let fibsArr = fibsRec(n-1)
    fibsArr.push(fibsArr[i-1] + fibsArr[i-2]);
    
    return fibsArr;
}

console.log(fibs(8));