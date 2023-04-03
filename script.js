function getRandomSortedArray(length, min = 0, max = 9) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return arr.sort((a, b) => a - b);
}

const arr1 = getRandomSortedArray(10);
const arr2 = getRandomSortedArray(8);
const arr3 = getRandomSortedArray(9);

console.log(arr1);
console.log(arr2);
console.log(arr3);