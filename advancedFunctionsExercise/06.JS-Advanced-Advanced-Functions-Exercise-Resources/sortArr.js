function sortArr(arr,argument) {
    if (argument == 'asc') {
        arr.sort((a,b) => a - b);
    } else if (argument == 'desc') {
    arr.sort((a,b) => b - a);
    }
    return arr;

}
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));