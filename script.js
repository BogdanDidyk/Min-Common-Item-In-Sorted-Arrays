function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntegerArray(length, min, max) {
    return Array.from({length}, () => getRandomInteger(min, max));
}

function getSortedArrayByAsc(arr) {
    return [...arr].sort((a, b) => a - b);
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

const arr1 = getSortedArrayByAsc(getRandomIntegerArray(10));
const arr2 = getSortedArrayByAsc(getRandomIntegerArray(8));
const arr3 = getSortedArrayByAsc(getRandomIntegerArray(9));

console.log(arr1);
console.log(arr2);
console.log(arr3);

const minCommonItem = getMinCommonItem(arr1, arr2, arr3);
console.log("Min common item:", minCommonItem);