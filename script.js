function getRandomSortedArray(length, min = 0, max = 9) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return arr.sort((a, b) => a - b);
}

function getMinCommonItem(arr1, arr2, arr3) {
    const len1 = arr1.length, len2 = arr2.length, len3 = arr3.length;
    let i = 0, j = 0, k = 0;

    while (i < len1 && j < len2 && k < len3) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) return arr1[i];

        if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) i++;
        else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) j++;
        else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) k++;
    }

    return undefined;
}

const arr1 = getRandomSortedArray(10);
const arr2 = getRandomSortedArray(8);
const arr3 = getRandomSortedArray(9);

console.log(arr1);
console.log(arr2);
console.log(arr3);

const minCommonItem = getMinCommonItem(arr1, arr2, arr3);
console.log("Min common item:", minCommonItem);