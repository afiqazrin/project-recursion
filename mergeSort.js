#!/usr/bin/node

function mergeSort(array) {
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2);
        const leftArray = array.slice(0, middle);
        const rightArray = array.slice(middle, array.length);
        const sortedLeft = mergeSort(leftArray)
        const sortedRight = mergeSort(rightArray)
        return merge(sortedLeft, sortedRight)
    }
    else {
        return array
    }

}

function merge(leftArray, rightArray) {
    let m = leftArray.length;
    let n = rightArray.length;
    let i = 0
    let j = 0
    let mergedArray = []
    while (i < m && j < n) {
        if (leftArray[i] < rightArray[j]) {
            mergedArray.push(leftArray[i++])

        }
        else {
            mergedArray.push(rightArray[j++])
        }

    }
    for (; i < m; i++) {
        mergedArray.push(leftArray[i])
    }
    for (; j < n; j++) {
        mergedArray.push(rightArray[j])
    }
    return mergedArray

}
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));