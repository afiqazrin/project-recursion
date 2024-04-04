#!/usr/bin/node

function fibs(length) {
    let fibsArray = []
    let firstTerm = 0;
    let secondTerm = 1;
    let nextTerm;
    for (let i = 0; i < length; i++) {
        fibsArray.push(firstTerm)
        nextTerm = firstTerm+secondTerm
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
    return fibsArray
}

console.log(fibs(8));

function fibsRec(length) {
    if (length === 1) {
        return [0];
    } 
    else if (length === 2) {
        return [0,1];
    } 
    else {
        let fibsArray = fibsRec(length - 1);
        fibsArray.push(fibsArray[length - 2] + fibsArray[length - 3]); 
        return fibsArray;
    }
}

console.log(fibsRec(8));
